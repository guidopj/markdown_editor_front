import React, { useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FileListComponent from './components/fileListComponent';
import './App.css';
import * as markdownFilesActions from './actions/markdownFilesActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  NewFile  from './components/newFile'
import  EditFile  from './components/editFile'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    background: "#f0e68c"
  },
  container:{
    flexWrap:"inherit"
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
    backgroundColor:"grey",
    color:"white",
    textAlign:"center",
    width:"100%"
  },

  fileList: {
    backgroundColor:"cornsilk",
    width:"100%"
  },
  fileListGrid:{
    borderRight: "3px solid black"
  }

  
}));

const App = (props) => {

  useEffect(() => {
    async function fetchData(){
      await props.markdownFilesActions.fetchMarkdownFiles()
    }
    fetchData();
  }, []);
  
  const [fileShown, setFileShown] = useState({});

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.container}>
        <Grid container xs={3} direction="column" justify="flex-start" alignItems="flex-start" className={classes.fileListGrid}>
          <Grid item className={classes.title}>
            <h4> MarkDown Editor</h4>
          </Grid>
          
          <Grid item className={classes.fileList}>
              <FileListComponent deleteFile={props.markdownFilesActions.deleteMarkdownFile}
                                 data={props.markdownFilesList}
                                 setFileShown={setFileShown}/>
          </Grid>  
          <Grid item>
            <NewFile createFile={props.markdownFilesActions.createMarkdownFile}/>
          </Grid>
        </Grid>
        
          {!_.isEmpty(fileShown) ? <EditFile  editFile={props.markdownFilesActions.editMarkdownFile} 
                                                fileShown={fileShown} /> : <Grid xs={10}></Grid>}
        </Grid>
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
