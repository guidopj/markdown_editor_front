import React, { useState, useEffect } from 'react';

import axios from 'axios';

const FileListComponent = () => {
  let [files, setFiles] = useState([]);

  useEffect(async () => {
      const result = await axios.get('http://localhost:3002/files')
      console.log(result)
      console.log("fds");
      setFiles(result);
  }, []);

  return (
    <ul>
      {files.map(file => {
        <li key={file.objectID}>
          <a href={file.fileName}>{file.fileTitle}</a>
        </li>
      })}
    </ul>
  );
}

export default FileListComponent;