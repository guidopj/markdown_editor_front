import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize:12
      },
    
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));

const NewFile = (props) => {

    const [name, setName] = useState("");

    const addFile = () => {
        const file = {
            fileName:name,
            fileTitle: "",
            fileDescription: ""
        }
        setName("")
        
        props.createFile(file);
    }
    
    const classes = useStyles();
    return (
        <div>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={addFile} variant="contained" color="primary" className={classes.button}>
            Add File
          </Button>
        </div>
    );
}

export default NewFile;