import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Heading from './components/heading/Heading';
import Main from './components/main/Main';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => setLoading(false), []);

  if (loading) {
    return (
          <Box
            mx="48%"
            my="20%"
          >
            <Loader
            type="Puff"
            color="navy"
            height={100}
            width={100}
            visible={loading}
          />
          </Box>
    )
  }

  return (
    <Box>
      <Heading />
      <Main />
    </Box>
  );
}

export default App;
