import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function AboutAcademy() {
	return (
		<Box w={'full'} bg={'black'} px={{ xl: '150px', base: '50px' }} pt={'60px'}>
			<Box w={'full'} display={'flex'} justifyContent={'space-between'}>
				{/* left page */}
				<Box fontFamily={'serif'}>
					<Heading color={'yellow.600'} fontSize={'32px'} fontFamily={'serif'}>
						About the academy
					</Heading>
					<Text w={'500px'} color={'white'} py={5} fontSize={'20px'}>
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
				<Box></Box>
			</Box>
		</Box>
	);
}
