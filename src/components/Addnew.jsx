import React from 'react'
import styled from 'styled-components';
import axios from '../axios'

function Addnew() {

  const genres = ["Action", "Comedy","Drama","Fantasy", "Horror", "Mystery","Romance" ,"Thriller", "Western "]

  let genre = [];
  const handleChange = (e) =>{
    const {value, checked} = e.target;
    checked ? genre.push(value) : genre = genre.filter(e => e !== value )
  }

  const data = { title:"", release_date:"", price:0, rating:0 }
  const handleInput = (e) =>{
    data[e.target.name] = e.target.value; 
  }

  const validate = () => {
    if ( data.title.length < 3 || data.title.length > 60 ){ 
      alert("Title should have minimum 3 character and maximum 60 charater ")  
      return false
    };
    if( data.genre.length === 0 || data.rating.length>3 ) {
      alert("At least choose one genre.")
      return false;
    }
    return true;
  }

  const submitHandler = async () => {
    
    data['price'] = parseFloat( data.price )
    data['rating'] = parseFloat( data.rating )
    data["genre"] = genre;

    if (validate(data) === false ){
      return;
    }

    let result = await axios.post("/", data)
    console.log(result);
    window.location.reload()
  }

  return (
    <Container>
        <span>
          <Label htmlFor="title">Title</Label>
          <input name='title' id='title' type="text" onChange={handleInput} required minLength="3" maxLength="60"/>
        </span>
        <span>
          <Label htmlFor="release_date">Release Date</Label>
          <input type="date" id='release_date' onChange={handleInput} name="release_date" />
        </span>
        <span>
          <Label htmlFor="price">Price</Label>
          <input type="text" id='price' onChange={handleInput} name="price" />
        </span>
        <span>
          <Label htmlFor="rating">Rating</Label>
          <input type="text" id='rating' onChange={handleInput} name="rating" />
        </span>
        <div>
          <h3>Choose Genre:</h3>
          {
            genres.map((genre,index) => {
              return <div key={index} >
                    <Label htmlFor={genre}>{genre}</Label>
                    <input type="checkbox" onChange={handleChange} id={genre} value={genre} />
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
`

const Label = styled.label`
  margin-right: 8px;
`

export default Addnew