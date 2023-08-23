import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
    const { id } = useParams();
    console.log(id)

    const [city, setCity] = useState();

    useEffect (()=> {
        axios.get(`http://localhost:7000/api/cities/${id}`)
            .then(response => setCity(response.data.cities))
            .catch(err => console.log(err))
    }, []);


    return (
        <div className='flex flex-col items-center text-center'>

            <h2 className='text-3xl my-4'>City Details</h2>

            <Link /* key={city._id} */ to={`/cities`}>
                <article
                    className="relative overflow-hidden rounded-lg shadow transition w-screen max-h-[600px] hover:shadow-lg mx-3 my-4"
                >
                    <img
                        alt="Name"/* {city.name} */
                        src="https://americalatina.travel/admin/uploads/Novedades-en-turismo-Ch_novedades1564066376.jpg"/* {city.url} */
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div
                        className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                    >
                        <div className="p-4 sm:p-6">
                            <h3 className="mt-0.5 text-lg text-white">
                                Name{/* {city.name} */}
                            </h3>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                Country{/* {city.country} */}
                            </p>
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default CityDetails