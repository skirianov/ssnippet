import React, { useEffect } from 'react';
import domtoimage from 'dom-to-image';
import { Button } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { IoCloudDownload } from 'react-icons/io5';

const Download = ({ color }) => {

  const toImage = () => {
    setTimeout(() => {
      let img = document.getElementById('ssnippet')
    domtoimage
      .toBlob(img, {
        style: {
          'margin': 'auto'
        }})
      .then(function (blob) {
        saveAs(blob, 'ssnippet');
      });
    }, 100)
  };

  return (
    <Button
      onClick={toImage}
      bg={color}
      color="white"
      variant="solid"
      w={44}
      m={2}
      leftIcon={<IoCloudDownload size="1.7em" />}
      >
        Download
    </Button>
  )
};

export default Download;
