import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RiTelegramLine } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { formSchema } from '@/lib/validation';

export default function ContactPage() {
	const [load, setLoad] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			phone: '',
			kursnomi: '',
		},
	});

	const onSubmit = async values => {
		setLoad(true);
		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_API;
		const telegramBotKey = process.env.NEXT_PUBLIC_TELEGRAM_KEY_API;

		const promise = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'no-cache',
			},
			body: JSON.stringify({
				chat_id: telegramBotKey,
				text: `Name: ${values.username},\nPhone: ${values.phone},\ncourse name: ${values.kursnomi}`,
			}),
		})
			.then(() => reset())
			.finally(() => setLoad(false));

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent',
			error: 'Error occurred',
		});
	};

	return (
		<Box w={'full'} bg={'gray.900'} pt={10} mt={10} px={{ xl: '150px', base: '50px' }} rounded={'xl'}>
			<Heading color={'white'} fontFamily={'serif'}>
				You can leave your request here
			</Heading>

			<form onSubmit={handleSubmit(onSubmit)}>
				<HStack pt={10} spacing={5}>
					<FormControl isRequired>
						<FormLabel color={'white'}>Name</FormLabel>
						<Input {...register('username')} disabled={load} placeholder='Ismingizni kiriting' />
						{errors.username && <p className='text-red-500'>{errors.username.message}</p>}
					</FormControl>

					<FormControl isRequired>
						<FormLabel color={'white'}>Phone Number</FormLabel>
						<Controller
							name='phone'
							control={control}
							render={({ field }) => (
								<PhoneInput
									{...field}
									country={'uz'}
									inputStyle={{ width: '100%', backgroundColor: 'transparent', color: 'white' }}
									buttonStyle={{ backgroundColor: '#ff9800', borderRadius: '8px' }}
									dropdownStyle={{ backgroundColor: '#fff3e0', borderRadius: '8px' }}
								/>
							)}
						/>
						{errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
					</FormControl>

					<FormControl>
						<FormLabel color={'white'}>Course Name</FormLabel>
						<Input {...register('kursnomi')} color={'white'} placeholder='Kursni Yozing' disabled={load} />
					</FormControl>

					<Button disabled={load} color={'white'} bg={'yellow.600'} type='submit' colorScheme='blue' width='full' mt={8}>
						Send Information
					</Button>
				</HStack>
			</form>

			<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={3} mt={5}>
				<Link href={'https://www.instagram.com/academy_genius_?igsh=MW92aWVjYm52MGF3Yg%3D%3D&utm_source=qr'}>
					<GrInstagram size={30} className='hover:text-yellow-500 ' color='white' />
				</Link>
				<Link href={'https://t.me/geniusacademygroup'}>
					<RiTelegramLine size={37} className='hover:text-yellow-500 ' color='white' />
				</Link>
			</Box>
		</Box>
	);
}
