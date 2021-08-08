import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10%',
        borderBottom: 'solid 1px black',
        backgroundColor: 'red',
        
    },
}));

function One() {
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
            동그라미
        </div>
    )
}

export default One
