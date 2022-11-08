import React from 'react';

const AllReview = ({ review }) => {
    const { _id, serviceId, name, img, email, message } = review
    return (
        <div className="w-full">
            <div className="bg-white p-6 shadow">
                <div className="flex items-center border-b border-gray-200 pb-6">
                    <img src={img} className="w-12 h-12 rounded-full" alt='' />
                    <div className="flex items-start justify-between w-full">
                        <div className="pl-3 w-full">
                            <p className="text-xl font-medium leading-5 text-gray-800">{name}</p>
                            <p className="text-sm leading-normal pt-2 text-gray-500">{email}</p>
                        </div>
                        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="px-2">
                    <p className="text-sm leading-5 py-4 text-gray-600">
                        {message}
                    </p>
                    <div className="flex">
                        <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                        <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReview;