import React from 'react'

const NavigationButton = ({children, onClick}) => {

  return(<button className={'navigationbutton'} onClick={onClick}>
          {children}
        </button>)
}

export default NavigationButton
