import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [formType, setFormType] = useState('');
    const [selectedEndpoint, setSelectedEndpoint] = useState("");
    const [categories, setCategories] = useState([]);
    const [result, setResult] = useState([]);

    const [product, setProduct] = useState({
        url: '',
        status: '',
        title: '',
        cost: ''
    });

    const [category, setCategory] = useState({
        url: '',
        title: '',
        product: ''
    });

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5001/top_categories/');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        setResult(categories);
    }, [categories]);

    console.log(result);
    
    // Show WoodenProducts details for a specific category
    const showWoodenProducts = () => {
        const woodenCategory = categories.find(category => category.id === '2'); // Assuming id '2' for WoodenProducts
        if (woodenCategory) {
            console.log("Wooden Products:", woodenCategory.WoodenProducts);
        }
    };

    useEffect(() => {
        showWoodenProducts();
    }, [categories]);

    const handleProductSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/Featured_Products', product);
            if (response.status === 201) {
                console.log('Product added successfully');
                setProduct({ url: '', status: '', title: '', cost: '' });
            } else {
                console.error('Error adding product');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/top_categories', category);
            if (response.status === 201) {
                console.log('Category added successfully');
                setCategory({ url: '', title: '', product: '' });
            } else {
                console.error('Error adding category');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Admin</h1>

            <div className="mb-6">
                <button
                    onClick={() => setFormType('categories')}
                    className={`bg-blue-500 text-white py-2 px-4 rounded mr-2 ${formType === 'categories' ? 'bg-blue-600' : 'hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                >
                    Add Categories
                </button>
                <button
                    onClick={() => setFormType('products')}
                    className={`bg-green-500 text-white py-2 px-4 rounded ${formType === 'products' ? 'bg-green-600' : 'hover:bg-green-600'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50`}
                >
                    Add Products
                </button>
            </div>

            {formType === 'categories' && (
                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Add Category</h2>
                    <select
                        value={selectedEndpoint}
                        onChange={(e) => setSelectedEndpoint(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    >
                        <option value="">Select Category</option>
                        <option value="WingProducts">WingProducts</option>
                        <option value="WoodenProducts">WoodenProducts</option>
                        <option value="DeskProducts">DeskProducts</option>
                        <option value="ParkProducts">ParkProducts</option>
                        <option value="RoomProducts">RoomProducts</option>
                        <option value="ScenicProducts">ScenicProducts</option>
                        <option value="BeautifulProducts">BeautifulProducts</option>
                    </select>
                    <form onSubmit={handleCategorySubmit}>
                        <input
                            type="text"
                            name="url"
                            placeholder="Category URL"
                            value={category.url}
                            onChange={(e) => setCategory({ ...category, url: e.target.value })}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Category Title"
                            value={category.title}
                            onChange={(e) => setCategory({ ...category, title: e.target.value })}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="product"
                            placeholder="Number of Products"
                            value={category.product}
                            onChange={(e) => setCategory({ ...category, product: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Add Category
                        </button>
                    </form>
                </div>
            )}

            {formType === 'products' && (
                <div className="bg-white p-6 rounded shadow-lg mt-6">
                    <h2 className="text-xl font-semibold mb-4">Add Product</h2>
                    <form onSubmit={handleProductSubmit}>
                        <input
                            type="text"
                            name="url"
                            placeholder="Product URL"
                            value={product.url}
                            onChange={(e) => setProduct({ ...product, url: e.target.value })}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="status"
                            placeholder="Product Status"
                            value={product.status}
                            onChange={(e) => setProduct({ ...product, status: e.target.value })}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Product Title"
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="cost"
                            placeholder="Product Cost"
                            value={product.cost}
                            onChange={(e) => setProduct({ ...product, cost: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                            Add Product
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Admin;
