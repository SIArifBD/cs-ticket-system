import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import NavBar from './components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify';
import TaskStates from './components/TaskStates/TaskStates'
import ResolveTask from './components/ResolveTask/ResolveTask'
import Footer from './components/Footer/Footer'

const fetchCustomerTickets = async () => {
  const res = await fetch("/fakeData.json")
  return res.json();
}

const promisCustomerTickets = fetchCustomerTickets();

function App() {

  const [ticketStatistics, setTicketStatistics] = useState(0);
  const [taskClicked, setTaskClicked] = useState([]);
  const [resolveTask, setResolveTask] = useState(0);
  const [resolveTaskComplete, setResolveTaskComplete] = useState([]);

  return (
    <div className='min-h-screen bg-gray-200 text-base-content'>
      <NavBar></NavBar>
      <Banner ticketStatistics={ticketStatistics} resolveTask={resolveTask}></Banner>
      <div className='mx-4 flex gap-2'>
        <div className='w-4/5'>
          <h2 className='font-extrabold text-2xl'>Customer Tickets</h2>
          <Suspense fallback={<p>Data is loading......</p>}>
            <CustomerTickets
              taskClicked={taskClicked}
              setTaskClicked={setTaskClicked}
              ticketStatistics={ticketStatistics}
              setTicketStatistics={setTicketStatistics}
              promisCustomerTickets={promisCustomerTickets}></CustomerTickets>
          </Suspense>
        </div>
        <div className='w-1/5'>
          <div>
            <h2 className='font-extrabold text-2xl'>Task Status</h2>
            {
              taskClicked.length === 0 
              ? "Select Ticket to add to Task Status" 
              : <TaskStates taskClicked={taskClicked} setResolveTask={setResolveTask} resolveTaskComplete={resolveTaskComplete} setResolveTaskComplete={setResolveTaskComplete} setTicketStatistics={setTicketStatistics}></TaskStates>
            }
          </div>
          <div className='mt-4'> 
            <h2 className='font-extrabold text-2xl'>Resolve Task</h2>
            {
              resolveTaskComplete.length === 0 
              ? "No resolve task yet" 
              : <ResolveTask resolveTaskComplete={resolveTaskComplete} taskClicked={taskClicked} setTaskClicked={setTaskClicked}></ResolveTask>
            }
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  )
}

export default App
