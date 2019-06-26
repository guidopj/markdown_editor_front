/*import React, { useState, useEffect } from 'react';

import axios from 'axios';

const FileListComponent = () => {
  const [files, setFiles] = useState([]);

  useEffect(async () => (
      const result = await axios.get('http://localhost:3002/files')
      console.log(result)
      console.log("fds");
      setFiles(result);
  }, []);

  return (
    <div>
    <ul>
      {files.map(file => {
        <li key={file.objectID}>
          <a href={file.fileName}>{file.fileTitle}</a>
        </li>
      })}
    </ul>
    </div>
  );
}

export default FileListComponent;

*/

const baseURL = 'http://localhost:3003'

//import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FileListComponent() {
  const [data, setData] = useState( [] );

  useEffect(async () => {
    const result = await axios(
      `${baseURL}/files`,
    );
    console.log("result")
    console.log(result.data.result)
    setData(result.data.result);
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.objectID}>
          <a href={item.objectID}>{item.fileName}</a>
        </li>
      ))}
    </ul>
  );
}

export default FileListComponent;