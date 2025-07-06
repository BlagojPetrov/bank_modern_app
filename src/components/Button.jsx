import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 bg-blue-gradient font-poppins font-medium w-[170px] h-[64px] ${styles} rounded-[10px]`}>Get Started</button>
  )
}

export default Button