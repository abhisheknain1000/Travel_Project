import Image from 'next/image';
import React from 'react'
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
<h1 className="font-bold bold-52 lg:bold-88">Raazveer Base Camp Area</h1>
<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] gap-5 ">we want to be on each of your journey seeking the satisfaction of seeing your incorruptable beauty of nature. we can help you to see the world nature with just one app</p>


<div className='my-11 flex flex-wrap gap-5'>
  <div className='flex items-center gap-2'>
  {Array(5).fill(1).map((_, index) => {
    return (
        <Image
        key={index}
          src="/star.svg"
          alt="star"
          width={24}
          height={24}
        />
    );
  })}
  </div>
  
  <p className='bold-16 lg:bold-20 text-blue-70'>198k
    <span className='regular-16 lg:regular-20 ml-1 text-blue-400 underline cursor-wait'>Excellent Reviews</span>
  </p>

  <div className='flex flex-col sm:flex-row w-full gap-4 '>
    <Button
    type="button"
    title='download app'
    variant="btn_green"
    />
    <Button
    type="button"
    title='How work this app'
    variant="btn_white_text"
    icon="/play.svg"
    />
  </div>

  <div className="relative flex flex-1 items-start">
<div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-9 py-9 mt-12 ">
<div className="flex flex-col">
<div className="flexBetween">
<p className="regular-16 text-gray-20">Location</p>
<Image src="/close.svg" alt="close" width={24} height={24} />
</div>
<p className="bold-20 text-white">Noida </p>
</div>

<div className="flexBetween">
<div className="flex flex-col">
<p className="regular-16 block text-gray-20">Distance</p>
<p className="bold-20 text-white">173.28 mi</p>
</div>
<div className="flex flex-col">
<p className="regular-16 block text-gray-20">Elevation</p>
<p className="bold-20 text-white">20.02 km</p>
</div>

  </div>
 </div>
 </div>
</div>
</div>
<div className="hero-map mt-48"/>
    </section>
  )
}
export default Hero;