import React, { useEffect, useState } from 'react';

const BeautifulChairPage = () => {
    const [beautifulChair, setBeautifulChair] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/top_categories/7') // JSON serverdan BeautifulChair ma'lumotlarini olish
            .then(response => response.json())
            .then(data => setBeautifulChair(data));
    }, []);

    return (
        <div>
            {beautifulChair ? (
                <>
                    <h1>{beautifulChair.title}</h1>
                    <p>{beautifulChair.description}</p>
                    <div>
                        {beautifulChair.products && beautifulChair.products.map(product => (
                            <div key={product.id}>
                                <h2>{product.title}</h2>
                                <img src={product.imageUrl} alt={product.title} style={{ width: '100px', height: '100px' }} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BeautifulChairPage;
