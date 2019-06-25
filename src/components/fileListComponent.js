import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileListComponent = () => {
  const [files, setFiles] = useState({ files: [] });

  useEffect(async () => {
    const result = await axios(
      'http://hn.algolia.com/api/v1/search?query=redux',
    );

    setFiles(result.data);
  });

  return (
    <ul>
      {files.map(file => (
        <li key={file.objectID}>
          <a href={file.fileName}>{file.fileTitle}</a>
        </li>
      ))}
    </ul>
  );
}

export default FileListComponent