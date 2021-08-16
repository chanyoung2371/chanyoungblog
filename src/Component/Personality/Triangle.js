import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../../images/positive.png'

const useStyles = makeStyles((theme) => ({
    root: { 
        width: '100%',     
    },
    img: {
        width: '100%',
},
}));


function Triangle() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.img}src={imgA}></img>
        </div>
    )
}
export default Triangle