import React from 'react';
import chair from '../../assets/images/xbanner_img.png.pagespeed.ic.MLXiW6RElW.webp';
import poster from '../../assets/images/xbanner_bg.png.pagespeed.ic.8IoVZluPew.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Navbar from '../Shared/Navbar';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div style={{
            background: `url(${poster})`,
            width: '100%'
         }} className="lg:h-[650px] xl:h-[806px]">
            <Navbar></Navbar>
        <div className="w-full mb-10 px-4 xl:mb-52" >
            <div className="flex justify-center items-center flex-wrap lg:flex-row-reverse mt-10 lg:mt-28 xl:mt-36">
                <img className="lg:h-[400px]" src={chair} alt='Dentist Chair' />
                <div className='mt-8'>
                    <DayPicker className="md:pr-14"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>

        </div>
        </div>
    );
};

export default AppointmentBanner;