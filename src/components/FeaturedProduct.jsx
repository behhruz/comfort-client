import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const FeaturedProducts = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        fetch('http://localhost:5000/Featured%20Products')
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
        <div className="px-12 py-6">
            <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Featured Products</p>
                <div className="pagination flex items-center gap-2">
                    <button
                        className="px-4 py-2 rounded text-xl bg-gray-400 hover:bg-green-500 transition-colors duration-300"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    <span className="px-4 py-2">{currentPage} of {totalPages}</span>
                    <button
                        className="px-4 py-2 rounded text-xl bg-gray-400 hover:bg-green-500 transition-colors duration-300"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {currentItems.map((product) => (
                    <NavLink
                        key={product.id}
                        to={`/category/${product.id}`}
                        className="relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-60 h-80 group transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            className="w-full h-48 object-cover"
                            src={product.url}
                            alt={product.title}
                        />
                        {product.status && (
                            <div
                                className={`absolute top-2 left-2 p-2 text-white rounded-lg ${product.status === 'Sales'
                                    ? 'bg-orange-500' // Sales orange
                                    : 'bg-green-500'  // New green
                                    } group-hover:block hidden`} // Show on hover
                            >
                                {product.status}
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-80">
                            <div className="flex flex-col items-start">
                                <p className="text-black font-bold text-lg group-hover:text-green-500 transition-colors duration-300">{product.title}</p>
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
