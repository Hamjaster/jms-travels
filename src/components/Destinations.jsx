import React from 'react'
import { Tinos } from 'next/font/google'
import { Roboto } from 'next/font/google'

const normal = Roboto({ subsets: ['latin'], weight: '300' })
const italic = Tinos({ subsets: ['latin'], weight: '400', style: 'italic' })

export default function Destinations() {
  return (
    <div id='destinations' className='bg-gray-200 py-36'>
      <div className="w-11/12 sm:w-1/2 text-center mx-auto mb-12">
        <div className={`${italic.className} text-4xl mb-4 sm:text-5xl`}>Plan your next trip with us</div>
        <div>Spanning cities, countries and continents, we cover all types of travel destinations around the world. Dont see your travel destination listed? Our advisors can still book your trip. Connect with a US today.</div>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:mx-16 mx-4 `}>

        <div style={{
          backgroundImage: 'url(https://www.foratravel.com/images/destinations/asia.webp?w=703&q=90)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} className="relative rounded-2xl sm:rounded-none w-full h-96 card cursor-pointer group">
          {/* Image */}
          {/* <img src="https://www.foratravel.com/images/destinations/asia.webp?w=703&q=90" alt="Background" className="w-full h-auto" /> */}

          {/* Dark overlay */}
          <div className="absolute rounded-2xl sm:rounded-none group-hover:opacity-60 transition-all inset-0 bg-black opacity-50"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h2 className="text-4xl font-bold tracking-wider">Morocco</h2>
          </div>
        </div>

        <div style={{
          backgroundImage: 'url(https://www.foratravel.com/images/destinations/europe.webp?w=703&q=90)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} className="relative rounded-2xl sm:rounded-none md:col-span-2 w-full h-96 card cursor-pointer group">
          {/* Image */}
          {/* <img src="https://www.foratravel.com/images/destinations/asia.webp?w=703&q=90" alt="Background" className="w-full h-auto" /> */}

          {/* Dark overlay */}
          <div className="absolute rounded-2xl sm:rounded-none group-hover:opacity-60 transition-all inset-0 bg-black opacity-50"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h2 className="text-4xl font-bold tracking-wider">United Kingdom</h2>
          </div>
        </div>

        <div style={{
          backgroundImage: 'url(https://www.foratravel.com/images/destinations/oceania.webp?w=703&q=90)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} className="relative rounded-2xl sm:rounded-none md:col-span-2 w-full h-96 card cursor-pointer group">
          {/* Image */}
          {/* <img src="https://www.foratravel.com/images/destinations/asia.webp?w=703&q=90" alt="Background" className="w-full h-auto" /> */}

          {/* Dark overlay */}
          <div className="absolute rounded-2xl sm:rounded-none group-hover:opacity-60 transition-all inset-0 bg-black opacity-50"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h2 className="text-4xl font-bold tracking-wider">Singapore</h2>
          </div>
        </div>

        <div style={{
          backgroundImage: 'url(https://www.foratravel.com/images/destinations/middle-east.webp?w=703&q=90)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} className="relative rounded-2xl sm:rounded-none w-full h-96 card cursor-pointer group">
          {/* Image */}
          {/* <img src="https://www.foratravel.com/images/destinations/asia.webp?w=703&q=90" alt="Background" className="w-full h-auto" /> */}

          {/* Dark overlay */}
          <div className="absolute rounded-2xl sm:rounded-none group-hover:opacity-60 transition-all inset-0 bg-black opacity-50"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h2 className="text-4xl font-bold tracking-wider">Hungary</h2>
          </div>
        </div>





      </div>

    </div>
  )
}
