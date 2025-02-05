import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function AboutAcademy() {
	return (
		<Box w={'full'} bg={'black'} px={{ xl: '150px', base: '50px' }} pt={{ xl: '60px', base: '20px' }}>
			<Box
				w={'full'}
				display={'flex'}
				flexDirection={{ base: 'column' }}
				justifyContent={{ xl: 'space-between', base: 'center' }}
				alignItems={{ base: 'center' }}
			>
				{/* left page */}
				<Box fontFamily={'serif'} pt={10}>
					<Heading color={'yellow.600'} fontSize={'32px'} fontFamily={'serif'}>
						About the academy
					</Heading>
					<Text w={{ xl: '500px', base: '100%' }} color={'white'} py={5} fontSize={'20px'}>
						Residential complex Park Chelyuskintsev is ideally located on Nezavisimosti Avenue near Park Chelyuskintsev and the
						Botanical Garden. Residential complex Park Chelyuskintsev. Life surrounded by nature.
					</Text>
					<Text fontSize={'23px'} pt={10}>
						+998(91).313.89.89
					</Text>
					<HStack gap={2} pt={2}>
						<Box w={'80px'} h={'4px'} bg={'yellow.600'}></Box>
						<Text>Usmana yusupov,BULVAR ZILIOL BAXT HOTEL</Text>
					</HStack>
				</Box>
				{/* right page */}
				<Box pt={{ base: '20px' }}>
					<Image
						w={{ xl: '400px', lg: '700px', base: '500px' }}
						h={{ xl: '400px', lg: '500px', base: '400px' }}
						rounded={'xl'}
						src='https://i.postimg.cc/bvTkrYyF/photo-2025-01-28-08-28-29.jpg'
						alt='aboutAcademy'
					/>
				</Box>
			</Box>
		</Box>
	);
}
