import React, { useState } from 'react';
import useTitle from '../../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add-Service')
    const [service, setService] = useState({});

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(service);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...service }
        newUser[field] = value;
        setService(newUser);
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className="bg-cyan-200 px-6 py-4  rounded shadow-lg text-black w-[96%] md:w-[85%] lg:w-[65%] mx-auto">
                    <h1 className="mb-8 text-3xl font-bold text-center">Add Service</h1>
                    <input
                        onBlur={handleInputBlur}
                        type="text"
                        className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                        name="title"
                        placeholder="Title" required />
                    <input
                        onBlur={handleInputBlur}
                        type="number"
                        className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                        name="price"
                        placeholder="Price" required />
                    <input
                        onBlur={handleInputBlur}
                        type="text"
                        className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                        name="photographer"
                        defaultValue={'H Al Hadi'}
                        readOnly
                        placeholder="Photographer" required />

                    <input
                        onBlur={handleInputBlur}
                        type="text"
                        className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                        name="img"
                        placeholder="Banner Image URL" required />
                    <input
                        onBlur={handleInputBlur}
                        type="text"
                        className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                        name="description"
                        placeholder="Description" required />
                    <input
                        onBlur={handleInputBlur}
                        type="text"
                        className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                        name="photographerIMG"
                        defaultValue={'https://i.postimg.cc/GtP6vBJ0/Whats-App-Image-2022-11-08-at-5-45-52-PM.jpg'}
                        readOnly
                        placeholder="Photographer Image URL" required />
                    <input
                        onBlur={handleInputBlur}
                        type="number"
                        className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                        name="ratings"
                        defaultValue={'4.5'}
                        readOnly
                        placeholder="Ratings" required />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded text-white font-bold bg-green-600 hover:bg-green-800 focus:outline-none my-1"
                    >Add Service</button>

                </form>
            </div>
        </div>
    );
};

export default AddService;