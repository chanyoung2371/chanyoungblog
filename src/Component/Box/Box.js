import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Img from '../Img/Img'
import List from '../List/List'

const useStyles = makeStyles((theme) => ({
    root: {
        
        height:'500px',
        marginLeft:'15%',
        marginRight:'15%',
        background:'white',
        background:'linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.1))',
        zIndex: '1'
    },
   
  }));
function Box() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
            <Img></Img>
            <List></List>
            </div>

            
        </div>
    )
}

export default Box
