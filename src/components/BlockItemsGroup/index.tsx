import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../Button';

const BlockItemsGroup = () => {
  return (
    <Box
      as="section"
      shadow="md"
      backgroundColor={'default.light'}
      mt={5}
      borderRightRadius={1}
    >
      <Flex gap={3}>
        <Box
          w={'21%'}
          borderRightRadius="1"
          p={5}
          backgroundImage={'/banner/image92.png'}
        >
          <Text as="h2" fontSize="heading2" fontWeight={600}>
            Home and outdoor
          </Text>
          <Button variant={'outlineColorDark'} label="Source now" />
        </Box>
        <Box as={Flex} w="80%">
          <Box as={Flex}>
            <Box
              border={1}
              borderColor={'default.gray.200'}
              as={Flex}
              w={'25%'}
            >
              <Box>
                <Text color={'default.dark'} fontWeight={400}>
                  Soft chairs
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  From
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  USD 19
                </Text>
              </Box>
              <Box position={'relative'} w={'50%'}>
                <Image alt="text" fill src={'/Image/furniture/01.png'} />
              </Box>
            </Box>
            <Box
              border={1}
              borderColor={'default.gray.200'}
              as={Flex}
              w={'25%'}
            >
              <Box>
                <Text color={'default.dark'} fontWeight={400}>
                  Soft chairs
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  From
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  USD 19
                </Text>
              </Box>
              <Box position={'relative'} w={'50%'}>
                <Image alt="text" fill src={'/Image/furniture/01.png'} />
              </Box>
            </Box>
            <Box
              border={1}
              borderColor={'default.gray.200'}
              as={Flex}
              w={'25%'}
            >
              <Box>
                <Text color={'default.dark'} fontWeight={400}>
                  Soft chairs
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  From
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  USD 19
                </Text>
              </Box>
              <Box position={'relative'}>
                <Image alt="text" fill src={'/Image/furniture/01.png'} />
              </Box>
            </Box>
            <Box
              border={1}
              borderColor={'default.gray.200'}
              as={Flex}
              w={'25%'}
            >
              <Box>
                <Text color={'default.dark'} fontWeight={400}>
                  Soft chairs
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  From
                </Text>
                <Text fontSize={'small'} color="default.gray.500">
                  USD 19
                </Text>
              </Box>
              <Box position={'relative'} w={'50%'}>
                <Image alt="text" fill src={'/Image/furniture/01.png'} />
              </Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlockItemsGroup;
