import React, { useEffect, useState } from 'react';

const ScenicChairPage = () => {
    const [scenicChair, setScenicChair] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/top_categories/6') // JSON serverdan ma'lumot olish
            .then(response => response.json())
            .then(data => setScenicChair(data));
    }, []);

    return (
        <div>
            {scenicChair ? (
                <>
                    <h1>{scenicChair.title}</h1>
                    <p>{scenicChair.product}</p>
                    <div>
                        {scenicChair.ScenicProsucts && scenicChair.ScenicProsucts.map(product => (
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

export default ScenicChairPage;
