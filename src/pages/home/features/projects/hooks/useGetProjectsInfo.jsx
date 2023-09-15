import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGetProjectsInfo() {
    const [projectsInfo, setProjectsInfo] = useState([{}])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setLoading(true)
        let cancel
        let url 
        if (process.env.NODE_ENV == 'development'){
            url = 'http://localhost:8000/projects'
        } else if (process.env.NODE_ENV == 'production'){
            url = 'https://backend.carrarasoftware.com.br/projects/'
        }  

        axios.get(
            url,{
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then((res) => {
                setLoading(false)
                setProjectsInfo(res.data)
            }
        )

        return () => {cancel()}
    }, [])

    return [projectsInfo, loading]
}