import React from 'react'
import styled from 'styled-components'

function Navbar() {


  return (
    <Nav>
        <Logo href='/'>The Movie Club</Logo>
        <AddButton href='/add'>Add New</AddButton>
    </Nav>
  )
}

const Nav = styled.div`
  height: 10vh;
  top: 0;
  left: 0;
  right: 0;
  background: #c1e1ec;
  display: flex;
  justify-content:space-around;
  align-items: center;
`

const Logo = styled.a`
  text-decoration: none;
  color: black;
  font-size: 30px;
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


export default Navbar