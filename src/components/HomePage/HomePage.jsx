import React from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import { Box, Image } from '@chakra-ui/react';

export default function HomePage() {
	return (
		<Box>
			<Box>
				{/* HeaderPage */}
				<HeaderPage />
			</Box>
			<Image
				src='https://avatars.mds.yandex.net/i?id=eaed6936a12d380e0ccdbbe1da42a0b17fb9165e-8497133-images-thumbs&n=13'
				alt=''
			/>
		</Box>
	);
}
