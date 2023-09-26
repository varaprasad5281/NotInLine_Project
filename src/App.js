
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ButtonTab from './components/ButtonTab';
import BookingTab from './components/BookingTab';
import ChooseUs from './components/ChooseUs';
import FooterTab from './components/FooterTab';
import CardsCompo from './components/CardsCompo';
import './App.css';

function App() {
  return(
    <div className='app-container'>
      <Navbar />
      <ContactForm />
      <CardsCompo />
      <ButtonTab />
      <div className="ctrs2">
        <BookingTab  /> </div>
      <div className='tabs-gb-container'>
        <div className="ctrs1">
        <BookingTab  /> </div>
        <ChooseUs />
      </div>
      <FooterTab />
    </div>
  )
}

export default App;
