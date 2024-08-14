import React, { useEffect, useState } from 'react';

const DeskChairs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/top_categories/')
      .then(res => res.json())
      .then(data => {
        const deskChairsCategory = data.find(v => v.title === 'Desk Chair');
        setData(deskChairsCategory.DeskProducts)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(data);

  return (
    <div className='flex flex-wrap items-center gap-5 mt-[20px] justify-center'>
      {data.map((v, index) => (
        <div key={index} className='relative flex'>
          <img className=' w-[402px] h-[402px] rounded-[15px]' key={index} src={v.url} alt={`Wing Chair ${index + 1}`} />
          <div className='absolute bottom-0 w-full h-[85px] flex items-center justify-center text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}>
              <div className='text-center'>
                <p className='mb-1'>{v.title}</p>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default DeskChairs;
