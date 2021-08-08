import React from 'react'
import Card from '../Card/Card'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
     marginTop:'8%',
    },
  
  });
function Reading() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Card/>
        </div>
    )
}

export default Reading
