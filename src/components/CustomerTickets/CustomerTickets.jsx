import React, { use } from 'react';
import CustomerTicketCard from '../CustomerTicketCard/CustomerTicketCard';

const CustomerTickets = ({promisCustomerTickets, ticketStatistics, setTicketStatistics, taskClicked, setTaskClicked}) => {
    const ticketsDatas = use(promisCustomerTickets);
    // console.log(ticketsDatas)
    return (
        <div className='grid grid-cols-2 gap-2 mt-2'>
            {
                ticketsDatas.map(data => <CustomerTicketCard
                    taskClicked={taskClicked}
                    setTaskClicked={setTaskClicked}
                    ticketStatistics={ticketStatistics} 
                    setTicketStatistics={setTicketStatistics} 
                    key={data.id} 
                    data={data}></CustomerTicketCard>)
            }
        </div>
    );
};

export default CustomerTickets;