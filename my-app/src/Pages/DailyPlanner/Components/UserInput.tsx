import { Collapse, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import UserInputBox from "./UserInputBox";

const useStyles = makeStyles((theme) => ({
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        background: '#EBECF0',
        '&:hover': {
          backgroundColor: fade('#000', 0.25),
        },
    },
    root: {
        width: '300px',
        marginTop: theme.spacing(1),
      },
}));    

export default function UserInput() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    return (
        <div className={classes.root}>
            <Collapse in ={open}>
                <UserInputBox setOpen={setOpen} />
            </Collapse>
            <Collapse in={!open}>
                <Paper className= {classes.addCard} elevation={0} onClick={() => setOpen(!open)}>
                    <Typography>
                        + Add A Tile
                    </Typography>
                </Paper>    
            </Collapse>
            
        </div>
    );
}