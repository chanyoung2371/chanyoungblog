import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../../images/family.png'


const useStyles = makeStyles((theme) => ({
    root: {
       width:'100%',
    },

}));

function Img() {
    const classes = useStyles();
    return (
        <div>
            <img className={classes.root} src={imgA}></img>
        </div>
    )
}

export default Img
