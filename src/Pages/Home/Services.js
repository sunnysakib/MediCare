import React from 'react';
import treatment from '../../assets/images/treatment1.png';
import diagnosis from '../../assets/images/Diagnosis.png';
import ambulanceService from '../../assets/images/ambulanceService.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Best Doctor',
            description: 'We provide best Doctor for insure your happy health',
            img: treatment
        },
        {
            _id: 2,
            name: 'blood',
            description: 'Search blood donors and contact. Supporters can make meaningful donations instantly from their phone.',
            img: diagnosis
        },
        {
            _id: 3,
            name: 'Ambulance',
            description: 'Search Ambulace for 24 hours and pick on time.',
            img: ambulanceService
        },
    ];
    return (
        <div className=' my-28 max-w-7xl mx-auto px-4 md:my-48 md:px-12'>
            <div className='text-center pb-10'>
                <h3 className='text-secondary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;