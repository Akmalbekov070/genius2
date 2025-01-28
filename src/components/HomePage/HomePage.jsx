import React from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import { Box, Button, Heading, Image } from '@chakra-ui/react';

export default function HomePage() {
	return (
		<Box>
			<Box>
				{/* HeaderPage */}
				<HeaderPage />
			</Box>
			<Box w={'full'} position={'absolute'} top={0} left={0}>
				<Image w={'full'} h={'900px'} src='https://i.postimg.cc/bvTkrYyF/photo-2025-01-28-08-28-29.jpg' alt='img' />
			</Box>
			{/* black fon */}
			<Box w={'full'} h={'900px'} bg={'blackAlpha.700'} position={'absolute'} top={0} left={0}></Box>
			<Box
				position={'relative'}
				zIndex={5}
				pt={64}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				px={20}
			>
				<Box w={'45%'} pt={10}>
					<Heading fontFamily={'cursive'} fontSize={'50px'} color={'white'} textShadow={'dark-lg'}>
						More about the newly opened Genius Academy....
					</Heading>
					<Button w={'240px'} bg={'yellow.500'} color={'white'} h={'60px'} mt={10} fontSize={'2xl'}>
						About Academy{' '}
					</Button>
				</Box>
				<Heading>Salom</Heading>
			</Box>
		</Box>
	);
}
