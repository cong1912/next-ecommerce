import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import SectionMain from '../SectionMain';
import SectionSale from '../SectionSale';

const Main = () => {
  return (
    <Box as="main" backgroundColor={'default.blue.100'}>
      <Container maxW={'85%'} pt={5}>
        <SectionMain />
        <SectionSale />
      </Container>
    </Box>
  );
};

export default Main;
