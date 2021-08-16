import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            width: '0',
            height: '0',
            borderLeft: '150px solid transparent',
            borderRight: '150px solid transparent',
            borderBottom: '300px solid green',
          
    },
}));


function Triangle() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default Triangle
