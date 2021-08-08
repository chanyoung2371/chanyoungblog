import React from 'react'
import Tab from '../Component/Tab/Tab'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    
  },

});
function Forte() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tab/>

    </div>
  )
}

export default Forte
