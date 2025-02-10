import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function MenuContactPage() {
	return (
		<Box
			w={'full'}
			bg={'black'}
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			px={{ xl: '150px', base: '50px' }}
			pt={10}
		>
			<Box>
				<Heading fontFamily={'serif'} color={'white'} fontSize={'5xl'} letterSpacing={10}>
					Genius
				</Heading>
				<Text color={'yellow.600'} fontSize={'2xl'} fontFamily={'serif'}>
					Academy
				</Text>
				<Text color={'white'} fontSize={'xl'} fontFamily={'serif'}>
					+998(91).313.89.89
				</Text>
        <Heading>
					
				</Heading>
			</Box>
		</Box>
	);
}
