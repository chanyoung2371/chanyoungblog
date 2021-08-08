import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: 'solid 1px black',
        padding: '10%',
        backgroundColor: 'blue',
    },
}));


function Triangle() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            세모
        </div>
    )
}

export default Triangle
