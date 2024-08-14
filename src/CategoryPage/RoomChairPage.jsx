import React, { useEffect, useState } from 'react';

const RoomChairPage = () => {
    const [roomChair, setRoomChair] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/top_categories/5') // JSON serverdan RoomChair ma'lumotlarini olish
            .then(response => response.json())
            .then(data => setRoomChair(data));
    }, []);

    return (
        <div>
            {roomChair ? (
                <>
                    <h1>{roomChair.title}</h1>
                    <p>{roomChair.description}</p>
                    <div>
                        {roomChair.products && roomChair.products.map(product => (
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

export default RoomChairPage;
