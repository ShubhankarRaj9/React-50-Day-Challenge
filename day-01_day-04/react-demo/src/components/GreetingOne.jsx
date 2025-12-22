import React from 'react'

const GreetingOne = (props) => {
  return props.timeOfDay === 'morning'?(
    <h1>Good Morning!</h1>
  ):(
    <h1>Good Afternoon!</h1>
  )
}

export default GreetingOne