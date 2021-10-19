import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import Snake from '../../assets/snake.png';

const Header = () => (
  <>
    <Box m={1} display="flex" justifyContent="center" alignItems="center">
      <Text fontSize={['3xl', '4xl', '6xl']} textAlign="center" color="white">
        ssnippet
      </Text>
      <Image src={Snake} w={[6, 8, 12]} ml={2} />
    </Box>
    <Box>

      <Text
        color="white"
        textAlign="center"
        mt={[1, 2, 2]}
        mb={[4]}
        fontSize={['md', 'lg', 'xl']}
      >
        code it. ssnipp it. sshare it!
      </Text>
    </Box>
  </>
);

export default Header;
