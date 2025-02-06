import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PrisePage from '../PrisePage/PrisePage';
import AboutAcademy from '../AboutAcademy/AboutAcademy';
import AllCourse from '../AllCourse/AllCourse';

export default function PricesPage() {
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
		<Box w={'full'} h={'auto'} bg={'black'}>
			<Box>
				<Heading color={'white'} textAlign={'center'} py={28} fontSize={'5xl'} fontFamily={'serif'} textTransform={'uppercase'}>
					Academy view
				</Heading>
			</Box>
			<Box w={'full'}>
				<Carousel responsive={responsive}>
					<Box w={'full'}>
						<Image pr={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/tgqZS43W/photo-2025-01-28-08-28-30.jpg' alt='img' />
					</Box>
					<Box w={'full'}>
						<Image rounded={'2xl'} src='https://i.postimg.cc/05MZxP37/photo-2025-02-02-10-40-06.jpg' alt='imh' />
					</Box>
					<Box>
						<Image pl={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/3J2B493R/photo-2025-02-02-10-41-24.jpg' alt='next' />
					</Box>
					<Box>
						<Image pl={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/XNCKmxG8/photo-2025-02-02-10-39-59.jpg' alt='alt' />
					</Box>
					<Box>
						<Image pl={2} pt={1.5} rounded={'2xl'} src='https://i.postimg.cc/hGvTr0RV/photo-2025-02-02-10-41-22.jpg' alt='imgh' />
					</Box>
				</Carousel>
			</Box>
			{/* PrisePage ---- */}
			<PrisePage />
			{/* AboutAcademy ---------- */}
			<AboutAcademy />
			{/* AllCourse ------- */}
			<AllCourse />
		</Box>
	);
}
