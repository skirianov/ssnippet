import React from 'react';
import domtoimage from 'dom-to-image';
import { Button } from '@chakra-ui/react';
import { saveAs } from 'file-saver';

const Share = () => {
  const snip = document.getElementById('ssnippet');

  const toImage = () => {
    domtoimage.toBlob(document.getElementById('ssnippet'))
    .then(function (blob) {
        saveAs(blob, 'ssnippet');
    });
  }

  return (
    <Button
      onClick = {toImage}
    >
      Share
    </Button>
  )
}

export default Share;
