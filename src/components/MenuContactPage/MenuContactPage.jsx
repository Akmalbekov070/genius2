import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
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
	);
}
