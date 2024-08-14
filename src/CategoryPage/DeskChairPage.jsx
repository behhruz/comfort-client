import React, { useEffect, useState } from 'react';

const DeskChairPage = () => {
    const [deskChair, setDeskChair] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/top_categories/3') // JSON serverdan ma'lumot olish
            .then(response => response.json())
            .then(data => setDeskChair(data));
    }, []);

    return (
        <div>
            {deskChair ? (
                <>
                    <h1>{deskChair.title}</h1>
                    <p>{deskChair.product}</p>
                    <div>
                        {deskChair.DeskProducts && deskChair.DeskProducts.map(product => (
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

export default DeskChairPage;
