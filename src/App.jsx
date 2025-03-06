import './index.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ScrollText from './components/ScrollText/ScrollText';
import SummaryMain from './components/SummaryMain/SummaryMain';

const words = ["Tesis", "Postgrado", "Investigación", "Ciencia", "Innovación", "Tecnología"];

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <ScrollText words={words} />
      <SummaryMain/>
    </>
  )
}

export default App
