import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navbar/Nav'
import Services from './ServiceSection/Services/Services'
import { toast, ToastContainer } from 'react-toastify'

const fetchServices = async() => {
  const res = await fetch ('/services.json');
  const data = res.json();
  return data
}
const servicesPromise = fetchServices();

function App() {
  const [selectTickets, setSelectTickets] = useState([])

  const handleSelectTickets = (service) => {
    console.log('ticket item add');
    const newTicket = [...selectTickets, service]
    console.log(newTicket);
    setSelectTickets(newTicket)
    toast('Customer Ticket Item Added')
  }
  return (
    <>
    <div className='mx-auto min-h-screen bg-gray-100'>
    <Nav></Nav>
    <Banner selectTickets={selectTickets}></Banner>
    <Services 
    servicesPromise={servicesPromise} 
    selectTickets={selectTickets}
    setSelectTickets={setSelectTickets}
    handleSelectTickets={handleSelectTickets}
    ></Services>
    <Footer></Footer>
    <ToastContainer />
    </div>
     
    </>
  )
}

export default App
