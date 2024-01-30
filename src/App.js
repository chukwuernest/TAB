import React, { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [Loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (Loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )
  }
  return (
    <section>
      <div>
        <h1>so we go again</h1>
      </div>
    </section>
  )
}

export default App
