import React from "react";
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from "react";



const useStyles = makeStyles((theme) => ({
    card: {
      width: '284px',
      margin: theme.spacing(0, 1, 1, 1),
      paddingBottom: theme.spacing(4),
    },
    input: {
      margin: theme.spacing(1),
    },
    btnConfirm: {
      background: '#5AAC44',
      color: '#fff',
      '&:hover': {
        background: fade('#5AAC44', 0.75),
      },
    },
    confirm: {
      margin: theme.spacing(0, 1, 1, 1),
    },
  }));

type funcProps = {
    setOpen ?: any
}



export default function UserInputBox({ setOpen }: funcProps) {

    const classes = useStyles();
    const [cardTitle, setCardTitle] = useState('');

    const handleOnChange = (e: any) => {
      setCardTitle(e.target.value);
    };

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase 
                        onChange={handleOnChange}
                        multiline 
                        fullWidth
                        onBlur = {() => setOpen(false)}
                        inputProps={{
                            className: classes.input,
                        }}
                        value={cardTitle}
                        placeholder="Enter contents for the Tile"
                    />
                </Paper>
            </div>
            <div>
                <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>
                    Add Card
                </Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    );
}

