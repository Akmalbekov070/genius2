import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { RiEnglishInput, RiComputerLine } from 'react-icons/ri';
import { GiChemicalTank, GiProgression } from 'react-icons/gi';
import { MdOutlineBiotech } from 'react-icons/md';
import { PiMathOperationsBold } from 'react-icons/pi';
import { FaPersonDotsFromLine } from 'react-icons/fa6';
import { TbAlphabetArabic } from 'react-icons/tb';
import Link from 'next/link';

export default function AllCourse() {
	return (
		<Box w={'full'} bg={'black'} pt={'70px'}>
			<Box w={'full'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
				<Heading fontFamily={'serif'} fontSize={{ xl: '50px', base: '30px' }}>
					Courses we have available
				</Heading>
				{/* one page */}
				<HStack
					gap={{ xl: 36, base: 10 }}
					pt={'60px'}
					pl={{ base: '30px' }}
					flexWrap={'wrap'}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							{/* One------ */}
							<Box border={'1px'} rounded={'xl'}>
								<RiEnglishInput size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								English
							</Text>
						</Box>
					</Link>
					{/* Two------- */}
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							<Box border={'1px'} rounded={'xl'}>
								<RiComputerLine size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								Literacy
							</Text>
						</Box>
					</Link>
					{/* Treee------ */}
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							<Box border={'1px'} rounded={'xl'}>
								<GiChemicalTank size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								Chemistry
							</Text>
						</Box>
					</Link>
					{/* For----- */}
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							<Box border={'1px'} rounded={'xl'}>
								<MdOutlineBiotech size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								Biology
							</Text>
						</Box>
					</Link>
				</HStack>
				{/* two page ---- */}
				<HStack
					gap={{ xl: 36, base: 10 }}
					pt={'60px'}
					pl={8}
					flexWrap={'wrap'}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							{/* One------ */}
							<Box border={'1px'} rounded={'xl'}>
								<PiMathOperationsBold size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								Matematic
							</Text>
						</Box>
					</Link>
					{/* Two------- */}
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							<Box border={'1px'} rounded={'xl'}>
								<GiProgression size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								Programming
							</Text>
						</Box>
					</Link>
					{/* Treee------ */}
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							<Box border={'1px'} rounded={'xl'}>
								<FaPersonDotsFromLine size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								Prodlyonka
							</Text>
						</Box>
					</Link>
					{/* For----- */}
					<Link href={'/'}>
						<Box display={'flex'} flexDirection={'column'} alignItems={'center'} color='yellow.600'>
							<Box border={'1px'} rounded={'xl'}>
								<TbAlphabetArabic size={'100'} />
							</Box>
							<Text color={'white'} fontFamily={'serif'} fontSize={'19px'} pt={2}>
								{' '}
								Arabic Course
							</Text>
						</Box>
					</Link>
				</HStack>
				<Button mt={21} color={'white'} bg={'yellow.600'} fontSize={20} colorScheme='blue'>
					view all courses
				</Button>
			</Box>
		</Box>
	);
}
