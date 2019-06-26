
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react';


const FileListComponent = (props) => {

  const handleToggle = (id) => {
    props.setFileShown(props.data.filter(file => file.objectID === id))
  }

  return (
    <ul>
      <List component="nav" aria-label="Main mailbox folders">
      {props.data && props.data.map(item => (
        <li key={item.objectID}>
          <ListItem button onClick={handleToggle(item.objectID)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.fileName} />
          </ListItem>
        </li>
      ))}
    <Divider />
    </List>
  </ul>
  );
}

export default FileListComponent;