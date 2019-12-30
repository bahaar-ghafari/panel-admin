import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import useStyles from './style/Sidebar.style'
export default function Sidebar() {
  const classes = useStyles();
  return (
    
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
       <Link to="/users">
        <ListItem button >
          <ListItemIcon>
            <SendIcon className={classes.beWhite}/>
          </ListItemIcon>
          <ListItemText primary="Users" className={classes.beWhite}/>
        </ListItem>
      </Link>
      <Link to="/table">
        <ListItem button >
          <ListItemIcon>
            <SendIcon className={classes.beWhite}/>
          </ListItemIcon>
          <ListItemText primary="Table" className={classes.beWhite}/>
        </ListItem>
      </Link>
      <Link to="/PostForm">
        <ListItem button >
          <ListItemIcon>
            <SendIcon className={classes.beWhite}/>
          </ListItemIcon>
          <ListItemText primary="compose" className={classes.beWhite}/>
        </ListItem>
      </Link>
      <Link to="/inbox">
        <ListItem button>
          <ListItemIcon className={classes.beWhite}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="inbox" className={classes.beWhite}/>
        </ListItem>
      </Link>
      <Link to="/counter">
        <ListItem button>
          <ListItemIcon className={classes.beWhite}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="counter" className={classes.beWhite}/>
        </ListItem>
      </Link>
      <Link to="/AllPost">
        <ListItem button>
          <ListItemIcon className={classes.beWhite}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="sent" className={classes.beWhite}/>
        </ListItem>
      </Link>
    </List>
  );
}
