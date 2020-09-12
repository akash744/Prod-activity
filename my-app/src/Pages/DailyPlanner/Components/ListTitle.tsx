import React, { useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '300px',
      backgroundColor: '#EBECF0',
      marginLeft: theme.spacing(20),    
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight: 'bold',
      },
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',
      },  

    input: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        margin: theme.spacing(1),
        '&:focus': {
          background: '#ddd',
        },
      },  
}));    

export default function ListTitle(props: { title: any }) {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    return (
        <div>
            {open? (
                <div>
                <InputBase 
                    autoFocus
                    value = {props.title}
                    inputProps={{
                        className: classes.input,
                    }}
                    fullWidth
                    onBlur = {() => setOpen(!open)}
                />
                </div>
            ):(
                <div className={classes.editableTitleContainer}>
                    <Typography
                        onClick={() => setOpen(!open)}
                        className={classes.editableTitle}
                    >
                        {props.title}
                    </Typography>
                    <MoreHorizIcon />
            </div>
            )} 
        </div>
    );
}