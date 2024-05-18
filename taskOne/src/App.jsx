import MainScrean from './components/mainScrean/mainScrean';
import cardData from './components/cardData/cardData';
import './App.css';

function App() {
  return (
    <>
      <MainScrean cardData={cardData} />
    </>
  );
}

export default App;