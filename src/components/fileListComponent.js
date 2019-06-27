
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';


const DeleteButton = (props) => {

  const handleDelete = () => {
    console.log("handledleete")
    console.log(props.item)
    props.deleteFile(props.item)
  }

  return(
    <a href="#" onClick={handleDelete}>
      <DeleteIcon color="action"/>
    </a>
  )
}

const FileListComponent = (props) => {

  return (
    <ul>
      <List component="nav" aria-label="Main">
      {props.data && props.data.map(item => (
        <li key={item._id}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.fileName} />
          </ListItem>
          <DeleteButton item={item} deleteFile={props.deleteFile}/>
        </li>
      ))}
    <Divider />
    </List>
  </ul>
  );
}

export default FileListComponent;