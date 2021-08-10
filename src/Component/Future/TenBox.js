import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../../images/item2.png'

const useStyles = makeStyles((theme) => ({

    root: {
      marginTop:'5%',  
      width:'100%',
      height:'400px',
    },
    img : {
       
    }
 
}));

function TenBox() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         
            <img className={classes.img} src= {imgA}></img>                       
        </div>
    )
}

export default TenBox
