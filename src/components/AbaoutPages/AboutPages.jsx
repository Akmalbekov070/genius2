import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function AboutPages() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<Box bg={'black'} pt={28}>
			<Box>
				<Heading textAlign={'center'} color={'white'} fontFamily={'serif'}>
					AboutAcademy
				</Heading>
			</Box>
			{/* about */}
			<Box w={'full'} bg={'black'} px={{ xl: '150px', base: '50px' }} pt={{ xl: '60px', base: '20px' }}>
				<Box
					w={'full'}
					display={'flex'}
					flexDirection={{ xl: 'unset', base: 'column' }}
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
						<Text fontSize={'23px'} color={'white'} pt={10}>
							+998(91).313.89.89
						</Text>
						<HStack gap={2} pt={2} color={'white'}>
							<Box w={'80px'} h={'4px'} bg={'yellow.600'}></Box>
							<Text>Usmana yusupov,BULVAR ZILIOL BAXT HOTEL</Text>
						</HStack>
					</Box>
					{/* right page */}
					<Box pt={{ xl: '50px', base: '20px' }}>
						<Image
							w={{ xl: '400px', lg: '700px', base: '500px' }}
							h={{ xl: '400px', lg: '500px', base: '400px' }}
							rounded={'xl'}
							src='https://i.postimg.cc/Kz0PqGCg/photo-2025-01-28-08-28-33.jpg'
							alt='aboutAcademy'
						/>
					</Box>
				</Box>
			</Box>
			{/* Carusel */}
			<Box w={'full'} pt={20}>
				<Carousel responsive={responsive}>
					<Box w={'full'}>
						<Image pr={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/05MZxP37/photo-2025-02-02-10-40-06.jpg' alt='img' />
					</Box>
					<Box w={'full'}>
						<Image rounded={'2xl'} src='https://i.postimg.cc/tgqZS43W/photo-2025-01-28-08-28-30.jpg' alt='imh' />
					</Box>
					<Box>
						<Image pl={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/XNCKmxG8/photo-2025-02-02-10-39-59.jpg' alt='next' />
					</Box>
					<Box>
						<Image pl={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/3J2B493R/photo-2025-02-02-10-41-24.jpg' alt='alt' />
					</Box>
					<Box>
						<Image pl={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/hGvTr0RV/photo-2025-02-02-10-41-22.jpg' alt='imgh' />
					</Box>
				</Carousel>
			</Box>
			{/* Contact */}
			<Box
				w={'full'}
				bg={'black'}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				px={{ xl: '150px', base: '50px' }}
				pt={5}
			>
				<Box
					w={{ base: 'full', lg: '400px' }}
					display={{ base: 'flex', lg: 'block' }}
					justifyContent={{ base: 'center' }}
					alignItems={{ base: 'center' }}
					flexDirection={'column'}
				>
					<Heading fontFamily={'serif'} color={'white'} fontSize={'5xl'} letterSpacing={10}>
						Genius
					</Heading>
					<Text color={'yellow.600'} fontSize={'2xl'} fontFamily={'serif'}>
						Academy
					</Text>
					<Text color={'white'} fontSize={'xl'} fontFamily={'serif'}>
						+998(91).313.89.89
					</Text>
					<Text pt={5} color={'white'}>
						Write to us and we will help you
					</Text>
					<Button w={'230px'} color={'white'} my={2} bg={'yellow.600'} type='submit' colorScheme='blue'>
						Write to us{' '}
					</Button>
				</Box>
				<Box pt={16}>
					<Box display={{ base: 'none', lg: 'flex' }} flexDirection={{ base: 'row', lg: 'column' }}>
						<Text color={'white'} fontFamily={'serif'}>
							Home
						</Text>
						<Text color={'white'} fontFamily={'serif'} pt={3}>
							Terms of purchase
						</Text>
						<Text color={'white'} fontFamily={'serif'} pt={3}>
							About the developer
						</Text>
						<Text color={'white'} fontFamily={'serif'} pt={3}>
							About the complex
						</Text>
					</Box>
				</Box>
				<Box pt={'29px'} display={{ base: 'none', lg: 'flex' }} flexDirection={{ base: 'row', lg: 'column' }}>
					<Text color={'white'} fontFamily={'serif'}>
						Contacts
					</Text>
					<Text color={'white'} pt={3} fontFamily={'serif'}>
						Terms of personal data processing
					</Text>
					<Text color={'white'} pt={3} fontFamily={'serif'}>
						Cookie settings
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
