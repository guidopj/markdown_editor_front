import Button from '@material-ui/core/Button';
import React, { useState, useEffect  } from 'react';
import Textarea from 'react-expanding-textarea'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textArea:{
        height:300,
        width:"90%"
      },
}))

const EditFile = (props) => {

    const [textAreaValue, setTextAreaValue] = useState("");

    useEffect(() => {
        async function fillTextArea(){
          setTextAreaValue(props.fileShown.fileDescription)
        }
        fillTextArea();
      }, [props.fileShown]);

    const editFile = () => {
        const file = {
            _id: props.fileShown._id,
            fileName: props.fileShown.fileName,
            fileTitle: props.fileShown.fileTitle,
            fileDescription: textAreaValue
        }
        props.editFile(file);
    }
    
    const classes = useStyles();    
    return (
        <Grid container>
            <Grid item xs={4}>
                <Textarea value={textAreaValue} className={classes.textArea}
                onChange={e => setTextAreaValue(e.target.value)}/>
            </Grid>
            <Grid item xs={3} className={classes.label}>
                <label>{textAreaValue}</label>
            </Grid>
            <Button onClick={editFile} variant="contained" color="primary">
                 Edit File
            </Button>
        </Grid>
    );
}

export default EditFile;