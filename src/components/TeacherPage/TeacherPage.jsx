import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export default function TeacherPage() {
	return (
		<Box w={'full'} bg={'black'} h={'auto'} pt={28}>
			<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={'60px'}>
				<Box w={'350px'} h={'500px'} border={'1px'} borderColor={'white'} rounded={'xl'}></Box>
				<Box w={'350px'} h={'500px'} border={'1px'} borderColor={'white'} rounded={'xl'}></Box>
				<Box w={'350px'} h={'500px'} border={'1px'} borderColor={'white'} rounded={'xl'}></Box>
			</Box>
		</Box>
	);
}
