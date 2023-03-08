import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const SectionSale = () => {
  return (
    <Box
      as="section"
      shadow="md"
      backgroundColor={'default.light'}
      mt={5}
      borderRightRadius={1}
    >
      <Flex gap={3}>
        <Box w={'21%'} borderRightRadius="1" pl={5}>
          hello
        </Box>
        <Box>hello</Box>
      </Flex>
    </Box>
  );
};

export default SectionSale;
