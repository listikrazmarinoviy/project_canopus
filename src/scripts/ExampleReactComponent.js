import React, { useState } from "react"

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="example-react-component" onClick={() => setClickCount(prev => prev + 1)}>
      <h1>PROJECT CANOPUS TEST</h1>
      <p>You have clicked on this component {clickCount} times.</p>
    </div>
  )
}

export default ExampleReactComponent
