import React from 'react';
import domtoimage from 'dom-to-image';
import { Button } from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import { IoCloudDownload } from 'react-icons/io5';

const Download = () => {
  const toImage = () => {
    setTimeout(() => {
      const scale = 2;
      const img = document.getElementById('ssnippet');
      domtoimage
        .toBlob(img, {
          width: img.clientWidth * scale,
          height: img.clientHeight * scale,
          style: {
            margin: 'auto',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          },
        })
        .then((blob) => {
          saveAs(blob, 'ssnippet');
        });
    }, 100);
  };

  return (
    <Button
      onClick={toImage}
      bg="#84CC16"
      color="white"
      variant="solid"
      w={44}
      m={2}
      leftIcon={<IoCloudDownload size="1.7em" />}
    >
      Download
    </Button>
  );
};

export default Download;
