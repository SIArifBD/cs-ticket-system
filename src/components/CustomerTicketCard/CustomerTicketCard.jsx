import React from 'react';

const CustomerTicketCard = ({data}) => {
    return (
        <div className='border-2 py-2 px-4 mt-2 bg-white rounded-xl'>
            <div className='flex justify-between'>
                <h2>{data.title}</h2>
                <span>{data.status}</span>
            </div>
            <p>{data.description}</p>
            <div className='flex justify-between'>
                <div className='flex gap-1'>
                    <p>#{data.id}</p>
                    <h2>{data.priority}</h2>
                </div>
                <div className='flex gap-1'>
                    <p>{data.customer}</p>
                    <p>{data.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicketCard;