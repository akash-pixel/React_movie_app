import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import  {useParams , useNavigate } from 'react-router-dom'
import axios from '../../axios'

function Update() {

  const navigate = useNavigate();
  const {id} = useParams()
  const genreList = ["Action", "Comedy","Drama","Fantasy", "Horror", "Mystery","Romance" ,"Thriller", "Western "]
  
  const [selectedGenre, setGenre] = useState([])
  const [title, setTitle] = useState("")
  const [releaseDate, setReleaseDate] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")

  const handleCheckbox = (e) =>{
    const { value , checked} = e.target;
    if( checked)
      setGenre( [...selectedGenre, value ] )
    else{
      setGenre( selectedGenre.filter(item => item !== value) );  
    }
  }

  const handleRating = (e) =>{
    let value = e.target.value;
    if( isNaN(value) || parseFloat(value) > 10 || parseFloat(value) < 0 ){
      alert("Enter number between 0 to 10")
    }
    else{
      setRating(value)
    }
  }

  const submitHandler = async () =>{
    
    const data = { title: title, release_date: releaseDate, price: price, rating: rating, genre: selectedGenre };
    let result = await axios.put( `/update/${id}`, data )
    if( result.status !== 201 ){
      alert("Server Error\nPlease try later...")
    }  
    
    navigate("/")
  }

  useEffect(()=>{
    const fetchData = async () =>{
      const result = await axios.get(`/details/${id}`)

      setTitle( result.data.data.title )
      setPrice( result.data.data.price )
      setRating(result.data.data.rating )
      setReleaseDate(result.data.data.release_date)
      setGenre( result.data.data.genre );
    }
    fetchData()

  },[id])

  return (
    <Container>
        <span>
          <Label htmlFor="title">Title</Label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name='title' maxLength="60"/>
        </span>
        <span>
          <Label htmlFor="release_date">Release Date</Label>
          <input type="date" value={releaseDate} onChange={(e)=>setReleaseDate(e.target.value)} name="release_date" />
        </span>
        <span>
          <Label htmlFor="price">Price</Label>
          <input type="text" value={price} onChange={(e)=>setPrice(e.target.value) } name="price" maxLength="13" />
        </span>
        <span>
          <Label htmlFor="rating">Rating</Label>
          <input type="text" value={rating} onChange={handleRating}  name="rating" maxLength="3" />
        </span>
        <div>
          <h3>Choose Genre:</h3>
          {
            genreList.map((genre,index) => {
              return <div key={index} >
                    <Label htmlFor={genre}>{genre}</Label>
                    <input type="checkbox" checked={ selectedGenre.includes(genre) } onChange={handleCheckbox} value={genre} />
                 </div>              
            } )
          }
        </div>
        <button onClick={submitHandler}>Submit</button>
    </Container>
  )
}

const Container = styled.div`
  margin: 20px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 73vh;
`

const Label = styled.label`
  margin-right: 8px;
`

export default Update