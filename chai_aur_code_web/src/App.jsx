import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const img = "https://flowbite.com/docs/images/blog/image-1.jpg";

  return (
    <>

    <h1 className='bg-green-400 rounded-2xl m-10 p-5'>Green</h1>

< Card heading="Create by shivam" description="this card desion by shivam pandey" imgUrl={img}/>

      {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://images.pexels.com/photos/33128271/pexels-photo-33128271.jpeg?_gl=1*1lyfhpk*_ga*MTE2MDMyMzM2NC4xNzUzODA0ODg1*_ga_8JE65Q40S6*czE3NTM4MDQ4ODQkbzEkZzEkdDE3NTM4MDQ5NTIkajYwJGwwJGgw" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */}

    </>
  )
}

export default App
