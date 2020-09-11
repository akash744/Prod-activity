import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListTitle from "./ListTitle";
import Tiles from "./Tiles";
import UserInput from "./UserInput";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '300px',
      backgroundColor: '#EBECF0',
      marginLeft: theme.spacing(20),
    },
}));    

export default function Lists() {

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <ListTitle />
                <Tiles />
                <Tiles />
                <Tiles />
                <UserInput />
                <div></div>
            </Paper>
        </div>
    );
}