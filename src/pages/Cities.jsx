import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react';

const Cities = () => {
    const [cities, setCities] = useState();

    useEffect(()=> {
        axios.get('http://localhost:7000/api/cities?name=')
            .then(response => setCities(response.data.cities))
            .catch(err => console.log(err))
    }, []);

    const handleInputChange = async (event) => {
        console.log(event.target.value)

        try {
            const response = await axios.get(`http://localhost:7000/api/cities?name=${event.target.value}`)
            setCities(response.data.cities)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='flex flex-col items-center text-center'>

            <input onChange={handleInputChange} className='border-2 border-gray-700 rounded-md py-1 px-2' type="text" placeholder='Search' />

            <h2 className='text-3xl my-4'>Cities</h2>
            <div className='flex flex-wrap items-center mx-3'>
                {
                    cities?.map((city) => {
                        return (
                            <Link key={city._id} to={`/cities/${city._id}`}>
                                <Card name={city.name} country={city.country} url={city.url}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cities

