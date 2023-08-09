import React from 'react'
import { useState, useEffect } from 'react'

const Carousel = () => {

    let [index, setIndex] = useState(0)
    const handleNext = ()=> (index + 4 < images.length)? setIndex(index + 4) : setIndex(0)
    const handlePrev = ()=> (index > 0)? setIndex(index - 4) : setIndex(images.length - 4)

    const images = [
        {name: 'Tokyo', url: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/akihabara-iStock-484915982-1024x600.jpg'},
        {name: 'New York', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg'},
        {name: 'Paris', url: 'https://viajes.nationalgeographic.com.es/medio/2022/07/13/paris_37bc088a_1280x720.jpg'},
        {name: 'Seoul', url: 'https://content.r9cdn.net/rimg/dimg/30/0c/6318617a-city-35982-163ff913019.jpg?width=1366&height=768&xhint=2421&yhint=1876&crop=true'},
        {name: 'Madrid', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6a/f5/4c/caption.jpg?w=500&h=300&s=1'},
        {name: 'Amsterdam', url: 'https://img.nh-hotels.net/8yYbq/rEDyJ/original/Netherlands_Houses.jpg?output-quality=70&resize=*:*&background-color=white'},
        {name: 'Venecia', url: 'https://blog-italia.com/wp-content/uploads/2022/11/venecia-italia-viajar.jpg'},
        {name: 'Praga', url: 'https://elviajista.com/wp-content/uploads/2021/04/alojarseenpraga-730x487.jpg'},
        {name: 'Barcelona', url: 'https://media.traveler.es/photos/63838947050e0f92cd80c982/16:9/w_2560%2Cc_limit/GettyImages-1392907424.jpg'},
        {name: 'San Francisco', url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Us-ca-sanfran-goldengate.jpg'},
        {name: 'Montreal', url: 'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx'},
        {name: 'Oporto', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/O_Porto_%28visto_da_Ponte_Dom_Luis_I%29.jpg/800px-O_Porto_%28visto_da_Ponte_Dom_Luis_I%29.jpg'},
    ]
    const image = images[index].url
    const image2 = images[index + 1].url
    const image3 = images[index + 2].url
    const image4 = images[index + 3].url

    const name = images[index].name
    const name2 = images[index + 1].name
    const name3 = images[index + 2].name
    const name4 = images[index + 3].name

    useEffect(
        () => {
          setInterval(()=>{
            handleNext()
          }, 3000);
    
          return () => {
    
          }
        },
        [index]
    )

    return (
        <>
            <div className='min-h-[60vh]'>
                <div className='md:mx-20 h-[70vh] grid grid-cols-2 grid-rows-2 '>
                <a className='block group relative'>
                    <img className='absolute inset-0 object-cover object-center h-full w-full' src={image} alt=""/>
                    <div className='relative p-4 sm:p-6 lg:p-8'>
                    <p className="text-xl text-center font-bold text-white sm:text-2xl">{name}</p>
                    </div>
                </a>
                <a className='block group relative'>
                    <img className='absolute inset-0 object-cover object-center h-full w-full' src={image2} alt=""/>
                    <div className='relative p-4 sm:p-6 lg:p-8'>
                    <p className="text-xl text-center font-bold text-white sm:text-2xl">{name2}</p>
                    </div>
                </a>
                <a className='block group relative'>
                    <img className='absolute inset-0 object-cover object-center h-full w-full' src={image3} alt=""/>
                    <div className='relative p-4 sm:p-6 lg:p-8'>
                    <p className="text-xl text-center font-bold text-white sm:text-2xl">{name3}</p>
                    </div>
                </a>
                <a className='block group relative'>
                    <img className='absolute inset-0 object-cover object-center h-full w-full' src={image4} alt=""/>
                    <div className='relative p-4 sm:p-6 lg:p-8'>
                    <p className="text-xl text-center font-bold text-white sm:text-2xl">{name4}</p>
                    </div>
                </a>
                </div>
                <div className='flex justify-center my-2'>
                <button className='btn btn-accent m-1' onClick={handleNext}>Prev</button>
                <button className='btn btn-accent m-1' onClick={handlePrev}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Carousel