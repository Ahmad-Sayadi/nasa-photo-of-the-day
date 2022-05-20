import React,{useState,useEffect} from 'react'
import axios from 'axios';



const NasaImage= ()=>{
    const [image,setImage] = useState([])
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=Hde8hkvJwaaZeh2uYYMKv6hRUQ1xfgLO1A7P0zJG ")
        .then(res=>{
            setImage(res.data)
        })
           
    
    },[image])
    return(
        <div>
<img src={image.url}/>
        </div>
    )
}
export default NasaImage;