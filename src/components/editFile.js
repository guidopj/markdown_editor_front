import Button from '@material-ui/core/Button';
import React, { useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    textArea:{
        width: "inherit",
      },
      container:{
        width: "inherit",
      },
      containerItem1:{
        display: "flex",
        borderRight: "3px solid black",
        width: "inherit",
      },
      containerItem2:{
        display: "inline-grid",
        borderRight: "3px solid black",
        width: "inherit",
      },
      myInput:{
          alignItems: "end"
      }
}));

const EditFile = (props) => {

    const [textAreaValue, setTextAreaValue] = useState("");
    const [inputLabelValue, setInputLabelValue] = useState("");
    

    useEffect(() => {
        async function fillTextArea(){
          setTextAreaValue(props.fileShown.fileDescription)
          setInputLabelValue(props.fileShown.fileDescriptionTagged)
        }
        fillTextArea();
      }, [props.fileShown]);

    const editFile = () => {
        const file = {
            _id: props.fileShown._id,
            fileName: props.fileShown.fileName,
            fileTitle: props.fileShown.fileTitle,
            fileDescription: textAreaValue,
            fileDescriptionTagged: inputLabelValue
        }
        props.editFile(file);
    }

    const setLabel = (line) => {
        const boldedText = line.match(/\#(.*)/)
        let holeText = ""
        if(boldedText){
            const previousText = line.match(/([^\#]*)/)
            holeText = holeText + previousText[0] + boldedText[1].bold()
        }else{
            holeText = line
        }
        return holeText
    }

    

    const handleTextAreaChange = (e) => {
        const lines = e.target.value.split('\n');
        const formated = lines.map(line => setLabel(line) + "\n")
        setTextAreaValue(e.target.value)
        setInputLabelValue(formated)
    }
    
    const classes = useStyles();
    return (
        <Grid container direction="row" className={classes.container}>
            <Grid container direction="row" xs={6}>
                <Grid id="textAreaItemContainer" item className={classes.containerItem1}>
                    <textarea value={textAreaValue}
                        onChange={e => handleTextAreaChange(e)}
                        className={classes.textArea}
                    />
                </Grid>
                
            </Grid>
            <Grid container direction="row" xs={5}>
                <Grid id="labelItemContainer" item className={classes.containerItem2}>
                    <Input id="myInput" className={classes.myInput} multiline={true} readOnly={true} value={inputLabelValue}>{inputLabelValue}</Input>
                </Grid>
            </Grid>
            <Grid container direction="row" xs={1}>
                <Button onClick={editFile} variant="contained" color="primary">
                    Edit File
                </Button>
            </Grid>
        </Grid>
        
    );
}

export default EditFile;