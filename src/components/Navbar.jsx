import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../public/assets/check 1.png';
import info from '../../public/assets/info.png';
import logo from '../../public/assets/logo.png';
import search from '../../public/assets/search.png';
import shop from '../../public/assets/shop.png';
import login from '../../public/assets/login.png';

const HeartIcon = () => (
    <svg
        className="w-6 h-6 fill-current text-gray-500 hover:text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

const Navbar = ({ setShowLogin, loggedInUser, setLoggedInUser }) => {
    const [selectedOption, setSelectedOption] = useState('Eng');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
const handleLoginClickk =()=>{
    navigate('/');

}
    useEffect(() => {
        // Load logged-in user from localStorage on component mount
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(user); // Update the `loggedInUser` state
        }
    }, [setLoggedInUser]);

    const handleLoginClick = () => {
        const user = { name: 'Login none' }; // O'zgartiring, haqiqiy foydalanuvchi ma'lumotlarini kiriting
        setLoggedInUser(user.name); // `props` orqali olingan `setLoggedInUser` ni chaqiramiz
        localStorage.setItem('loggedInUser', user.name); // Foydalanuvchi ma'lumotlarini localStorage ga saqlaymiz
        navigate('/comments');
        setShowLogin(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null); // `props` orqali olingan `setLoggedInUser` ni chaqiramiz
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            {/* Top Bar */}
            <div className='flex bg-[#272343] pt-3 pb-3 justify-between px-32'>
                <div className='flex items-center gap-2'>
                    <img src={img} alt="Free shipping" />
                    <p className='font-inter text-xs font-normal leading-4 text-[#F0F2F3] cursor-pointer'>
                        Free shipping on all orders over $50
                    </p>
                </div>
                <div className='flex items-center gap-6'>
                    <select
                        onChange={handleChange}
                        value={selectedOption}
                        className="bg-transparent text-[#F0F2F3] focus:outline-none"
                    >
                        <option value="Eng" style={{ backgroundColor: '#2B2D2F', color: '#F0F2F3' }}>Eng</option>
                        <option value="Uzb" style={{ backgroundColor: '#2B2D2F', color: '#F0F2F3' }}>Uzb</option>
                        <option value="Rus" style={{ backgroundColor: '#2B2D2F', color: '#F0F2F3' }}>Rus</option>
                    </select>
                    <p className='font-inter text-xs font-normal leading-4 text-center text-[#f0f2f3] cursor-pointer'>
                        Faqs
                    </p>
                    <div className='flex items-center gap-1.5'>
                        <img src={info} alt="Info" />
                        <p className='font-inter text-xs font-normal leading-4 text-center text-[#f0f2f3] cursor-pointer'>
                            Need Help
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className='flex items-center w-full bg-[#F0F2F3] py-5 px-36 justify-between'>
                <div>
                    <Link to="/" className='flex items-center gap-2'>
                        <img src={logo} alt="Logo" />
                        <p className='font-inter text-2xl font-medium leading-8 text-left text-[#272343]'>
                            Comforty
                        </p>
                    </Link>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-[413px] pl-4 py-3 border border-transparent bg-white rounded-[5px] focus:outline-none focus:placeholder:text-[#9A9CAA] placeholder:text-[#9A9CAA] text-[#9A9CAA] font-inter text-base font-normal leading-6 text-left"
                    />
                    <img
                        src={search}
                        alt="Search"
                        className="absolute left-[91%] top-1/2 transform -translate-y-1/2"
                    />
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center p-3 bg-white rounded-lg gap-2'>
                        <button className='flex items-center gap-3' onClick={handleLoginClickk}>
                            <img src={shop} alt="Cart" />
                            <p className='font-bold text-cm leading-4 text-center text-[#4e4e4f]'>
                                Cart
                            </p>
                        </button>
                    </div>
                    <div className='flex items-center p-3 bg-white rounded-lg'>
                        <HeartIcon />
                    </div>
                    <div className='flex items-center p-3 h-12 bg-white rounded-lg'>
                        {!loggedInUser ? (
                            <button type='button' onClick={handleLoginClick} >
                                <img src={login} alt="Login" />
                            </button>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <p className='flex items-center '>/ {loggedInUser}</p>
                                <button onClick={handleLogout} className='bg-red-500 text-white px-3 py-1 rounded'>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className='flex items-center py-[14px] px-[210px] bg-white justify-between overflow-x-auto'>
                <div className='flex items-center gap-8'>
                    <nav className='relative border p-3 rounded-xl'>
                        <div className='mr-auto'>
                            <button
                                onClick={toggleDropdown}
                                className='bg-transparent border-none text-[14px] cursor-pointer'
                            >
                                &#9776; All Categories
                            </button>
                            {dropdownOpen && (
                                <div className='absolute top-full left-0 bg-white shadow-lg p-2 rounded-md z-10'>
                                    <Link to="#category1" className='block py-1 px-2 text-black no-underline hover:text-[#007bff]'>
                                        Category 1
                                    </Link>
                                    <Link to="#category2" className='block py-1 px-2 text-black no-underline hover:text-[#007bff]'>
                                        Category 2
                                    </Link>
                                    <Link to="#category3" className='block py-1 px-2 text-black no-underline hover:text-[#007bff]'>
                                        Category 3
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                    <div className='flex gap-5 ml-5'>
                        <Link to="#home" className='text-black font-inter text-[14px] font-medium leading-[15.4px] text-left hover:text-[#007bff] no-underline'>Home</Link>
                        <Link to="#shop" className='text-black font-inter text-[14px] font-medium leading-[15.4px] text-left hover:text-[#007bff] no-underline'>Shop</Link>
                        <Link to="#product" className='text-black font-inter text-[14px] font-medium leading-[15.4px] text-left hover:text-[#007bff] no-underline'>Product</Link>
                        <Link to="#pages" className='text-black font-inter text-[14px] font-medium leading-[15.4px] text-left hover:text-[#007bff] no-underline'>Pages</Link>
                        <Link to="#about" className='text-black font-inter text-[14px] font-medium leading-[15.4px] text-left hover:text-[#007bff] no-underline'>About</Link>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='font-inter text-sm font-normal leading-[15.4px] text-[#636270] text-left'>Contact: </p>
                    <p className='font-inter text-sm font-medium leading-[15.4px] text-[#272343] text-left'>(808) 555-0111</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
