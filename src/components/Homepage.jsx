import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from '../axios.js';

function Homepage() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  async function fetchData(){
    const result = await axios.get("/")
    setData(result.data.data);
  }

  const deleteMovie = async (e)=>{
    const id = e.target.getAttribute("data-id");
    let result = await axios.delete( "/delete/"+id )
    console.log(result);
  }

  return (
    <div style={{ "margin": "15px" }}>
      <table>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Ratings</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tbody>
        {
          data.map((row, index)=>{
            return <TR key={index}>
              <td>{index+1}</td>
              <td>{row.title}</td>
              <td>{row.rating}</td>
              <td> <Button href={"/details/"+row.id} >Details</Button>  </td>
              <td> <Button href={"/update/"+row.id} >Edit </Button></td>
              <td> <Delbtn onClick={deleteMovie} data-id={row.id}> Delete </Delbtn>  </td>
            </TR>
          })
        }
        </tbody>
      </table>
    
    </div>
  )
}

const TR = styled.tr`
  &:hover{
    background:#eee
  }
`

const Button = styled.a`
  text-decoration: none;
  font-family: "Arial";
  color: black;
`
const Delbtn = styled.button`
background: none;
border: none;
`


export default Homepage