import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import * as markdownFilesActions from './actions/markdownFilesActions'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
      },
    
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));

const NewFile = (props) => {
    const [fileName, setFileName] = useState("");
    const addFile = () => {
        const file = {
            fileName,
            fileTitle: "",
            fileDescription: ""
        }
        
        props.createFile(file);
    }
    const classes = useStyles();
    return (
        <Grid container xs={6}>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            value={fileName}
            onChange={setFileName}
          />
          <Button onClick={addFile} variant="contained" color="primary" className={classes.button}>
            Add File
          </Button>
        </Grid>
    );
}

export default NewFile;