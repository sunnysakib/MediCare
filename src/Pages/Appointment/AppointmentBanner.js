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
            height: '806px'
         }}>
            <Navbar></Navbar>
        <div className="w-full mb-52" >
            <div className="flex justify-center items-center flex-wrap lg:flex-row-reverse mt-36">
                <img src={chair} className="" alt='Dentist Chair' />
                <div>
                    <DayPicker className="pr-14"
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