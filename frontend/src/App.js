import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap'

function App() {
  const [bookName, setBookName] = useState('')
  const [review, setReview] = useState('')
  const [fetchData, setFetchData] = useState('')
  const [reviewUpdate, setReviewUpdate] = useState('')

  const handleBookChange = (event) => {
    const name = event.target.name
    setBookName(name)
  }

  const handleReviewChange = (event) => {
    const review = event.target.review
    setReview(review)
  }

  useEffect(() => {
    axios.get('http://localhost:4005/get')
    .then((res) => {
      setFetchData(res.data)
    })
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
