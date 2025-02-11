import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

export default function MapsPage() {
	return (
		<Box>
			<Box pt={10}>
				<AspectRatio>
					<iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3441.419284600178!2d66.95911177568914!3d39.64196536982784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1f2ca0bde139%3A0x2342be362047c94c!2z0JfQuNC70L7QuyDQkdCw0YXRgg!5e0!3m2!1sru!2sus!4v1738861408116!5m2!1sru!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' />
				</AspectRatio>
			</Box>
		</Box>
	);
}
