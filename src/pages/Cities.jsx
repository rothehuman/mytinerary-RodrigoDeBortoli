import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_cities, filter_cities } from '../store/actions/cityActions';


const Cities = () => {
    const cities = useSelector((store)=> store.cityReducer.cities)

    const dispatch = useDispatch();

    let inputSearch = useRef();

    useEffect(()=> {
        dispatch(get_cities())
    }, []);

    const handleSearch = () => {
        dispatch(filter_cities({
            name: inputSearch.current.value
        }))
    }
    
    return (
        <div className='flex flex-col items-center text-center'>
            <div className='flex'>
                <input ref = {inputSearch} className='border-2 border-gray-700 rounded-md py-1 px-2' type="text" placeholder='Search'/>
                <button onClick={handleSearch} className='btn m-2'>Search</button>
            </div>

            <h2 className='text-3xl my-4'>Cities</h2>
            <div className='flex flex-wrap items-center mx-3'>
                {   
                cities.length > 0
                ?   cities?.map((city) => {
                        return (
                            <Link key={city._id} to={`/cities/${city._id}`}>
                                <Card name={city.name} country={city.country} url={city.url}/>
                            </Link>
                        )
                    })
                :   <h2 className='m-3'>No cities found</h2>
                }
            </div>
        </div>
    )
}

export default Cities

