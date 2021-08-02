import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../../images/pptitem1.jpeg'


const useStyles = makeStyles((theme) => ({

    root: {
       width:'100%',
        
       marginTop:'10%',
       
       

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
