import React from 'react';
import { Box, Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { GrInstagram } from 'react-icons/gr';
import { RiTelegramLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';

export default function HeaderPage() {
	return (
		<Box w={'full'} position={'fixed'} top={0} left={0} zIndex={20}>
			<Box
				w={'full'}
				h={24}
				// remove bg

				backdropFilter='blur(5px)'
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
				px={{ xl: 16, lg: 5, base: 0 }}
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
						<Box w={'1px'} h={16} bg={'white'} display={{ xl: 'flex', base: 'none' }}></Box>
						<Text
							w={'140px'}
							display={{ lg: 'flex', base: 'none' }}
							zIndex={10}
							fontStyle={'-moz-initial'}
							fontFamily={'mono'}
							fontSize={'lg'}
							pl={{ xl: 2, base: 0 }}
						>
							Genius Academy
						</Text>
					</HStack>
				</Link>
				{/* right header */}
				<HStack gap={16} fontSize={'md'} fontFamily={'cursive'} display={{ xl: 'flex', base: 'none' }}>
					<Link href='/About' className='hover:text-yellow-500'>
						About Genius
					</Link>
					<Link href='/teacher' className='hover:text-yellow-500'>
						Teachers
					</Link>
					<Link href='/Student' className='hover:text-yellow-500'>
						Students
					</Link>
					<Link href='/' className='hover:text-yellow-500'>
						Results
					</Link>
					<Link href='/joinGroup' className='hover:text-yellow-500'>
						Join a Group
					</Link>
					{/* clerk this */}
				</HStack>
				{/* menu-------  */}
				<HStack gap={3} cursor={'pointer'}>
					<Box display={{ xl: 'none', lg: 'flex' }} color={'black'}>
						<Menu>
							<MenuButton pt={1}>
								<AiOutlineMenu color='white' size={'29'} />
							</MenuButton>
							<MenuList>
								<MenuItem>
									<Link href='/About' className='hover:text-yellow-500'>
										About Genius
									</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/teacher' className='hover:text-yellow-500'>
										Teachers
									</Link>
								</MenuItem>
								<MenuItem>
									{' '}
									<Link href='/Student' className='hover:text-yellow-500'>
										Students
									</Link>
								</MenuItem>
								<MenuItem>
									{' '}
									<Link href='/' className='hover:text-yellow-500'>
										Results
									</Link>
								</MenuItem>
								<MenuItem>
									{' '}
									<Link href='/' className='hover:text-yellow-500'>
										Join a Group
									</Link>
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
					<Link href={'https://www.instagram.com/academy_genius_?igsh=MW92aWVjYm52MGF3Yg%3D%3D&utm_source=qr'}>
						<GrInstagram size={30} className='hover:text-yellow-500' />
					</Link>
					<Link href={'https://t.me/geniusacademygroup'}>
						<RiTelegramLine size={37} className='hover:text-yellow-500' />
					</Link>
					<Button bg={'yellow.400'} className='hover:text-yellow-500' color={'white'}>
						Join a Group
					</Button>
				</HStack>
			</Box>
		</Box>
	);
}
