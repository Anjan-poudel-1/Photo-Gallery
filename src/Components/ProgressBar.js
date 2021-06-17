import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'
function ProgressBar(props) {
    const {filename,progress,error,url} = useStorage(props.file)
    console.log(progress);
    useEffect(()=>{
if(url){
props.setFile(null)
}
    },[url])
    return (
        <motion.div style={{height:"5px",width:`${progress}%`,backgroundColor:"orange",borderRadius:"5px"}}
       initial={{width:0}}
       animate={{width:progress+'%' }}
        >
            
        </motion.div>
    )
}

export default ProgressBar
