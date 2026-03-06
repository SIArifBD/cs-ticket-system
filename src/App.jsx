import { Suspense } from 'react'
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

  return (
    <div className='min-h-screen bg-gray-100 text-base-content'>
      <NavBar></NavBar>
      <Banner></Banner>
      <div>
        <div>
          <h2>Customer Tickets</h2>
          <Suspense fallback={<p>Data is loading......</p>}>
            <CustomerTickets promisCustomerTickets={promisCustomerTickets}></CustomerTickets>
          </Suspense>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default App
