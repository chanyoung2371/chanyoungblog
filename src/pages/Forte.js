import React from 'react'
import Tab from '../Component/Tab/Tab'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Footer from '../Component/Footer/Footer'
const useStyles = makeStyles({
  root: {
    textAlign:'center'
  },

});
function Forte() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tab/>
      <Container>
      <Footer/>
      </Container>

    </div>
  )
}

export default Forte
