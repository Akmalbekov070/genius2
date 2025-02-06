import { Box, Button, FormControl, FormLabel, Heading, HStack, Input } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RiTelegramLine } from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';

export default function ContactPage() {
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		alert(`Ism: ${name}\nEmail: ${email}\nTelefon: ${phone}`);
	};
	return (
		<Box w={'full'} bg={'gray.900'} pt={10} mt={10} px={{ xl: '150px', base: '50px' }} rounded={'xl'}>
			<Box>
				<Heading color={'white'} fontFamily={'serif'}>
					You can leave your request here
				</Heading>
				<HStack pt={10} display={{ lg: 'flex', base: 'block' }}>
					<FormControl isRequired>
						<FormLabel color={'white'}>Ism</FormLabel>
						<Input value={name} onChange={e => setName(e.target.value)} placeholder='Ismingizni kiriting' />
					</FormControl>

					<FormControl isRequired py={{ base: 5 }}>
						<FormLabel color={'white'}>Kurs</FormLabel>
						<Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Kursni kiriting' />
					</FormControl>

					<FormControl isRequired color={'black'}>
						<FormLabel color={'white'}>Telefon raqami</FormLabel>
						<PhoneInput
							country={'uz'}
							value={phone}
							onChange={setPhone}
							inputStyle={{ width: '100%', backgroundColor: 'transparent', color: 'white' }}
							buttonStyle={{ backgroundColor: '#ff9800', borderRadius: '8px' }}
							dropdownStyle={{ backgroundColor: '#fff3e0', borderRadius: '8px' }}
						/>
					</FormControl>
				</HStack>
				<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={3}>
					<Button color={'white'} my={10} bg={'yellow.600'} type='submit' colorScheme='blue' width='600px'>
						Send Information
					</Button>
					<Link href={'https://www.instagram.com/academy_genius_?igsh=MW92aWVjYm52MGF3Yg%3D%3D&utm_source=qr'}>
						<GrInstagram size={30} className='hover:text-yellow-500 ' color='white' />
					</Link>
					<Link href={'https://t.me/geniusacademygroup'}>
						<RiTelegramLine size={37} className='hover:text-yellow-500 ' color='white' />
					</Link>
				</Box>
			</Box>
		</Box>
	);
}
