import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            width: '100%',
            height: '300px',
            background: 'blue',
            display:'none',
            
        
    },
}));


function SquareData() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            gd
        </div>
    )
}

export default SquareData
