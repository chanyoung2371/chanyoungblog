import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10%',
        borderBottom: 'solid 1px black',
        backgroundColor: 'green',
       
    },
}));


function Square() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            네모
        </div>
    )
}

export default Square
