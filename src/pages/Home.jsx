import React from 'react'

function Home() {
  return (
    <div className="Homecomponent h-[100vh] w-[100vw] flex">
        <div id="left_div" className="h-[100vh] w-[80vw] border-2 border-amber-100">
            <div id="trending" className='h-[40vh] w-[100%] border-2 border-amber-600'></div>
        </div>
        <div id="right_div" className='h-[100vh] w-[20vw] border-2 border-amber-300'></div>

    </div>
  )
}

export default Home
  