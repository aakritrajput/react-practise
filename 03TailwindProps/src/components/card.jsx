import React from 'react'

function Card({username,color}) {

  return (
    <>
      <div className={`bg-[red] text-[white] h-[20vh] w-[8vw] border-[blue] border-[15px] flex justify-center mb-14`}>
         <h5 className="bg-slate-400 text-[#151a12] rounded-[50px] p-5 flex items-center">Tailwind css {username}</h5>
      </div>
    </>
  )
}

export default Card
