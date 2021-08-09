import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            width: '100%',
            height: '300px',
            background: 'red',
           
            
        
    },
}));

function OneData() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            안녕
        </div>
    )
}

export default OneData
