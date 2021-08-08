import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container'
import TypoGraphy from '@material-ui/core/Typography'
import Reading from './Reading'
import Coding from './Coding'
import Thinking from './Thinking'
import { CancelScheduleSendSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    alignIten:'center',
    justifyContent:'center',
  },
  content:{
    alignIten:'center',
    justifyContent:'center',
  }

});

export default function CenteredTabs() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Container>
      <TypoGraphy color='primary'align="center" famaily='"Helvetica Neue"' variant="h2" component="h2" gutterBottom>
      Forte
      </TypoGraphy>
    <Paper  position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Reading" />
        <Tab label="Coding" />
        <Tab label="Thinking" />
      </Tabs>
    </Paper>
    <div className={classes.content}>
    {value === 0 && <Reading/>}
    </div>
    {value === 1 && <Coding/>}
    {value === 2 && <Thinking/>}
   
    </Container>
    </div>
  );
}
