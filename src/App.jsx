import './App.css'
import Banner from './Components/Banner/Banner'
import Nav from './Components/Navbar/Nav'
import Services from './ServiceSection/Services/Services'

const fetchServices = async() => {
  const res = await fetch ('/services.json');
  const data = res.json();
  return data
}

const servicesPromise = fetchServices();

function App() {

  return (
    <>
    <div className='mx-auto min-h-screen bg-gray-100'>
    <Nav></Nav>
    <Banner></Banner>
    <Services servicesPromise={servicesPromise}></Services>
    </div>
     
    </>
  )
}

export default App
