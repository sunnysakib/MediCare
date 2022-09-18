import React from 'react';
import blood_donate from '../../assets/images/blood_donate.png';
import blood from '../../assets/images/bdr.png';
import lacation from '../../assets/images/localisation 1.png';
import lacation1 from '../../assets/images/connect 1.png';
import lacation2 from '../../assets/images/emergency 1.png';
import lacation3 from '../../assets/images/savelife 1.png';
import Contact from '../Home/Contact';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import './BloodBank.css'

const BloodBank = () => {
    return (
        // max-w-7xl mx-auto px-12
        <div>
             
            <div className="">
                
                <div className="bloodHeader">
                <Navbar navbarType="banner"></Navbar>
                <div className="flex justify-center h-3/4 items-center">
                    <div className="flex justify-center flex-col items-center">
                        <p className="text-white text-7xl">Save Life Connect</p>
                        <p className="text-white text-2xl my-4">Connecting blood donors with recipients</p>
                        <button className="btn btn-wide bloodBtn">Explore For Blood</button>
                    </div>
                </div>
                </div>
                <div className="flex justify-center flex-col items-center mt-44">
                    <p className="text-secondary font-semibold text-5xl">Join the Cause</p>
                    <p className="text-2xl text-accent my-4 w-2/5 text-center" >Join our cause and help us save more lives. Everyone should have the right to get a blood transfusion.</p>
                </div>
                
                <div className="flex justify-center items-center max-w-7xl mx-auto px-12 w-full bloodInfo">
                    <div className=" w-1/2">
                        <p className="text-accent font-semibold text-3xl ">Find Donors in your Area</p>
                        <p className="text-accent text-xm mt-3">Get connected in a matter of minutes at zero cost. Our App ships with a smart system that finds the closest blood donors.
                        Our automated blood donation system works efficiently whenever someone needs a blood transfusion.</p>
                    </div>
                    <div className=" flex justify-center w-1/2">
                        <img src={lacation} alt="" style={{
                            height: "410px"
                        }} />
                    </div>
                </div>
                

                <div className="flex justify-center items-center max-w-7xl mx-auto px-12 w-full bloodInfo">
                    <div className=" flex justify-center w-1/2">
                        <img src={lacation1} alt="" style={{
                            height: "410px"
                        }} />
                    </div>
                    <div className=" w-1/2">
                        <p className="text-accent font-semibold text-3xl ">Answer to Emergencies</p>
                        <p className="text-accent text-xm mt-3">As soon as a new blood request is raised, it is routed among our local volunteer blood donors. We know time matters! So we keep you updated with real-time notifications sent directly to you via SMS (text message) or the installed mobile app</p>
                    </div>
                </div>

                <div className="flex justify-center items-center max-w-7xl mx-auto px-12 w-full bloodInfo">
                    <div className=" w-1/2">
                        <p className="text-accent font-semibold text-3xl ">Made for Everyone</p>
                        <p className="text-accent text-xm mt-3">All you need to do is send a text message to 8655, "blood need (blood-group) in (your-city)", in any language you want. Our system is smart enough to understand anything you write and helps you find a donor within minutes if not seconds</p>
                    </div>
                    <div className=" flex justify-center w-1/2">
                        <img src={lacation2} alt="" style={{
                            height: "410px"
                        }} />
                    </div>
                </div>

                <div className="flex justify-center items-center max-w-7xl mx-auto px-12 w-full bloodInfo">
                    <div className=" flex justify-center w-1/2">
                        <img src={lacation3} alt="" style={{
                            height: "410px"
                        }} />
                    </div>
                    <div className=" w-1/2">
                        <p className="text-accent font-semibold text-3xl ">You are someone's Hero</p>
                        <p className="text-accent text-xm mt-3">In as little as few minutes, you can become someone's unnamed, unknown, but all-important Hero. Saving a life is a noble work that starts very simply and easily. Donate Blood or donate Money, every form of contribution you make is important, valued and essential in our shared mission to save lives.</p>
                    </div>
                </div>
                
                <div className="hero-content flex-col lg:flex-row-reverse my-28 mb-16 max-w-7xl mx-auto px-12">
                    <div>
                        <h1 className="text-4xl font-bold text-secondary text-center capitalize italic font-medium">"Donate Your Blood to Us, Save More Life Together"</h1>
                        <h3 className=" text-right text-2xl" >-Jhon Doe</h3>

                    </div>

                </div>
                <h1 className=" text-3xl font-bold text-accent text-center">Blood Donar's List</h1>
                <div class="bg-cyan flex justify-center items-center mb-20 mt-10 max-w-7xl mx-auto px-12">
                    <table class="w-full overflow-hidden font-[Poppins] border-2 border-cyan-200 rounded-[12px] ">
                        <thead>
                            <tr class=" text-center text-white hover:bg-secondary bg-secondary cursor-pointer duration-300">
                                <th class=" py-3 ">Serial No</th>
                                <th class=" py-3 ">Donar Name</th>
                                <th class=" py-3 ">Phone Number</th>
                                <th class=" py-3">Blood Group</th>
                                <th class=" py-3">Location</th>
                            </tr>
                        </thead>
                        <tbody class="text-black text-center">
                            <tr class=" bg-third cursor-pointer duration-300">
                                <td class="py-3 px-6">1</td>
                                <td class="py-3 px-6">Sazzadur Rahman</td>
                                <td class="py-3 px-6">01734565833</td>
                                <td class="py-3 px-6">"B+"(Positive)</td>
                                <td class="py-3 px-6">Rampura, Budda</td>
                            </tr>
                            <tr class="bg-third cursor-pointer duration-300">
                                <td class="py-3 px-6">2</td>
                                <td class="py-3 px-6">Abdur Rahman</td>
                                <td class="py-3 px-6">01734365673</td>
                                <td class="py-3 px-6">"A+"(Positive)</td>
                                <td class="py-3 px-6">Mirpur, Dhaka</td>
                            </tr>
                            <tr class="bg-third cursor-pointer duration-300">
                                <td class="py-3 px-6">3</td>
                                <td class="py-3 px-6">Mr. Pranta</td>
                                <td class="py-3 px-6">01734567381</td>
                                <td class="py-3 px-6">"A+"(Positive)</td>
                                <td class="py-3 px-6">Uttara, Dhaka</td>
                            </tr>
                            <tr class="bg-thirdcursor-pointer duration-300">
                                <td class="py-3 px-6">4</td>
                                <td class="py-3 px-6">Mr. Khabbab</td>
                                <td class="py-3 px-6">01734567381</td>
                                <td class="py-3 px-6">"O+"(Positive)</td>
                                <td class="py-3 px-6"> Puran Dhaka</td>
                            </tr>
                            <tr class="bg-third cursor-pointer duration-300">
                                <td class="py-3 px-6">5</td>
                                <td class="py-3 px-6">Mr. Sojib</td>
                                <td class="py-3 px-6">01734567381</td>
                                <td class="py-3 px-6">"O-"(Negative)</td>
                                <td class="py-3 px-6">Mirpur, Dhaka</td>
                            </tr>
                            <tr class="bg-third cursor-pointer duration-300">
                                <td class="py-3 px-6">6</td>
                                <td class="py-3 px-6">Mr. Shuvo</td>
                                <td class="py-3 px-6">01734567381</td>
                                <td class="py-3 px-6">"B+"(Positive)</td>
                                <td class="py-3 px-6"> Aftabnagar, Dhaka</td>


                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>

                <div class="w-full mb-20 bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700 max-w-7xl mx-auto px-12">
                    <div class="sm:hidden">
                        <label for="tabs" class="sr-only">Select tab</label>
                        <select id="tabs" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 sm:text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Statistics</option>
                            <option>Services</option>
                            <option>FAQ</option>
                        </select>
                    </div>
                    <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                        <li class="w-full">
                            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block p-4 w-full bg-gray-50 rounded-tl-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">Statistics</button>
                        </li>
                        <li class="w-full">
                            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="inline-block p-4 w-full bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">Services</button>
                        </li>
                        <li class="w-full">
                            <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block p-4 w-full bg-gray-50 rounded-tr-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">FAQ</button>
                        </li>
                    </ul>
                    <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
                        <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                            <dl class="grid grid-cols-2 gap-8 p-4 mx-auto max-w-screen-xl text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                                <div class="flex flex-col justify-center items-center">
                                    <dt class="mb-2 text-3xl font-extrabold">12k+</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">Donar's</dd>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <dt class="mb-2 text-3xl font-extrabold">5k+</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">Public Responses</dd>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">Abroad's Donar</dd>
                                </div>
                                <div class="flex flex-col justify-center items-center">
                                    <dt class="mb-2 text-3xl font-extrabold">7k+</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">Contributors</dd>
                                </div>
                                
                                <div class="flex flex-col justify-center items-center">
                                    <dt class="mb-2 text-3xl font-extrabold">120+</dt>
                                    <dd class="font-light text-gray-500 dark:text-gray-400">Organizations</dd>
                                </div>
                            </dl>
                        </div>
                        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We have donate in the world’s potential</h2>

                            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                                <li class="flex space-x-2">

                                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="font-light leading-tight">Dynamic reports and dashboards</span>
                                </li>
                                <li class="flex space-x-2">

                                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="font-light leading-tight">Blood for everyone</span>
                                </li>
                                <li class="flex space-x-2">

                                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="font-light leading-tight">Blood Donation Campaign</span>
                                </li>
                                <li class="flex space-x-2">

                                    <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="font-light leading-tight">Blood Donation Event</span>
                                </li>
                            </ul>
                        </div>
                        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                                <h2 id="accordion-flush-heading-1">
                                    <button type="button" class="flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                        <span>What is Flowbite?</span>
                                        <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
                                    <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                        <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                    </div>
                                </div>
                                <h2 id="accordion-flush-heading-2">
                                    <button type="button" class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                                        <span>Is there a Figma file available?</span>
                                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                                    <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                    </div>
                                </div>
                                <h2 id="accordion-flush-heading-3">
                                    <button type="button" class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                                        <span>What are the differences between Flowbite and Tailwind UI?</span>
                                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                                    <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                                        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                        <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul class="pl-5 list-disc text-gray-500 dark:text-gray-400">
                                            <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                            <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default BloodBank;