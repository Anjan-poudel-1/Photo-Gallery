import { Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import {projectStorage} from '../firebase/config'
import ProgressBar from './ProgressBar'
import styles from '../Stylefile.module.css'

function Uploadform() {
  
    const [fileSelected,setFileSelected] = useState(null);
    const [error,setError] = useState(null);
    

    
    const changeHandler = (event)=>{
        let type = ['image/png','image/jpg','image/jpeg'];
       let selectedfile = event.target.files[0];
       console.log(selectedfile)
       if(selectedfile && type.includes(selectedfile.type) ){
        console.log(selectedfile);
        setFileSelected(selectedfile)
        setError(null)
       }
       else{
           setFileSelected(null);
           setError("Please! select an image file")
       }
      

    }
    return (
        <div style={{textAlign:"center"}}>
<label htmlFor="file">
<Typography className={styles.button} style={{ fontSize:"50px",fontWeight :500,  margin:"Auto",marginTop:"40px"
  , marginBottom:"10px",lineHeight:"1"}}>+
    </Typography>
<input type="file"  id="file" onChange={changeHandler} style={{opacity:"0",height:"0",width:"0"}}/>
</label>
            {console.log(fileSelected)}
            
           <> {fileSelected?<ProgressBar file={fileSelected} setFile={setFileSelected}/>:error}</>
    

          
        </div>
    )
}

export default Uploadform

