import React,{useEffect,useState} from 'react'
import {Grid, makeStyles,Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import {projectFirestore} from '../firebase/config'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme)=>({
Wrap:{
minHeight:"3oopx",

marginTop:"30px",
marginBottom:"50px"
},
image:{
    height:"300px",
    cursor:"pointer"
    ,backgroundSize:"cover",backgroundRepeat:"no-repeat"
},
modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline:"none",
    overflow:"scroll",
    zIndex:"900"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline:"none",
    boxShadow: theme.shadows[5],
    
    maxWidth:"60%",
    maxHeight:"50%",
   
 
  },
  delete:{
      zIndex:"1000",
      position:"fixed",
      top:"10px",
      right:"10px"
  }


}));

function Imagewrap() {
const [imageURLs,setImages]= useState([]);
const [showmodal,setModal] = useState(false);
const [modalImage,setmodalImage] = useState()
const [imageid,SetImageid] = useState()
const [imageData,setimageData] = useState();
    const classes = useStyles();


    useEffect(()=>{

        const firestoreRef = projectFirestore.collection('images');
        firestoreRef.orderBy('createdAt','desc').
        onSnapshot((snap)=>{
            console.log("cominggggg")
            let arr = [];
            let tempimagedata = []
           snap.docs.map(a=>{
               console.log(a.id);
               let imageURL = a.data().url;
              arr.push(imageURL)
              tempimagedata.push(a);

           })
           setimageData(tempimagedata);
           setImages(arr);
        })
    
    },[]);
    const handleOpen = (a) => {
        SetImageid(a.id);
        console.log("opened")
        setModal(true);
        setmodalImage(a.data().url)
      };
    
      const handleClose = () => {
        setModal(false);
        setmodalImage()
      };
      const DeleteImage =(id)=>{
        setModal(false);
        const reference = projectFirestore.collection('images').doc(id).delete().then(()=>{
            console.log("deleted");
            
        });
        
      }

    return (
        <div className={classes.Wrap}>
            <Grid container spacing={5} className={classes.images}  >
              
             {imageData?imageData.map(a=>{
 return( <Grid item  md={4} sm={6} xs={12}>
     <motion.div layout>
<motion.div  className={classes.image} style={{backgroundImage:`url(${a.data().url})`,opacity:"0.8",transition:"500ms"}} 
whileHover={{opacity:1}}
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1}}
 onClick={()=>handleOpen(a)}>
</motion.div>
</motion.div>
    </Grid>
    )
             })
             
              
              :""}   
            </Grid>




            
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showmodal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showmodal}>
           <>
            <img src={modalImage} style={{height:"70%",outline:"none"}}></img>  
            <div className={classes.delete}>
<Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={()=>DeleteImage(imageid)}
      >
        Delete the image
      </Button>
</div>
            </>


        </Fade>
      </Modal>



        </div>
    )
}

export default Imagewrap
