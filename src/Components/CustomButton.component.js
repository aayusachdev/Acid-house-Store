import React from 'react'
import "../Styles/CustomButton.style.scss"

const CustomButton = ({ children, ...otherButtonProps }) => {
  return (
    <button className="custom-button" {...otherButtonProps}>
      {children}
    </button >
  )
}

export default CustomButton;