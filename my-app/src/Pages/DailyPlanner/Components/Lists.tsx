import React from "react";
import { Paper, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListTitle from "./ListTitle";

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
            </Paper>
        </div>
    );
}