import React,{useState,useEffect} from 'react'
import {projectStorage,projectFirestore,timeStamp} from '../firebase/config'
function useStorage(file) {
    const [filename,setFilename] = useState(null);
    const[progress,setProgress] = useState();
    const[error,setError] = useState();
    const[url,setUrl] = useState();

 
    useEffect(()=>{
        const newId = Date.now();
        const newIdStr = newId.toString()
        const newFile = newIdStr.concat(file.name);
        setFilename(newFile);
        const StorageRef = projectStorage.ref(newFile);
        const Collecionref = projectFirestore.collection("images");
        StorageRef.put(file).on('state_changed',
        (snap)=>{
            console.log("snap")
console.log(snap);
let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
setProgress(percentage);

        },(err)=>{
            setError(err);
        },
           //when fully completed 
        async()=>{  
            const url = await StorageRef.getDownloadURL();
            Collecionref.add({url,createdAt:timeStamp()})
            setUrl(url);

        }
        );


    },[file]);


    return{
        filename,
progress,
error,
url
    }
}

export default useStorage
