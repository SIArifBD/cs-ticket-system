import React, { use } from 'react';
import CustomerTicketCard from '../CustomerTicketCard/CustomerTicketCard';

const CustomerTickets = ({promisCustomerTickets}) => {
    const ticketsDatas = use(promisCustomerTickets);
    console.log(ticketsDatas)
    return (
        <div className='grid grid-cols-2 gap-2 mx-4'>
            {
                ticketsDatas.map(data => <CustomerTicketCard key={data.id} data={data}></CustomerTicketCard>)
            }
        </div>
    );
};

export default CustomerTickets;