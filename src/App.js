import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Textarea from 'react-textarea-autosize';
import FileListComponent from './components/fileListComponent';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import './App.css';
import * as markdownFilesActions from './actions/markdownFilesActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



const App = (props) => {

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },

    textArea: {
      multiline: true,
      rowsMax: 4,
      colsMax:"100%",
      border:"1px solid black"
    },

    label: {
      border:"1px solid black"
    }
  }));

  const [data, setData] = useState( [] );

  useEffect(async () => {
    /*const result = await axios(
      `${baseURL}/files`,
    );*/
    await props.markdownFilesActions.fetchMarkdownFiles()
    setData(props.markdownFiles);
  }, []);
  
  const [textAreaValue, setTextAreaValue] = useState("");
  const [fileShown, setFileShown] = useState({});

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h2> MarkDown Editor</h2>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={3}>
          <FileListComponent data={data}/>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor="grey.300" p={1} my={0.5}>
            <Textarea value={fileShown.fileDescription} className={classes.textArea}
              onChange={e => setTextAreaValue(e.target.value)}/>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.label}>
          <InputLabel>{fileShown.fileDescription}</InputLabel>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps (state) {
  console.log(state)
  return {
    markdownFiles: state.markdownFiles.markdownFiles,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    markdownFilesActions: bindActionCreators(markdownFilesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
