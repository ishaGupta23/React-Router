import React from 'react'

function Home() {
  return (
<section className="">
    <div className="homeLeft">
        <div className='heading'>
            
            <h1>Home &nbsp; |</h1>
        </div>
        <div className='person flex'>
            <img src='https://tailus.io/sources/blocks/classic/preview/images/man.jpg'/>
        </div>
        <div className='personInfo flex'>
            <h3>Age: 25 <br/>
            Location: India </h3>
        </div>
    </div>
    <div className='homeRight p-20 items-center'>
        <div class="">
            <h1 >Mat Simon,</h1>
            <h3>write about yourself. </h3>
        </div>
    </div>
</section>
  )
}

export default Home