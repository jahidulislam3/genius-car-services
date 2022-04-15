import React from 'react';
import expert1 from '../../../picture/experts/expert-1.jpg';
import expert2 from '../../../picture/experts/expert-2.jpg';
import expert3 from '../../../picture/experts/expert-3.jpg';
import expert4 from '../../../picture/experts/expert-4.jpg';
import expert5 from '../../../picture/experts/expert-5.jpg';
import expert6 from '../../../picture/experts/expert-6.png';
import Expart from '../Expart/Expart';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Chris Rock', img: expert2 },
    { id: 3, name: 'Dwayne Rock', img: expert3 },
    { id: 4, name: 'Messy Vai', img: expert4 },
    { id: 5, name: 'H.M. Mohsin', img: expert5 },
    { id: 6, name: 'Jahidul Vai', img: expert6 }
]
const Exparts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-center text-primary mt-5'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;