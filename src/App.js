import { useState } from 'react';
import InputRangeSlider from "./components/input-range";
import ToggleSwitch from "./components/toggle-switch/toggle-switch";

function App() {

    const [price, setPrice] = useState(20);
    const [yearly, setYearly] = useState(false);

    return (
        <div className="container-full flex flex-col w-screen h-screen items-center justify-center px-20">
            <div className="container header-container mb-16 text-center ">
                <h3 className="text-3xl mb-4">Traffic-based Pricing</h3>
                <p className="text-gray-500">Sign Up for Our 30 Day Trial</p>
            </div>

            <div className="container bg-white rounded-xl shadow-lg ">
                <div className="main px-12 py-8">
                    <div className="container flex mb-8">
                        <p className="uppercase font-bold text-gray-400 text-sm flex-1 my-auto">100k Page Views</p>

                        <div className="payment-wrapper flex flex-1 justify-end">
                            <h3 className="text-4xl">${ price }.00</h3>
                            <p className="text-xs text-gray-600 my-auto">/{ yearly ? 'year' : 'month' }</p>
                        </div>
                    </div>

                    <InputRangeSlider price={ price } setPrice={ setPrice } setYearly={ setYearly } />

                    <div className="flex mt-8">
                        <small className="flex-1 text-xs text-gray-600 text-right pr-2 py-1">Monthly Billing</small>
                        <ToggleSwitch id='yearly' checked={ yearly } onToggle={ setYearly } />

                        <small className="flex-1 text-xs text-gray-600 py-1">Yearly Billing
                            <small className="text-xs bg-orange rounded-full text-orange-dark py-1 px-2 ml-1">23% Discount</small>
                        </small>

                    </div>

                </div>

                <hr />

                <div className="footer flex px-12 py-8">
                    <ul className="flex-1 text-xs text-gray-600">
                        <li className="mb-2">Unlimited websites</li>
                        <li className="mb-2">100% data ownership</li>
                        <li>Email reports</li>
                    </ul>

                    <button className="bg-blue-600 rounded-full text-xs text-white my-auto py-2 px-10">Start Trial</button>

                </div>

            </div>

        </div>
    );
}

export default App;
