import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/aakritrajput')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      Github followers: {data.followers}
      <div className='w=[100%] flex justify-center'>
        <img src={data.avatar_url} alt="Git picture" width={300}/>
      </div>
    </div>
  )
}

export default Github

export const githubInFoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/aakritrajput')
    return response.json()
}
