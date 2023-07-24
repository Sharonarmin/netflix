import axios from 'axios'
import { useState } from 'react';

function ApiTest() {
    const [state,setState] = useState([])
  return (
    <div>
      <button onClick={ () => {
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=576c5d7ce8801697f0331d8450d6a2b0').then((response) => {
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
