import React, { useEffect, useState } from 'react';

const ParkChairPage = () => {
    const [parkChair, setParkChair] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/top_categories/4') // JSON serverdan ParkChair ma'lumotlarini olish
            .then(response => response.json())
            .then(data => setParkChair(data));
    }, []);

    return (
        <div>
            {parkChair ? (
                <>
                    <h1>{parkChair.title}</h1>
                    <p>{parkChair.description}</p>
                    <div>
                        {parkChair.products && parkChair.products.map(product => (
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

export default ParkChairPage;
