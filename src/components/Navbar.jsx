import React from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <Nav>
        <Logo href='/'>The Movie Club</Logo>
        <Searchbar>
          <Input type="text" name='searchbar' />
          <Sbutton type="submit">Search</Sbutton>
        </Searchbar>
        <AddButton href='/add'>Add New</AddButton>
    </Nav>
  )
}

const Nav = styled.div`
  height: 10vh;
  top: 0;
  left: 0;
  right: 0;
  background: pink;
  display: flex;
  justify-content:space-around;
  align-items: center;
`

const Logo = styled.a`
  text-decoration: none;
  color: black;
  font-size: 30px;
`

const Searchbar = styled.div`
  margin: 5px;
  display: flex;
`

const AddButton = styled.a`
  text-decoration: none;
  margin:5px;
  padding: 6px;
  font-size: 13px;
  font-family : 'Arial';
  color: white;
  background: black;
  border-radius: 25px;
  border: none;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }
  &:active{
    background: #333;
  }
` 

const Sbutton = styled.button`
  padding: 6px;
  color: white;
  background: black;
  border: none;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`

const Input = styled.input`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 5px;
  padding-left: 12px;
  border: none;
`

export default Navbar