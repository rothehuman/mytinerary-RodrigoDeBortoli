import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.pinimg.com/474x/ff/bb/be/ffbbbe49bbd63050b3b5761b22d0e300.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">MyTinerary</h1>
                <h2 className="py-6 font-bold">Find your perfect trip, designed by insiders who know and love their cities!</h2>
                <button className="btn btn-accent">Cities</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero