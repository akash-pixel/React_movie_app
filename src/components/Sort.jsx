import React, { useState } from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpAZ, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons"

function Sort({ setSort, setSortBy }) {

  const [active, setActive] = useState("")

  const handleDropbox = (e) =>{
    setSort(true)
    setActive("ASC")
    setSortBy(e.target.options[e.target.options.selectedIndex].value  )
  }

  const handleSort = () =>{
    if(active === "" ){
      setActive("ASC")
      return;
    }

    if( active !== "DESC" ){
      setSort(false)
      setActive("DESC")
    } else {
      setSort(true)
      setActive("ASC")
    }
  }

  const resetHandler = () => {
    setSort(null)
    setSortBy("")
    setActive("")
  }

  return (
    <Container>
      <div>
        <label style={{"marginRight":"10px"}}>Sort By</label>
        <SELECT id="op" onChange={handleDropbox} >
          <option value="" >None</option>
          <option value="title" >Title</option>
          <option value="rating" >Rating</option>
          <option value="price" >Price</option>
          <option value="release_date" >Release Date</option>
        </SELECT>
        <Button onClick={handleSort}  >
          <FontAwesomeIcon icon={active==="DESC" ? faArrowDownAZ : faArrowUpAZ } />
        </Button>
        <Button  onClick={resetHandler}>Reset</Button>
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

const SELECT = styled.select`
  font-size:14px;
  padding:4px;
  border-radius: 25px;
  background: white;

  `

const Button = styled.button`
  background: #C3F5EC;
  margin: 5px;
  padding: 6px;
  height: 30px;
  width: 55px;
  border: none;
  border-radius: 25px;
  text-align:center;
  cursor:pointer;

  &:hover {
    background:#65CFBD
  }
`

export default Sort