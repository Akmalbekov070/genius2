import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function StudentsPage() {
	const [data, setData] = useState([]);
	const [newName, setNewName] = useState('');
	const [newAge, setNewAge] = useState('');
	const [newStatus, setNewStatus] = useState('+');
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		try {
			const sessionKey = sessionStorage.getItem('sessionKey');
			if (!sessionKey) {
				sessionStorage.setItem('sessionKey', Date.now().toString());
				localStorage.removeItem('tableData');
			}

			const savedData = localStorage.getItem('tableData');
			if (savedData) {
				setData(JSON.parse(savedData));
			} else {
				setData([]);
			}
		} catch (error) {
			console.error('Error reading from localStorage:', error);
		}
	}, []);

	useEffect(() => {
		try {
			if (isClient) {
				localStorage.setItem('tableData', JSON.stringify(data));
			}
		} catch (error) {
			console.error('Error saving to localStorage:', error);
		}
	}, [data, isClient]);

	const handleAddRow = () => {
		if (newName && newAge && newStatus) {
			const newRow = { id: data.length + 1, name: newName, age: Number(newAge), status: newStatus };
			setData([...data, newRow]);
			setNewName('');
			setNewAge('');
			setNewStatus('+');
		}
	};

	return (
		<Box p={28}>
			<Table variant='simple' size='md'>
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th>Name</Th>
						<Th>Data</Th>
						<Th>Status</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map(row => (
						<Tr key={row.id}>
							<Td>{row.id}</Td>
							<Td>{row.name}</Td>
							<Td>{row.age}</Td>
							<Td>{row.status}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>

			<Box mt={4} display='flex' gap={2}>
				<Input placeholder='Name' value={newName} onChange={e => setNewName(e.target.value)} />
				<Input placeholder='Data' type='number' value={newAge} onChange={e => setNewAge(e.target.value)} />
				<Input placeholder='Status (+ or -)' value={newStatus} onChange={e => setNewStatus(e.target.value)} />
				<Button colorScheme='blue' onClick={handleAddRow}>
					Add Row
				</Button>
			</Box>
		</Box>
	);
}
