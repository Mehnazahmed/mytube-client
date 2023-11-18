
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";



const useCategory =(category)=>{
    const [categories,setCategories] =useState([]);
    const[loading,setLoading] =useState(true);
    const [error,setError] =useState('');

    
   
    useEffect(()=>{

        let url = 'category';
        if(category){
            url = `${url}/${category}`;
        }
        
     const fetchData =async ()=>{
        setLoading(true);
        try {
            const {status,data} = await axiosInstance.get(url);
            console.log(data)
            
            if(status ===200){
                setCategories(data);
                setLoading(false);
                setError('');
            }
        } catch (error) {
          setLoading(false);
          setError(error.response.data.message)  
        }
     };

     fetchData();

    },[]);
    return{
        categories,
        loading,
        error,
    }
}
export default useCategory;