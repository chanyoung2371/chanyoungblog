import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {    
            width: '100%',
            height: '300px',
            background: 'blue',
      
    },
}));


function Square() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default Square
