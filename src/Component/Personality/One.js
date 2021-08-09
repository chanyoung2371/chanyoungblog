import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            width: '300px',
            height: '300px',
            background: 'red',
            borderRadius: '50%',
        
    },
}));

function One() {
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
            
        </div>
    )
}

export default One
