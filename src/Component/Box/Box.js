import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Img from '../Img/Img'
import List from '../List/List'

const useStyles = makeStyles((theme) => ({
    root: {
        border:'2px solid green',
        height:'500px',
        marginLeft:'15%',
        marginRight:'15%',
        background:'white',
        background:'linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.1))',
        zIndex: '1'
    },
    idxcircle:{
        background: 'white',
        background:'linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.1))',
        height:'10rem',
        width:'10rem',
        position: 'absolute',
        top: '5%',
        left: '10%',
        borderRadius:'50%',
        zIndex:'3',
    },
    idxcircle2:{
        background: 'white',
        background:'linear-gradient(to right bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.1))',
        height:'10rem',
        width:'10rem',
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        borderRadius:'50%',
        zIndex:'5',
        
    }
  }));
function Box() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.idxcircle}></div>
            <div className={classes.idxcircle2}></div>
            <div>
            <Img></Img>
            <List></List>
            </div>

            
        </div>
    )
}

export default Box
