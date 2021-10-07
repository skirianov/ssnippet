import React from 'react';
import { Heading, Box, Text } from "@chakra-ui/react"

const Header = () => {
  return(
      <Box m={[2, 4, 8]}>
        <Text fontSize={["xl", "2xl" , "4xl"]} textAlign="center" color="white">ssnippet🐍</Text>
        <Text color="white" textAlign="center" mt={[4, 6, 8]} fontSize={["xl", "2xl" , "4xl"]}>code it. ssnipp it. sshare!</Text>
      </Box>
  )
}

export default Header;
