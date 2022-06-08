import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Div>
      <p>@The Movie Club</p>
    </Div>
  )
}

const Div = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#B4F2E8;
`

export default Footer