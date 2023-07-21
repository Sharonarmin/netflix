import axios from 'axios'
import { useState } from 'react';


function ApiTest() {
    const [state,setState] = useState([])
  return (
    <div>
      <button onClick={ () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setState(response.data)
        })
      }}>Click</button>
      {state.map((obj,index) => {
        return(
            <div>
                <h1>{index + 1}</h1>
                <h6>{obj.title}</h6>
                <h6>{obj.body}</h6>
            </div>
        )
      })}
    </div>
  )
}

export default ApiTest
