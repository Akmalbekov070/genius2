import HeaderPage from '@/components/HeaderPage/HeaderPage';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }) {
	return (
		<ClerkProvider>
			<ChakraProvider>
				<HeaderPage />
				<Component {...pageProps} />
				<Toaster position='top' />
			</ChakraProvider>
		</ClerkProvider>
	);
}
