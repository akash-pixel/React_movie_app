import React, { useState } from 'react'
import styled from 'styled-components'

function Sort({ setSort, setSortBy }) {

  const [active, setActive] = useState("")

  return (
    <Container>
      <div>
        <Button style={{background:active==="ASC"?"#70E6D2":"#C3F5EC"}} onClick={()=>{setSort(true);setActive("ASC")}}>ASC</Button>
        <Button style={{background:active==="DESC"?"#70E6D2":"#C3F5EC"}} onClick={()=>{setSort(false);setActive("DESC")}}>DESC</Button>
        <Button style={{background:active===""?"#70E6D2":"#C3F5EC"}} onClick={()=>{setSort(null);setActive("")}}>Reset</Button>
      </div>
      <div>
        <label style={{"marginRight":"10px"}}>Sort By</label>
        <select id="op" onChange={(e)=> setSortBy(e.target.options[e.target.options.selectedIndex].value  )} >
          <option value="" >none</option>
          <option value="title" >Title</option>
          <option value="rating" >Rating</option>
          <option value="price" >Price</option>
          <option value="release_date" >Release Date</option>
        </select>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  background: #8BEBDB;
  margin: 5px;
  padding: 6px;
  height: 30px;
  width: 55px;
  border: none;
  border-radius: 25px;
  text-align:center;
  cursor:pointer;
`

export default Sort