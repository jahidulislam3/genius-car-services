import React, { useEffect, useState } from 'react';
import Servics from '../Service/Servics';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services'>
            <h2 className=' text-primary text-center mt-5'>Our Services</h2>
            <div className='services-container'>
                {
                    services.map(service => <Servics
                        key={service._id}
                        service={service}
                    ></Servics>)
                }
            </div>
        </div>
    );
};

export default Services;