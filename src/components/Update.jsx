import React, {useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'
import  {useParams , useNavigate } from 'react-router-dom'
import axios from '../axios'

function Update() {

  const navigate = useNavigate();
  const {id} = useParams()
  const [movie, setMovie] = useState([])
  const genres = ["Action", "Comedy","Drama","Fantasy", "Horror", "Mystery","Romance" ,"Thriller", "Western "]

  let genre = [];
  let data = { title:"", release_date:"", price:0, rating:0 }
  const handleInput = (e) =>{
    data[e.target.name] = e.target.value; 
  }

  // Form validation
  const validate = () => {
    if ( data.title.length < 3 || data.title.length > 60 ){ 
      alert("Title should have minimum 3 character and maximum 60 charater ")  
      return false
    };
    if( data.rating > 10.0 || data.rating > 0.0  ){
      alert("Rating should not be less than 0 and greater than 10.")  
      return false
    }
    return true;
  }

  const submitHandler = async () => {    
    data['price'] = parseFloat( data.price )
    data['rating'] = parseFloat( data.rating )
    data["genre"] = genre;
    console.log(data);

    if (validate(data) === false ) return;

    let result = await axios.put("/update/"+id, data)
    console.log(result);
    // window.location.href("/")
    navigate("/")
  }

  const fillData = (m) => {
    document.getElementById("title").value = m.title 
    document.getElementById("release_date").value = m.release_date
    document.getElementById("price").value = m.price
    document.getElementById("rating").value = m.rating
    
    data.title = m.title
    data.release_date = m.release_date
    data.rating = m.rating
    data.price = m.price
    console.log(data);
  }

  const fetchData = useCallback( async () => {
    const result = await axios.get("/details/"+id)
    console.log(result.data.data);
    setMovie(result.data.data);
    fillData(result.data.data[0] );


  },
  [ id ],
  )

  useEffect(()=>{
    if ( movie.length === 0 ){
      fetchData();
    }
  },[ fetchData, movie])

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
                    <input type="checkbox"  id={genre} value={index+1} />
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

export default Update