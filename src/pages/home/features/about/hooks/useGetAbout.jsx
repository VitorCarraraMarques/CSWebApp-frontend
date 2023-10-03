import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGetAbout(){
    const [about, setAbout] = useState([{}])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setLoading(true)
        let cancel
        let url 
        if (process.env.NODE_ENV == 'development'){
            url = 'http://localhost:8000/about/topics/'
        } else if (process.env.NODE_ENV == 'production'){
            url = 'https://backend.carrarasoftware.com.br/about/topics/'
        }  

        axios.get(
            url,{
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then((res) => {
                setLoading(false)
                setAbout(res.data)
            }
        )

        return () => {cancel()}
        
    }, [])


    return [about, loading]

}