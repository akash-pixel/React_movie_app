import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import styled from 'styled-components'

function MovieDetails() {

  const {id} = useParams()
  const [data, setData] = useState([]);
  
  const fetchData = useCallback( async () => {
      const result = await axios.get("/details/"+id)
      console.log(result.data.data);
      setData(result.data.data);
    },
    [ id],
  )

  const fields = ()=>{
    return <Container>
          <Row>
            <label>Title:</label>
            <p>{data[0].title}</p>
          </Row>
          <Row>
            <label>Release Date:</label>
            <p>{data[0].release_date}</p>
          </Row>
          <Row>
            <label>Price:</label>
            <p>{data[0].price}</p>
          </Row>
          <Row>
            <label>Rating:</label>
            <p>{data[0].rating}</p>
          </Row>
          {
            data[1].genres? 
            <Row>
              <label>Genre:</label>
              <p>{data[1].genres}</p>
            </Row>: ""
        }
      </Container>
  } 
  
  
  useEffect(()=>{
    if( data.length === 0 ){
      fetchData()
    } 

  },[fetchData, data])

  return (
    <div>
      { data.length === 0 ? <h3>Loading...</h3> : fields()  }
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
`

const Row = styled.span`
  display: flex;
  gap: 5px;
`

export default MovieDetails