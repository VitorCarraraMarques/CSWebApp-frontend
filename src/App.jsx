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
    axios.get(
      'http://localhost:8000/projects/',{
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
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
