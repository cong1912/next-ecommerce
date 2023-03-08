import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  WrapItem
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../Button';

const SectionMain = () => {
  return (
    <Box as="section" shadow="md" backgroundColor={'default.light'}>
      <Flex p={5} gap={3}>
        <Box as={Flex} flexDirection={'column'} w={'21%'}>
          <Text
            fontSize={'medium'}
            w={'100%'}
            p={2}
            backgroundColor={'default.blue.100'}
          >
            Automobiles
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            Clothes and wear
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            Home interiors
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            Computer and tech
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            Tools, equipments
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            Sports and outdoor
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            Animal and pets
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            Machinery tools
          </Text>
          <Text fontSize={'medium'} w={'100%'} p={2}>
            More category
          </Text>
        </Box>
        <Box w={'61%'} position="relative">
          <Image
            src="/banner/Banner-board-800x420.png"
            alt={''}
            layout="fill"
            // width={664}
            // height={373}
          />
        </Box>
        <Box w={'18%'}>
          <Card backgroundColor={'default.blue.100'} w={'100%'}>
            <CardBody p={3}>
              <Box as={Flex} alignItems="center" gap={3} pb={3}>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
                <Box>
                  <Text fontSize="medium">Hi, user</Text>
                  <Text fontSize="medium">let’s get stated</Text>
                </Box>
              </Box>
              <Button variant="primary" w={'100%'} label="Join now"></Button>
              <Button
                variant="outline"
                w={'100%'}
                label="Join now"
                mt={2}
              ></Button>
            </CardBody>
          </Card>
          <Card backgroundColor={'default.orange'} w={'100%'} my={3}>
            <CardBody p={3}>
              <Text fontSize="medium" color={'default.light'}>
                Get US $10 off with a new supplier
              </Text>
            </CardBody>
          </Card>
          <Card backgroundColor={'default.Rectangle303'} w={'100%'}>
            <CardBody p={3}>
              <Text fontSize="medium" color={'default.light'}>
                Send quotes with supplier preferences
              </Text>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Box>
  );
};

export default SectionMain;
