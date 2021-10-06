import React from 'react';
import { Heading, Box, Text } from "@chakra-ui/react"

const Header = () => {
  return(
      <Box m={10}>
        <Heading as="h1" size="3xl" textAlign="center" color="white">ssnippet🐍</Heading>
        <Text color="white" textAlign="center" mt={10} fontSize="3xl">code it. ssnipp it. sshare!</Text>
      </Box>
  )
}

export default Header;
