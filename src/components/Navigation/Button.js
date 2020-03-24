import React from 'react'

const NavigationButton = ({children, onClick}) => {

  return(<button onClick={onClick}>{children}</button>)
}

export default NavigationButton
