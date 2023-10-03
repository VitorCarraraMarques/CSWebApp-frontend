import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGetAboutContentById( id ){
    const [aboutContent, setAboutContent] = useState({})
    

    useEffect( () => {
        let cancel
        let url 
        if (process.env.NODE_ENV == 'development'){
            url = `http://localhost:8000/about/content/${id}`
        } else if (process.env.NODE_ENV == 'production'){
            url = `https://backend.carrarasoftware.com.br/about/content/${id}`
        }  

        axios.get(
            url,{
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then((res) => {
                setAboutContent(res.data)
            }
        )

        return () => {cancel()}
        
    }, [])


    return aboutContent

}