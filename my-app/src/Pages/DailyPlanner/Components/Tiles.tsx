import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    card: {
      margin: theme.spacing(1),
      padding: theme.spacing(1,1,1,2),
    },
}));    


export default function Tiles() {

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.card}>
                Finish HomeWork
            </Paper>   
        </div>
    );
}