
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";



const useData =(category_id)=>{
    const [videos,setVideos] =useState([]);
    const[loading,setLoading] =useState(true);
    const [error,setError] =useState('');

    
   
    useEffect(()=>{

        let url = 'videos';
        if(category_id){
            url = `${url}/${category_id}`;
        }
        
     const fetchData =async ()=>{
        setLoading(true);
        try {
            const {status,data} = await axiosInstance.get(url);
            console.log(data)
            
            if(status ===200){
                setVideos(data);
                setLoading(false);
                setError('');
            }
        } catch (error) {
          setLoading(false);
          setError(error.response.data.message)  
        }
     };

     fetchData();

    },[category_id]);
    return{
        videos,
        loading,
        error,
    }
}
export default useData;