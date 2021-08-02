import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../images/index_head.jpeg'
import '../style/Home.css'
import Box from '../Component/Box/Box'
import Paper from '../Component/Paper/Paper'

const useStyles = makeStyles((theme) => ({

    root: {
        textAlign: 'center',
        backgroundColor:'rgb(31, 55, 94,1)',
        width:'100%',
        height:'100%',
        position: 'absolute',
        zIndex:'2'
    },
    box:{
        marginTop:'5%',  
    },
  
    
    

}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}> 
        <div className ={classes.box}>
            <Box/>
            </div>            
        </div>
        
    )
}

export default Home
