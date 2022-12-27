import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img 
        src="https://i.imgur.com/Stc5FXC.jpg"
        alt="/"
        className='w-full h-full object-cover'
      
      />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1>Find Your Special Trip</h1>
          <h2>With Weekaway</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla incidunt cupiditate laborum exercitationem ducimus maxime sint alias voluptates, modi temporibus mollitia amet sunt odit officiis consequuntur asperiores velit doloremque obcaecati.</p>
        </div>
      </div>
    </div>
    
  )
}

export default Hero