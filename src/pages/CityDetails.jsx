import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
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

    console.log(city)

    return (
        <div className='flex flex-row items-center text-center'>

            <h2 className='text-3xl my-4'>dd</h2>

            <Link key={city._id} to={`/cities`}>
                <Card name={city.name} country={city.country} url={city.url}/>
            </Link>
        </div>
    )
}

export default CityDetails