import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import ambulancer from '../../assets/images/ambulancer.png';
import mambulance from '../../assets/images/ambulance-mobile .png';
import medicine from '../../assets/images/medicine.png';
import patient from '../../assets/images/patient.png';
import pet from '../../assets/images/pet.png';
import furniture from '../../assets/images/furniture.png';
import Contact from '../Home/Contact';
import Footer from '../Shared/Footer';

const AmbulanceService = () => {
    return (
        <div>
            <div>

                <div className="hero-content flex-col lg:flex-row-reverse mt-10 mb-10">
                    <img src={ambulancer} className="max-w rounded-lg" />
                    <div>
                        <h1 className="text-5xl  font-bold text-sky-400/100  ">Call Ambulance </h1>
                        <p className="py-6">MediCare is a user friendly way to request and call ambulances close to you.</p>
                        <PrimaryButton>Call Ambulance</PrimaryButton>

                    </div>
                </div>
            </div>
            <div>

                <div className="hero-content flex-col lg:flex-row-reverse mt-10 mb-10">

                    <div>
                        <h1 className="text-5xl font-bold text-sky-400/100 text-center">Why We Exist? </h1>
                        <p className="py-6 text-justify">Bangladesh's first, online platform for fast and reliable first point medical attention.
                            With an increasing emphasis on promoting independent living today, having access to the nearest ambulance to you can provide much needed peace
                            of mind in a worst case scenario.</p>
                        <PrimaryButton>Know More</PrimaryButton>


                    </div>
                    <img src={mambulance} className="max-w-sm rounded-lg" />
                </div>
            </div>
            <div>
                <div className="hero-content flex-col lg:flex-row-reverse mt-10 mb-10">

                    <div>
                        <h1 className=" text-5xl font-bold text-sky-400/100 text-center">Know What to Do...</h1>
                        <p className="py-6 text-center text-2xl">Few aspects of better preparation to ease stress for user and faster turn around time, applicable
                            for home, office or other out-of-hospital locations.</p>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class=" max-w-sm mr-10 mb-10">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={medicine} className="max-w-sm rounded-t-lg" />
                        </a>
                        <div class="p-6">
                            
                            <p class="text-black text-base mb-4 font-sans">
                            Gather all medications that the patient is taking in one spot, or have a correct, up to date list of medications available.
                            </p>
                            
                        </div>
                    </div>
                    <div class=" max-w-sm ml-10 mb-10 ">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={patient} className="max-w-sm rounded-t-lg justify-center " />
                        </a>
                        <div class="p-6">
                            
                            <p class="text-black text-base mb-4 font-sans">
                            Wear very loose clothing, most often the the ambulance crew will need to access the patient’s arms, chest and abdomen for examination.
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class=" max-w-sm mr-10 mb-10">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={pet} className="max-w-sm rounded-t-lg" />
                        </a>
                        <div class="p-6">
                            
                            <p class="text-black text-base mb-4 font-sans">
                            If you have a pet, kindly ensure it is secured in a different room, to avoid interference with medical crew and equipment.
                            </p>
                            
                        </div>
                    </div>
                    <div class=" max-w-sm ml-10 mb-10">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={furniture} className="max-w-sm rounded-t-lg" />
                        </a>
                        <div class="p-6">
                            
                            <p class="text-black text-base mb-4 font-sans">
                            If you can, make sure that all furniture is moved out of the way, for the crew to bring their stretcher and equipment
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <h1 className=" text-3xl font-bold text-sky-400/100 text-center">Ambulance List</h1>
            
            <div class="bg-cyan flex justify-center items-center mb-20 mt-10">
                <table class="w-full overflow-hidden shadow-2xl font-[Poppins] border-2 border-cyan-200 rounded-[12px] ">
                    <thead>
                        <tr class=" text-center text-white hover:bg-cyan-600 bg-cyan-500 cursor-pointer duration-300">
                            <th class=" py-3 ">Serial No</th>
                            <th class=" py-3 ">Driver Name</th>
                            <th class=" py-3 ">Phone Number</th>
                            <th class=" py-3">Status</th>
                            <th class=" py-3">Hospital</th>
                        </tr>
                    </thead>
                    <tbody class="text-black text-center">
                        <tr class="hover:bg-cyan-200 hover:scale-105 bg-cyan-100 cursor-pointer duration-300">
                            <td class="py-3 px-6">1</td>
                            <td class="py-3 px-6">Mr. Rahman</td>
                            <td class="py-3 px-6">01734565833</td>
                            <td class="py-3 px-6">Available</td>
                            <td class="py-3 px-6">Appolo Hospital</td>
                        </tr>
                        <tr class="hover:bg-cyan-200 bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                            <td class="py-3 px-6">2</td>
                            <td class="py-3 px-6">Mr. Rahim</td>
                            <td class="py-3 px-6">01734365673</td>
                            <td class="py-3 px-6">Not Available</td>
                            <td class="py-3 px-6">Popular Hospital</td>
                        </tr>
                        <tr class="hover:bg-cyan-200 bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                            <td class="py-3 px-6">3</td>
                            <td class="py-3 px-6">Mr. Pranta</td>
                            <td class="py-3 px-6">01734567381</td>
                            <td class="py-3 px-6">Not Available</td>
                            <td class="py-3 px-6">United Hospital Limited</td>
                        </tr>
                        <tr class="hover:bg-cyan-200 bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                            <td class="py-3 px-6">4</td>
                            <td class="py-3 px-6">Mr. Khabbab</td>
                            <td class="py-3 px-6">01734567381</td>
                            <td class="py-3 px-6">Available</td>
                            <td class="py-3 px-6"> BIRDEM General Hospital</td>
                        </tr>
                        <tr class="hover:bg-cyan-200 bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                            <td class="py-3 px-6">5</td>
                            <td class="py-3 px-6">Mr. Sojib</td>
                            <td class="py-3 px-6">01734567381</td>
                            <td class="py-3 px-6">Available</td>
                            <td class="py-3 px-6">Central Hospital Limited</td>
                        </tr>
                        <tr class="hover:bg-cyan-200 bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                            <td class="py-3 px-6">6</td>
                            <td class="py-3 px-6">Mr. Shuvo</td>
                            <td class="py-3 px-6">01734567381</td>
                            <td class="py-3 px-6">Not Available</td>
                            <td class="py-3 px-6"> LABAID Specialized Hospital</td>


                        </tr>
                    </tbody>
                </table>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default AmbulanceService;