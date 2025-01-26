import React from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import { Box, Heading, Image } from '@chakra-ui/react';

export default function HomePage() {
	return (
		<Box>
			<Box>
				{/* HeaderPage */}
				<HeaderPage />
			</Box>
			<Box w={'full'} position={'absolute'} top={0} left={0}>
				<Image
					w={'full'}
					h={'700px'}
					src='https://avatars.mds.yandex.net/i?id=eaed6936a12d380e0ccdbbe1da42a0b17fb9165e-8497133-images-thumbs&n=13'
					alt=''
				/>
			</Box>
			{/* black fon */}
			<Box w={'full'} h={'700px'} bg={'blackAlpha.800'} position={'absolute'} top={0} left={0}></Box>
			<Box position={'relative'} zIndex={5} pt={28}>
				<Heading>Salom</Heading>
			</Box>
		</Box>
	);
}
