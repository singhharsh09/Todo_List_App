import React from 'react'

export const Footer = () => {
  let giveStyle={
    position:"relative",
    top:"60vh",
    width:"100%"

  }
  
  return (
<footer className='bg-dark text-light ' style={giveStyle}>
  <p className='text-center py-4'>Copyright &copy:myTodoslist.com</p>
</footer>
  )
}
