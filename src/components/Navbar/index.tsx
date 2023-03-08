import {
  Box,
  Icon,
  Flex,
  Input,
  Select,
  Spacer,
  Square,
  Text,
  VStack,
  Link,
  Container
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../Button';
import { PhoneIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <>
      <Box as="header" backgroundColor="rgba(255, 255, 255, 0.8)">
        <Container as={Flex} alignItems="center" maxW="85%" py={6} px={0}>
          <Image
            src="/Brand/logo-colored.png"
            alt={''}
            width={150}
            height={48}
          />
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
        </Container>
        <Box
          backgroundColor="rgba(255, 255, 255, 0.8)"
          borderColor="default.gray.200"
          border="1px"
          borderLeft="0px"
          borderRight="0px"
        >
          <Container
            as={Flex}
            alignItems="center"
            maxW="85%"
            py={4}
            px={0}
            justifyContent="space-between"
          >
            <Box as={Flex} gap={6} justifyContent={'center'}>
              <Link
                // p={2}
                href={'#'}
                fontSize={'sm'}
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none'
                  // color: linkHoverColor
                }}
              >
                All category
              </Link>
              <Link
                // p={2}
                href={'#'}
                fontSize={'sm'}
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none'
                  // color: linkHoverColor
                }}
              >
                Hot offers
              </Link>
              <Link
                // p={2}
                href={'#'}
                fontSize={'sm'}
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none'
                  // color: linkHoverColor
                }}
              >
                Gift boxes
              </Link>
              <Link
                // p={2}
                href={'#'}
                fontSize={'sm'}
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none'
                  // color: linkHoverColor
                }}
              >
                Projects
              </Link>
              <Link
                // p={2}
                href={'#'}
                fontSize={'sm'}
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none'
                  // color: linkHoverColor
                }}
              >
                Menu item
              </Link>
              <Select placeholder="Help" variant={'unstyled'} flex="1">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box as={Flex} gap={6} justifyContent={'center'}>
              <Select placeholder="English, USD" variant={'unstyled'} flex="2">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Select
                placeholder="Ship to"
                variant={'unstyled'}
                iconColor={'red'}
                flex="2"
              >
                <option value="option1">Option 1 </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
