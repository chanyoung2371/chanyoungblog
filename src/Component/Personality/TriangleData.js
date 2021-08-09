import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            width: '100%',
            height: '300px',
            background: 'green',
            display: 'none',
    },
}));


function TriangleData() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            gd
        </div>
    )
}

export default TriangleData
