import {
  Box,
  Icon,
  Flex,
  Input,
  Select,
  Spacer,
  Square,
  Text,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../Button';
import { PhoneIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <>
      <Flex
        as="header"
        // position="fixed"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        backdropFilter="saturate(180%) blur(5px)"
        alignItems="center"
        w="100%"
        pt={6}
        pb={6}
        pl={20}
        pr={20}
      >
        <Image src="/Brand/logo-colored.png" alt={''} width={150} height={48} />
        <Spacer />
        <Flex as="form">
          <Input
            borderRightRadius="0"
            placeholder="Basic usage"
            size="md"
            borderColor="default.primary"
            htmlSize={40}
            variant="outline"
          />
          <Box w="40%">
            <Select
              placeholder="All category"
              borderRadius={0}
              borderColor="default.primary"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Button
            label="Search"
            variant="primary"
            size="md"
            borderLeftRadius="0"
            px={8}
          />
        </Flex>
        <Spacer />
        <Flex gap={6}>
          <Box
            as={Flex}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={PhoneIcon} boxSize={4} color="default.gray.500" />
            <Text color="default.gray.500">Profile</Text>
          </Box>
          <Spacer />
          <Box
            as={Flex}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={PhoneIcon} boxSize={4} color="default.gray.500" />
            <Text color="default.gray.500">Message</Text>
          </Box>
          <Spacer />
          <Box
            as={Flex}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={PhoneIcon} boxSize={4} color="default.gray.500" />
            <Text color="default.gray.500">Orders</Text>
          </Box>
          <Spacer />
          <Box
            as={Flex}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={PhoneIcon} boxSize={4} color="default.gray.500" />
            <Text color="default.gray.500">My cart</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        as="header"
        // position="fixed"
        border="1px"
        borderLeft="0px"
        borderRight="0px"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        backdropFilter="saturate(180%) blur(5px)"
        alignItems="center"
        w="100%"
        pt={6}
        pb={6}
        pl={20}
        pr={20}
        borderColor="default.gray.200"
        justifyContent="space-between"
      >
        <h1>hello</h1>
        <h1>hello</h1>
      </Flex>
    </>
  );
};

export default Navbar;
