
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const FileListComponent = (props) => {

  const handleDelete = (item) => {
    props.setFileShown(null)
    props.deleteFile(item)
  }

  return (
    <ul>
      <List aria-label="Main">
      {props.data && props.data.map(item => (
        <li key={item._id}>
          <ListItem button onClick={() => props.setFileShown(item)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.fileName} />
            <a href="#" onClick={() => handleDelete(item)}>
              <DeleteIcon color="action"/>
            </a>
          </ListItem>
        </li>
      ))}
    {/*<Divider />*/}
    </List>
  </ul>
  );
}

export default FileListComponent;