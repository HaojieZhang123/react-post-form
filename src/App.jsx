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
      <Form />
      <Footer />
    </>
  )
}

export default App
