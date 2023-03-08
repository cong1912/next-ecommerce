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
import Main from '@/components/Main';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const temp = () => {
    console.log(1);
  };
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
