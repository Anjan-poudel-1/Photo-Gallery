import React from 'react'
import {makeStyles, Typography} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({

    navwrap:{
        height:"100px",
        display:"flex",
        alignItems:"center"
    },
    titleWrap:{
        margin:"20px 0",
        textAlign:"center",
      
    }

}));
function Title() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.navwrap}>
<Typography style={{display:"inline",fontFamily:"Lobster",paddingRight:"2px",color:"#ffaa80"}} variant="h3">My</Typography>
<Typography style={{display:"inline",}} variant="h4">gallary</Typography>
            </div>
            <div className={classes.titleWrap}>
<Typography variant="h4" style={{  fontFamily:"Itim,cursive",fontSize:"38px"}}>Your Pictures!</Typography>
<Typography>You can upload the images you wish to!</Typography>
            </div>
        </div>
    )
}

export default Title
