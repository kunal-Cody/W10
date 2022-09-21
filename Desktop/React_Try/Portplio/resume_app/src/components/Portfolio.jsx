import React from 'react'
import Menu from '../assets/Menu_hotel1.jpg';
import Store from '../assets/Store.jpg';
import Weather from '../assets/Weather.jpg';

const Portfolio = () => {

  const portfolio = [
    {
      id: 1,
      src: Menu
    },
    {
      id: 2,
      src: Store
    },
    {
      id: 3,
      src: Weather
    },
  ]


  return (
    <div name='Portfolio' className='w-full h-screen bg-gradient-to-b  from-black to-gray-800 text-white
    md:h-screen'>
      <div className='max-w-screen-large p-4 mx-auto flex flex-col 
       justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6 '> check out some of my work right here</p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolio.map(({id, src}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Code</button>

            </div>
          </div>
          ))
        }
            </div>

       

      </div>
    </div>
  )
}

export default Portfolio
