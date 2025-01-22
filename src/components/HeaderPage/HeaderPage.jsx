import React from 'react';
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { GrInstagram } from 'react-icons/gr';
import { RiTelegramLine } from 'react-icons/ri';

export default function HeaderPage() {
	return (
		<Box
			w={'full'}
			h={24}
			bg={'blue.700'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'space-between'}
			px={16}
			color={'white'}
		>
			{/* left header  */}
			<Link href={'/'}>
				<HStack>
					<Image
						w={24}
						src='https://i.postimg.cc/SxydV0n1/removal-ai-e2c59107-02d4-4e7b-a4bc-dd5d9d16f024-photo-2024-11-04-10-22-39.png'
						alt='Image Genius'
					/>
					<Box w={'1px'} h={16} bg={'white'}></Box>
					<Text w={'140px'} fontStyle={'-moz-initial'} fontFamily={'mono'} fontSize={'lg'} pl={2}>
						Genius Academy
					</Text>
				</HStack>
			</Link>
			{/* right header */}
			<HStack gap={16} fontSize={'md'} fontFamily={'cursive'}>
				<Link href='/' className='hover:text-yellow-500'>
					About Genius
				</Link>
				<Link href='/' className='hover:text-yellow-500'>
					Teachers
				</Link>
				<Link href='/' className='hover:text-yellow-500'>
					Students
				</Link>
				<Link href='/' className='hover:text-yellow-500'>
					Results
				</Link>
				<Link href='/' className='hover:text-yellow-500'>
					Join a Group
				</Link>
				{/* clerk this */}
			</HStack>
			<HStack gap={3} cursor={'pointer'}>
				<GrInstagram size={30} className='hover:text-yellow-500' />
				<RiTelegramLine size={37} className='hover:text-yellow-500' />
				<Button bg={'yellow.400'} color={'white'}>
					Join a Group
				</Button>
			</HStack>
		</Box>
	);
}
