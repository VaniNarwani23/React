import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/VaniNarwani23')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
    <div className='text-center m-4 uppercase font-semibold tracking-tighter  text-black p-4 text-4xl rounded'>
      <div className="  hover:underline hover:bg-gray-200">
      Github Followers: {data.followers} 
      </div>
      <img className='text-center mt-5 mb-6' src={data.avatar_url} alt = "Git Picture "  width= {250} />
      </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/VaniNarwani23')
  return response.json()
}
