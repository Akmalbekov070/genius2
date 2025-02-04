import { Box, Button, Heading, HStack, Image, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { TbHandFingerRight, TbHandFingerDown } from 'react-icons/tb';
import { BsCurrencyDollar } from 'react-icons/bs';

export default function PrisePage() {
	const [selectedOption, setSelectedOption] = useState('');
	return (
		<Box px={{ xl: '150px', base: '50px' }} pt={{ xl: '100px', base: '60px' }}>
			<Box w={'full'} display={{ xl: 'flex', lg: 'block' }} justifyContent={'space-between'}>
				{/* left box */}
				<Box>
					<Heading w={{ xl: '500px', base: '300px' }} color={'white'} fontFamily={'serif'}>
						{/* Choose the course you want and find out the course prices. If you like the course, register via this Join group
						button. */}
						Learn about course prices
					</Heading>
					<Box display={{ xl: 'flex', base: 'none' }}>
						<Text w={'370px'} fontSize={'19px'} textAlign={'end'} color={'white'}>
							Choose a course
						</Text>
						<Box>
							<TbHandFingerRight color='white' size={'25'} />
						</Box>
					</Box>
					<Box pt={'10px'}>
						<Image
							src='https://intimedata.ru/wp-content/uploads/2021/12/%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B01.png'
							alt='img'
						/>
					</Box>
					<Box display={{ xl: 'none', base: 'flex' }} gap={2} pt={2} color={'white'}>
						<Text w={'370px'} fontSize={'19px'} textAlign={'end'}>
							Choose a course
						</Text>
						<Box pt={1}>
							<TbHandFingerDown color='white' size={'25'} />
						</Box>
					</Box>
				</Box>
				{/* Right Box */}
				<Box
					pt={'42px'}
					display={{ base: 'flex', xl: 'block' }}
					flexDirection={{ base: 'column', xl: 'block' }}
					justifyContent={{ base: 'center', xl: 'block' }}
					alignItems={{ base: 'center', xl: 'block' }}
				>
					<Select w={{ xl: '500px', lg: '500px', base: '280px' }} onChange={e => setSelectedOption(e.target.value)} bg={'black'}>
						<option color='yellow' value='option0'>
							All Course
						</option>
						<option color='yellow' value='option1'>
							Chemistry
						</option>
						<option color='black' value='option2'>
							Biology
						</option>
						<option color='black' value='option3'>
							Arabic language
						</option>
						<option color='black' value='option4'>
							Mathematics
						</option>
						<option color='black' value='option5'>
							Computer literacy
						</option>
						<option color='black' value='option6'>
							Programming course
						</option>
						<option color='black' value='option7'>
							Prodlyonka
						</option>
						<option color='black' value='option8'>
							Russian Prodlyonka
						</option>
						<option color='black' value='option9'>
							Individual Prodlyonka
						</option>
						<option color='black' value='option10'>
							Russian language
						</option>
						<option color='black' value='option11'>
							Korean language
						</option>
						<option color='black' value='option12'>
							German language
						</option>
						<option color='black' value='option13'>
							English
						</option>
						<option color='black' value='option14'>
							English A1
						</option>
						<option color='black' value='option15'>
							English A2
						</option>
						<option color='black' value='option16'>
							English B1
						</option>
						<option color='black' value='option17'>
							English B2
						</option>
						<option color='black' value='option18'>
							English C1
						</option>
						<option color='black' value='option19'>
							English CEFR
						</option>
						<option color='black' value='option20'>
							IELTS
						</option>
					</Select>
					<HStack color={'white'}>
						<Text fontSize={'20px'} textTransform={'uppercase'} py={10}>
							price
						</Text>
						<BsCurrencyDollar color='white ' size={'23'} />
					</HStack>
					<Box fontFamily={'serif'}>
						{selectedOption === 'option1' && (
							<Button
								w={{ xl: '500px', base: '280px' }}
								fontSize={{ xl: '25px', base: '20' }}
								color={'yellow.600'}
								bg={'gray.800'}
							>
								Chemistry - 400.000Soum
							</Button>
						)}
						{selectedOption === 'option2' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Biology - 400.000Soum
							</Button>
						)}
						{selectedOption === 'option3' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Arabic language - 400.000Soum
							</Button>
						)}
						{selectedOption === 'option4' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Mathematics - 500.000Soum
							</Button>
						)}
						{selectedOption === 'option5' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Computer literacy - 400.000Soum
							</Button>
						)}
						{selectedOption === 'option6' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Programming - 500.000Soum
							</Button>
						)}
						{selectedOption === 'option7' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Prodlyonka - 600.000Soum
							</Button>
						)}
						{selectedOption === 'option8' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Russian Prodlyonka - 400.000Soum
							</Button>
						)}
						{selectedOption === 'option9' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Individual Prodlyonka 1.000.000Mln
							</Button>
						)}
						{selectedOption === 'option10' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Russian language 400.000Soum
							</Button>
						)}
						{selectedOption === 'option11' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								Korean language 400.000Soum
							</Button>
						)}
						{selectedOption === 'option12' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								German language 400.000Soum
							</Button>
						)}
						{selectedOption === 'option13' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								English 400.000Soum
							</Button>
						)}
						{selectedOption === 'option14' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								English A1 400.000Soum
							</Button>
						)}
						{selectedOption === 'option15' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								English A2 450.000Soum
							</Button>
						)}
						{selectedOption === 'option16' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								English B1 550.000Soum
							</Button>
						)}
						{selectedOption === 'option17' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								English B2 600.000Soum
							</Button>
						)}
						{selectedOption === 'option18' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								English C1 650.000Soum
							</Button>
						)}
						{selectedOption === 'option19' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								English Cefr 550.000Soum
							</Button>
						)}
						{selectedOption === 'option20' && (
							<Button w={{ xl: '500px', base: '280px' }} fontSize={'28px'} color={'yellow.600'} bg={'gray.800'}>
								IELTS 700.000Soum
							</Button>
						)}
					</Box>
					<Box w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} pt={10}>
						<Button color={'white'} bg={'yellow.600'} fontSize={20} colorScheme='blue' onClick={() => setSelectedOption('')}>
							Restart
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
