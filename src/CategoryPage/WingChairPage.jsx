import React, { useEffect, useState } from 'react';

const WingChairPage = () => {
    const [wingChair, setWingChair] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/top_categories/1') // JSON serverdan ma'lumot olish
            .then(response => response.json())
            .then(data => setWingChair(data));
    }, []);

    return (
        <div>
            {wingChair ? (
                <>
                    <h1>{wingChair.title}</h1>
                    <p>{wingChair.product}</p>
                    <div>
                        {wingChair.WingProsucts && wingChair.WingProsucts.map(product => (
                            <div key={product.id}>
                                <h2>{product.title}</h2>
                                <img src={product.url} alt={product.title} style={{ width: '100px', height: '100px' }} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    );
};

export default WingChairPage;
