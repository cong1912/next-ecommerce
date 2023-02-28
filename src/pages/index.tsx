import { Inter } from '@next/font/google';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container
} from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const temp = () => {
    console.log(1);
  };
  return (
    <>
      <Navbar />
      {/* <Container as="main" mt="20">
        main
      </Container> */}
    </>
  );
}
