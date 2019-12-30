import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
    height: "90vh",
    backgroundColor: "#3f51b5",
    color: "white"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  beWhite: {
    color: "white"
  }
}));

export default useStyles;
