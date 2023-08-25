import { useState, useEffect } from 'react';
import axios from 'axios';

import ProjectsList from './components/ProjectsList'
import './App.css';

function App() {
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
      console.log(res.data)
      setLoading(false)
      setProjectsInfo(res.data)
    })

    return () => {cancel()}
  }, []
  )

  if (loading) return "Loading..."
  
  return (
    <div className="App">

      <ProjectsList projects={projectsInfo} />      

    </div>
  )
}

export default App
