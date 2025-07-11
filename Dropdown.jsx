import React, { useState } from 'react'

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full border border-gray-400 sm:w-32 md:w-52">
                {props.title}
            </button>
            {isOpen && (
                <div className="absolute z-50 w-28 py-2 bg-white  rounded-md shadow-md overflow-y-auto overflow-x-hidden max-h-48 rounded-20 sm:w-32 md:w-52">
                    {props.lang != null && (
                        props.lang.map((item) => (
                            <li  className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}
                            >{item}</li>
                        ))
                    )}

                    {props.tone != null && (
                        props.tone.map((item) => (
                            <li  className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}>{item}</li>
                        ))
                    )}

                    {props.usecase != null && (
                        props.usecase.map((item) => (
                            <li  className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer w-full font-sm text-sm" onClick={toggleDropdown}>{item}</li>
                        ))
                    )}

                    {props.variants != null && (
                        props.variants.map((item) => (
                            <li  className="block px-4 py-2 text-gray-700 hover:bg-gray-300 cursor-pointer font-sm text-sm" onClick={toggleDropdown}>{item}</li>
                        ))
                    )}
                </div>
            )}
        </div>

    )


}

export default Dropdown