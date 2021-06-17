import React from 'react'
import Title from './Components/Title'
import Uploadform from './Components/Uploadform'
import {makeStyles} from '@material-ui/core'
import Imagewrap from './Components/Imagewrap';
const useStyles = makeStyles((theme)=>({
root:{
  width:"80%",
  margin:"auto",
[theme.breakpoints.down('sm')]:{
width:"90%"
}
}
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title/>
      <Uploadform/>
      <Imagewrap/>
    </div>
  )
}

export default App
