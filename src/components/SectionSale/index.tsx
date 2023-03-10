import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
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
          <Text as="h2" fontSize="heading2" fontWeight={600}>
            Deals and offers
          </Text>
          <Text as="h2" fontSize="medium" fontWeight={400}>
            Hygiene equipments
          </Text>
        </Box>
        <Flex w="80%">
          <Box
            as={Center}
            borderLeft={'1px'}
            borderLeftColor="default.gray.200"
            w={'20%'}
          >
            <Flex
              flexDirection={'column'}
              alignItems="center"
              textAlign={'center'}
              py={5}
            >
              <Image
                src="/Image/tech/03.png"
                alt={''}
                width={100}
                height={120}
              />
              <Text pt={5} pb={3}>
                Smart watches
              </Text>
              <Center
                p={1}
                bg="default.pink"
                borderRadius={'16px'}
                color="default.red"
              >
                <Text>-25%</Text>
              </Center>
            </Flex>
          </Box>
          <Box
            as={Center}
            borderLeft={'1px'}
            borderLeftColor="default.gray.200"
            w={'20%'}
          >
            <Flex
              flexDirection={'column'}
              alignItems="center"
              textAlign={'center'}
              py={5}
            >
              <Image
                src="/Image/tech/03.png"
                alt={''}
                width={100}
                height={120}
              />
              <Text pt={5} pb={3}>
                Smart watches
              </Text>
              <Center
                p={1}
                bg="default.pink"
                borderRadius={'16px'}
                color="default.red"
              >
                <Text>-25%</Text>
              </Center>
            </Flex>
          </Box>
          <Box
            as={Center}
            borderLeft={'1px'}
            borderLeftColor="default.gray.200"
            w={'20%'}
          >
            <Flex
              flexDirection={'column'}
              alignItems="center"
              textAlign={'center'}
              py={5}
            >
              <Image
                src="/Image/tech/03.png"
                alt={''}
                width={100}
                height={120}
              />
              <Text pt={5} pb={3}>
                Smart watches
              </Text>
              <Center
                p={1}
                bg="default.pink"
                borderRadius={'16px'}
                color="default.red"
              >
                <Text>-25%</Text>
              </Center>
            </Flex>
          </Box>
          <Box
            as={Center}
            borderLeft={'1px'}
            borderLeftColor="default.gray.200"
            w={'20%'}
          >
            <Flex
              flexDirection={'column'}
              alignItems="center"
              textAlign={'center'}
              py={5}
            >
              <Image
                src="/Image/tech/03.png"
                alt={''}
                width={100}
                height={120}
              />
              <Text pt={5} pb={3}>
                Smart watches
              </Text>
              <Center
                p={1}
                bg="default.pink"
                borderRadius={'16px'}
                color="default.red"
              >
                <Text>-25%</Text>
              </Center>
            </Flex>
          </Box>
          <Box
            as={Center}
            borderLeft={'1px'}
            borderLeftColor="default.gray.200"
            w={'20%'}
          >
            <Flex
              flexDirection={'column'}
              alignItems="center"
              textAlign={'center'}
              py={5}
            >
              <Image
                src="/Image/tech/03.png"
                alt={''}
                width={100}
                height={120}
              />
              <Text pt={5} pb={3}>
                Smart watches
              </Text>
              <Center
                p={1}
                bg="default.pink"
                borderRadius={'16px'}
                color="default.red"
              >
                <Text>-25%</Text>
              </Center>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SectionSale;
