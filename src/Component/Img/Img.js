import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../../images/pptitem1.jpeg'


const useStyles = makeStyles((theme) => ({

    root: {
       width:'30%',
       marginLeft:'10%',
       marginRight:'10%',
       marginTop:'8%',
       float: 'left',
       

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
