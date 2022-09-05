import React from 'react';
import blood_donate from '../../assets/images/blood_donate.png';
import blood from '../../assets/images/bdr.png';
import Contact from '../Home/Contact';
import Footer from '../Shared/Footer';

const BloodBank = () => {
    return (
        <div>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold"> Every blood donor is a lifesaver. Donate Blood to Save Life...</h1>

                        <p className="py-6">It is said that blood is one of the most priceless gifts one can give to another.
                            Blood is essential for a person to stay alive. Many times due to accidents or any other serious ailments,
                            a person might require blood. And in those times, people who step up to donate their blood are real-life
                            superheroes. </p>

                    </div>
                    <img src={blood_donate} className="max-w-sm rounded-lg" />
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse mt-16 mb-16">
                    <div>
                        <h1 className="text-4xl font-bold text-sky-400/100 text-center capitalize italic font-medium">"Donate Your Blood to Us, Save More Life Together"</h1>
                        <h3 className=" text-right text-2xl" >-Jhon Doe</h3>

                    </div>

                </div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={blood} className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold"> The blood is red gold in the time of saving a life...</h1>

                        <p className="py-6">World Blood Donor Day is celebrated on 14 June every year with an aim to spread awareness and seek attention to the importance of blood donation. It also aims to educate
                         people on the need for safe blood and blood products for the purpose of transfusion.   </p>

                    </div>
                    
                </div>
                <h1 className=" text-3xl font-bold text-sky-400/100 text-center">Blood Donar's List</h1>
                <div class="bg-cyan flex justify-center items-center mb-20 mt-10">
                    <table class="w-full overflow-hidden shadow-2xl font-[Poppins] border-2 border-cyan-200 rounded-[12px] ">
                        <thead>
                            <tr class=" text-center text-white hover:bg-red-600 bg-red-500 cursor-pointer duration-300">
                                <th class=" py-3 ">Serial No</th>
                                <th class=" py-3 ">Donar Name</th>
                                <th class=" py-3 ">Phone Number</th>
                                <th class=" py-3">Blood Group</th>
                                <th class=" py-3">Location</th>
                            </tr>
                        </thead>
                        <tbody class="text-black text-center">
                            <tr class="hover:bg-red-300 hover:scale-105 bg-red-50 cursor-pointer duration-300">
                                <td class="py-3 px-6">1</td>
                                <td class="py-3 px-6">Sazzadur Rahman</td>
                                <td class="py-3 px-6">01734565833</td>
                                <td class="py-3 px-6">"B+"(Positive)</td>
                                <td class="py-3 px-6">Rampura, Budda</td>
                            </tr>
                            <tr class="hover:bg-red-300 bg-red-50 hover:scale-105 cursor-pointer duration-300">
                                <td class="py-3 px-6">2</td>
                                <td class="py-3 px-6">Abdur Rahman</td>
                                <td class="py-3 px-6">01734365673</td>
                                <td class="py-3 px-6">"A+"(Positive)</td>
                                <td class="py-3 px-6">Mirpur, Dhaka</td>
                            </tr>
                            <tr class="hover:bg-red-300 bg-red-50 hover:scale-105 cursor-pointer duration-300">
                                <td class="py-3 px-6">3</td>
                                <td class="py-3 px-6">Mr. Pranta</td>
                                <td class="py-3 px-6">01734567381</td>
                                <td class="py-3 px-6">"A+"(Positive)</td>
                                <td class="py-3 px-6">Uttara, Dhaka</td>
                            </tr>
                            <tr class="hover:bg-red-300 bg-red-50 hover:scale-105 cursor-pointer duration-300">
                                <td class="py-3 px-6">4</td>
                                <td class="py-3 px-6">Mr. Khabbab</td>
                                <td class="py-3 px-6">01734567381</td>
                                <td class="py-3 px-6">"O+"(Positive)</td>
                                <td class="py-3 px-6"> Puran Dhaka</td>
                            </tr>
                            <tr class="hover:bg-red-300 bg-red-50 hover:scale-105 cursor-pointer duration-300">
                                <td class="py-3 px-6">5</td>
                                <td class="py-3 px-6">Mr. Sojib</td>
                                <td class="py-3 px-6">01734567381</td>
                                <td class="py-3 px-6">"O-"(Negative)</td>
                                <td class="py-3 px-6">Mirpur, Dhaka</td>
                            </tr>
                            <tr class="hover:bg-red-300 bg-red-50 hover:scale-105 cursor-pointer duration-300">
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

                <div class="w-full mb-20 bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
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