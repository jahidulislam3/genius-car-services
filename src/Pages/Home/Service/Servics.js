import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Servics = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <h2>{name} </h2>
            <img className='w-100' src={img} alt="" />
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Servics;