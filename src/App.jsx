import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navbar/Nav'
import Services from './ServiceSection/Services/Services'
import { toast, ToastContainer } from 'react-toastify'

const fetchServices = async () => {
  const res = await fetch('/services.json');
  const data = res.json();
  return data
}
const servicesPromise = fetchServices();

function App() {
  const [selectTickets, setSelectTickets] = useState([]);
  const [complete, setComplete] = useState([]);
// Select ticket for task 
  const handleSelectTickets = (service) => {
    const exists = selectTickets.find(item => item.id === service.id);
    if(exists) {
      toast('Already Added The Ticket ⚠️');
      return
    }
    // console.log('ticket item add');
    const newTicket = [...selectTickets, service];
    // console.log(newTicket);
    setSelectTickets(newTicket);
    toast('Customer Ticket Item Added');
  }
// complete the task
  const handleComplete = (id) => {
      // console.log('complete ticket', id);
      const newComplete = selectTickets.find(ticket => ticket.id === id);
      if (!newComplete) return;
      // console.log(newComplete);
      const resolveDone = [...complete, newComplete];
      setComplete(resolveDone);
      
      const remove = selectTickets.filter(ticket => ticket.id !== id);
      setSelectTickets(remove);
      toast("Task Completed Successfully ✅");
  }

  return (
    <>
      <div className='mx-auto min-h-screen bg-gray-100'>
        <Nav></Nav>
        <Banner selectTickets={selectTickets} complete={complete}></Banner>
        <Services
          servicesPromise={servicesPromise}
          selectTickets={selectTickets}
          handleSelectTickets={handleSelectTickets}
          handleComplete={handleComplete}
          complete={complete}
          setComplete={setComplete}
        ></Services>
        <Footer></Footer>
        <ToastContainer />
      </div>

    </>
  )
}

export default App
