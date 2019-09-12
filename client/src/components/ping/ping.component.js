import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Ping() {
  const [pong, setPong] = useState('pending')

  useEffect(() => {
    axios.get('api/ping')
      .then((response) => {
      setPong(response.data.message)
    })
      .catch(function (error) {
      console.log(error);
    });

  })

  return(
    <h1>Ping {pong}</h1>
  )
}

export default Ping;