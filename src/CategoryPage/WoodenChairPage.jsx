import React, { useEffect, useState } from 'react';

const WoodenChairPage = () => {
    const [woodenChair, setWoodenChair] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/top_categories/2') // JSON serverdan WoodenChair ma'lumotlarini olish
            .then(response => response.json())
            .then(data => setWoodenChair(data));
    }, []);

    return (
        <div>
            {woodenChair ? (
                <>
                    <h1>{woodenChair.title}</h1>
                    <p>{woodenChair.product}</p>
                    <div>
                        {woodenChair.WoodenProducts && woodenChair.WoodenProducts.map(product => (
                            <div key={product.id}>
                                <h2>{product.title}</h2>
                                <img src={product.url} alt={product.title} style={{ width: '100px', height: '100px' }} />
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

export default WoodenChairPage;
