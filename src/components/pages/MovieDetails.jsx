import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../axios'
import styled from 'styled-components'

function MovieDetails() {

  const {id} = useParams()
  const [data, setData] = useState({});

  useEffect(()=>{

    const fetchData = async() => {
      const result = await  axios.get("/details/"+id)
      setData(result.data.data);
    }

    if( Object.keys(data).length === 0 ){
      fetchData()
    } 

  },[data, id])

  return (
    <div>
      { Object.keys(data).length === 0 ? <h3>Loading...</h3> : 
        <Container>
              <Row>
                <label>Title:</label>
                <p>{data.title}</p>
              </Row>
              <Row>
                <label>Release Date:</label>
                <p>{data.release_date}</p>
              </Row>
              <Row>
                <label>Price:</label>
                <p>{data.price}</p>
              </Row>
              <Row>
                <label>Rating:</label>
                <p>{data.rating}</p>
              </Row>
              <Row>
                <label>Genre:</label>
                <p>{ data.genre.length===1? data.genre : data.genre.join(", ")}</p>
              </Row>
          </Container>
        }
    </div>
  )
}

const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`

const Row = styled.div`
  display: flex;
  margin: 8px;
  &>label {
    margin-right:6px;
  }
`

export default MovieDetails