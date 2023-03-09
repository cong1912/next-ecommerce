import React from 'react';
import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  Select,
  Text,
  UnorderedList
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer">
      <Box>
        <Container maxW="85%" paddingTop="42px" paddingBottom="60px">
          <Flex justifyContent="space-between">
            <Box maxW="276px">
              <Image src="/Brand/logo-colored.png" alt={''} />
              <Text margin="17px 0px">
                Best information about the company gies here but now lorem ipsum
                is
              </Text>
              <UnorderedList listStyleType="none" marginLeft="0px">
                <Flex>
                  <ListItem marginRight="12px">
                    <Image src="/Icon-contact/social/facebook3.png" alt={''} />
                  </ListItem>
                  <ListItem marginRight="12px">
                    <Image src="/Icon-contact/social/twitter3.png" alt={''} />
                  </ListItem>
                  <ListItem marginRight="12px">
                    <Image src="/Icon-contact/social/linkedin3.png" alt={''} />
                  </ListItem>
                  <ListItem marginRight="12px">
                    <Image src="/Icon-contact/social/instagram3.png" alt={''} />
                  </ListItem>
                  <ListItem marginRight="12px">
                    <Image src="/Icon-contact/social/youtube3.png" alt={''} />
                  </ListItem>
                </Flex>
              </UnorderedList>
            </Box>
            <UnorderedList listStyleType="none" color="default.gray.500">
              <ListItem
                color="default.dark"
                fontWeight="500"
                marginBottom="10px"
              >
                About
              </ListItem>
              <ListItem>About Us</ListItem>
              <ListItem>Find store</ListItem>
              <ListItem>Categories</ListItem>
              <ListItem>Blogs</ListItem>
            </UnorderedList>
            <UnorderedList listStyleType="none" color="default.gray.500">
              <ListItem
                color="default.dark"
                fontWeight="500"
                marginBottom="10px"
              >
                Partnership
              </ListItem>
              <ListItem>About Us</ListItem>
              <ListItem>Find store</ListItem>
              <ListItem>Categories</ListItem>
              <ListItem>Blogs</ListItem>
            </UnorderedList>
            <UnorderedList listStyleType="none" color="default.gray.500">
              <ListItem
                color="default.dark"
                fontWeight="500"
                marginBottom="10px"
              >
                Information
              </ListItem>
              <ListItem>Help Center</ListItem>
              <ListItem>Money Refund</ListItem>
              <ListItem>Shipping</ListItem>
              <ListItem>Contact us</ListItem>
            </UnorderedList>
            <UnorderedList listStyleType="none" color="default.gray.500">
              <ListItem
                color="default.dark"
                fontWeight="500"
                marginBottom="10px"
              >
                For users
              </ListItem>
              <ListItem>Login</ListItem>
              <ListItem>Register</ListItem>
              <ListItem>Settings</ListItem>
              <ListItem>My Orders</ListItem>
            </UnorderedList>
            <Box>
              <Text color="default.dark" fontWeight="500" marginBottom="10px">
                Get app
              </Text>
              <Image src="/Icon/app_store.png" alt={''} marginBottom="8px"/>
              <Image src="/Icon/google_play.png" alt={''} />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box backgroundColor="default.gray.400">
        <Container maxW="85%" as={Flex} justifyContent="space-between">
          <Text>© 2023 Ecommerce. </Text>
          <Flex alignItems="center">
            <Image src="/Icon/flag_english.png" alt={''} w="24px" h="17px" />
            <Select
              marginLeft="6px"
              defaultValue={'option1'}
              variant="unstyled"
            >
              <option value="option1">English</option>
              <option value="option2">Vietnamese</option>
            </Select>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
