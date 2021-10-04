import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap'

function App() {
  const [bookName, setBookName] = useState('')
  const [review, setReview] = useState('')
  const [fetchData, setFetchData] = useState('')
  const [reviewUpdate, setReviewUpdate] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4005/get')
    .then((res) => {
      setFetchData(res.data)
    })
  }, [])

  const handleBookChange = (event) => {
    // const name = event.target.name
    // const input = {}
    // input[event.target.id] = event.target.value;
    setBookName(event.target.value)
  }

  const handleReviewChange = (event) => {
    // const review = event.target.review
    setReview(event.target.value)
  }


  const submit = () => {
    axios({
      url: 'http://localhost:4005/insert',
      method: 'POST',
      data: {bookName, review}
    })
    .then(() => {
      alert('success post')
      document.location.reload();
    })
    .catch((err) => console.log(err))

  }

  const deletePost = (id) => {
    axios.delete(`http://localhost:4005/delete/${id}`).then(() => {
      alert('success delete')
    })
    .catch((err) => console.log(err))
    document.location.reload();
  }

  const edit = (id) => {
    axios({
      url: `http://localhost:4005/update/${id}`,
      method: 'POST',
      data: {reviewUpdate}
    })
    .then(() => {
      alert('success edit')
    })
    .catch((err) => console.log(err))
  }

  
  console.log(bookName, review)

  return (
    <div className="App">
      <h1>Dockerized Fullstack React Application</h1>
          <div className='form'>
              <input id='bookName' name='bookName' placeholder='Enter Book Name' onChange={handleBookChange} />
              <input name='setReview' placeholder='Enter Review' onChange={handleReviewChange} />
          </div>
          <Button className='my-2' variant="primary" onClick={submit}>Submit</Button> <br /><br />
          <Container>
              <Row>
                  {/* {card} */}
              </Row>
          </Container>
    </div>
  );
}

export default App;
