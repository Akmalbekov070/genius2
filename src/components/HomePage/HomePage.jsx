import React from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import { Box, Button, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';
import PricesPage from '../PrisecPage/PricesPage';

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
				pt={{ xl: 64, lg: 32, base: 36 }}
				display={{ xl: 'flex', base: 'block' }}
				justifyContent={'space-between'}
				alignItems={'center'}
				px={20}
			>
				<Box w={{ xl: '45%', lg: '100%', base: '100%' }}>
					<Heading
						fontFamily={'serif'}
						fontSize={{ xl: '50px', lg: '40px', base: '30px' }}
						color={'white'}
						textShadow={'dark-lg'}
					>
						More about the newly opened Genius Academy....
					</Heading>
					<Button
						w={'240px'}
						bg={'yellow.500'}
						color={'white'}
						h={'60px'}
						mt={10}
						fontSize={'2xl'}
						className='hover:text-yellow-500'
						display={{ xl: 'flex', base: 'none' }}
					>
						About Academy{' '}
					</Button>
				</Box>
				<Box position={'relative'}>
					<Box position={'absolute'} top={{ xl: 52, lg: '150px', base: '100px' }} left={{ xl: 56, lg: '400px', base: '30%' }}>
						<Link href={'https://www.instagram.com/reel/DBOESvBujuI/?igsh=MTQxd2c1MXUxZDJ4Zg=='}>
							<Image cursor={'pointer'} src='https://i.postimg.cc/66h6MbqN/Frame-34503-1.png' alt='alt' />
						</Link>
					</Box>
					<Heading>
						<Image
							w={{ xl: '540px', lg: '100%', base: '100%' }}
							rounded={'2xl'}
							shadow={'dark-lg'}
							h={{ lg: '500px', lg: '400px', base: '300px' }}
							src='https://i.postimg.cc/Kz0PqGCg/photo-2025-01-28-08-28-33.jpg'
							alt='img'
							mt={{ base: 4 }}
						/>
					</Heading>
					<Button
						w={'240px'}
						bg={'yellow.500'}
						color={'white'}
						h={'60px'}
						mt={10}
						fontSize={'2xl'}
						className='hover:text-yellow-500'
						display={{ xl: 'none', base: 'flex' }}
					>
						About Academy{' '}
					</Button>
				</Box>
			</Box>
			{/* PricesPage */}
			<Box w={'full'} pt={'140px'}>
				<PricesPage />
			</Box>
		</Box>
	);
}
