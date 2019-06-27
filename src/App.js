import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FileListComponent from './components/fileListComponent';
import './App.css';
import * as markdownFilesActions from './actions/markdownFilesActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  NewFile  from './components/newFile'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    background: "#f0e68c"
  },

  button: {
    margin: theme.spacing(1),
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

  label: {
    border:"1px solid black"
  },

  title:{
    textAlign:"center",
    height:100
  },

  fileList: {
    height: 300
  }
}));

const App = (props) => {

  useEffect(() => {
    async function fetchData(){
      await props.markdownFilesActions.fetchMarkdownFiles()
    }
    fetchData();
  }, []);
  
  const [textAreaValue, setTextAreaValue] = useState("");
  const [fileShown, setFileShown] = useState({});

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="flex-end" alignItems="flex-start">
        <Grid item className={classes.title}>
          <h2> MarkDown Editor</h2>
        </Grid>
        <Grid item xs={3}>
          <FileListComponent deleteFile={props.markdownFilesActions.deleteMarkdownFile} data={props.markdownFilesList} className={classes.fileList}/>
        </Grid>
        <NewFile createFile={props.markdownFilesActions.createMarkdownFile}/>
      </Grid>
      
      {/*<Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item xs={4}>
            <Textarea value={fileShown.fileDescription} className={classes.textArea}
              onChange={e => setTextAreaValue(e.target.value)}/>
        </Grid>
        <Grid item xs={4} className={classes.label}>
          <InputLabel>{fileShown.fileDescription}</InputLabel>
        </Grid>
        
  </Grid>  */}
    </div>
  );
}

const mapStateToProps = state => ({
    markdownFilesList: state.markdownFiles.markdownFiles,
});

function mapDispatchToProps (dispatch) {
  return {
    markdownFilesActions: bindActionCreators(markdownFilesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
