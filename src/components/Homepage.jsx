import React, {useState, useEffect, useCallback} from 'react'
import styled from 'styled-components';
import axios from '../axios.js';
import Sort from './Sort.jsx';

function Homepage() {

  // word is used for search text
  const [word, setWord] = useState("")
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(null)
  const [sortBy, setSortBy] = useState("")

  const fetchData = useCallback(async () =>{
    let url = (sort === null) ? "/" : (sortBy === "") ? `/?ASC=${sort}` : `/?ASC=${sort}&sort_by=${sortBy}`;
    const result = await axios.get(url)
    setData(result.data.data);
  },[sort,sortBy])

  const deleteMovie = async (e)=>{
    const id = e.target.getAttribute("data-id");
    let result = await axios.delete( "/delete/"+id )
    fetchData();
    console.log(result);
  }

  const searchHandler = async() =>{
    if(word === "") return;
    let result = await axios.get("/search?q="+word)
    setData(result.data.data)
  }

  useEffect(()=>{
    fetchData()
  },[fetchData])

  return (
    <Main>
      <Searchbar>
        <Input type="text" name='searchbar' value={word} onChange={(e)=>setWord(e.target.value)} />
        <Sbutton onClick={searchHandler}> Search </Sbutton>
      </Searchbar>
     
      <Sort setSort={setSort} setSortBy={setSortBy} />
      
      <table style={{"borderSpacing": "15px"}} >
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Ratings</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
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
    
    </Main>
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

const Searchbar = styled.div`
  margin: 5px;
  display: flex;
`
const Input = styled.input`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 5px;
  padding-left: 12px;
  border: solid black 1px;
`
const Sbutton = styled.button`
  text-decoration:none;
  padding: 6px;
  color: white;
  background: black;
  border: none;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  font-family: "Arial"
`
const Main = styled.div`
  margin: 15px;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
`

export default Homepage