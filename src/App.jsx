import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import NavBar from './components/NavBar/NavBar'

const fetchCustomerTickets = async() => {
  const res = await fetch("/fakeData.json")
  return res.json();
}

const promisCustomerTickets = fetchCustomerTickets();

function App() {

  const [ticketStatistics, setTicketStatistics] = useState(0);

  return (
    <div className='min-h-screen bg-gray-200 text-base-content'>
      <NavBar></NavBar>
      <Banner ticketStatistics={ticketStatistics}></Banner>
      <div className='mx-4 flex gap-2'>
        <div className='w-4/5'>
          <h2 className='font-extrabold text-2xl'>Customer Tickets</h2>
          <Suspense fallback={<p>Data is loading......</p>}>
            <CustomerTickets ticketStatistics={ticketStatistics} setTicketStatistics={setTicketStatistics} promisCustomerTickets={promisCustomerTickets}></CustomerTickets>
          </Suspense>
        </div>
        <div className='w-1/5'>
          <h2 className='font-extrabold text-2xl'>Task Status</h2>
          <h2 className='font-extrabold text-2xl'>Resolve Task</h2>
        </div>
      </div>
    </div>
  )
}

export default App
