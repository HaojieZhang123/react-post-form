import { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(endpoint, formData)
      .then((res) => {
        console.log(res.data)
        alert('Post created successfully!')
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  }

  return (
    <>
      <Header />
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Footer />
    </>
  )
}

export default App
