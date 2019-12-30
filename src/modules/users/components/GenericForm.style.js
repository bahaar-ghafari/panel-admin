import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  mainContainer: {
    padding: theme.spacing(3, 1)
  },
  button: {
    height: "100%",
    color: "#fff",
    marginTop: 50,
    background: "#3f51b5",
    "&:hover": {
      backgroundColor: "#3f51b5"
    }
  },
  field: {
    float: "left",
    width: "100%"
  }
}));
