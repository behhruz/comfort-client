import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'
const FeaturedProducts = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        fetch('http://localhost:5001/Featured_Products')
            .then(res => res.json())
            .then(data => setData(data || []))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const currentItems = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="px-12 py-6 m-5">
            <div className="flex items-center flex-nowrap justify-between mb-6 overflow-x-auto">
                <p className="text-2xl font-bold">Featured Products</p>
                <div className="pagination flex items-center gap-2 m-3">
                    <button
                        className=" px-4 py-2 rounded-full text-xl bg-gray-400 hover:bg-green-500 transition-all duration-500 disabled:bg-gray-200 disabled:text-gray-500"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    <span className="px-4 py-2 text-lg font-semibold">{currentPage} of {totalPages}</span>
                    <button
                        className="px-4 py-2 rounded-full text-xl bg-gray-400 hover:bg-green-500  transition-all duration-500 disabled:bg-gray-200 disabled:text-gray-500"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 overflow-x-auto m-4">
                {currentItems.map((product) => (
                    <NavLink
                        key={product.id}
                        to={`/category/${product.id}`}
                        className="div  relative flex flex-col items-center m-4 bg-white rounded-lg shadow-lg overflow-hidden w-64 h-[350px] group transform  hover:transition-colors duration-500"
                    >
                        <img
                            className="w-full h-64 cursor-pointer object-cover"
                            src={product.url}
                            alt={product.title}
                        />
                        {product.status && (
                            <div
                                className={` status absolute top-2 left-2 p-2 text-white rounded-lg ${
                                    product.status.toLowerCase() === 'sales'
                                    ? 'bg-orange-500' 
                                    : 'bg-green-500' 
                                } hidden group-hover:block`} 
                            >
                                {product.status}
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-80">
                            <div className="flex flex-col items-start">
                                <p className="text-black font-bold text-lg ">{product.title}</p>
                                <p className="text-black text-lg font-semibold">{product.cost}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

export default FeaturedProducts;
