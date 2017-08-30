import React from 'react'

const SimplerComponent = (props) => <div onClick={props.handleClick}>I am just happy</div> 

const handleClick = (event) => {
	console.log(this)
}

export default SimplerComponent