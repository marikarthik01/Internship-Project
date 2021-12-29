import './App.css';
import Header from './Components/Header/Header';
import Serve from './Components/Serve/Serve';
import Card from './Components/Card/Card';
import Finance from './Components/Card/assets/money.png';
import Hamber from './Components/Card/assets/hamber.png';
import Education from './Components/Card/assets/education.png';
import Money from './Components/Card/assets/mask.png';

function App() {
  return (
    <div className="App">
    <Header />
    <Serve />
    <Card title1="Finance and Insurance" title2="Healthcare" img={Finance}/>
   
    <Card title1="Construction" title2="Wholesale and retail" img={Hamber}/>
    
    <Card title1="Education" title2=" Energy and resources" img={Education}/>

    <Card title1="Entertainment" title2="Transportation" img={Money}/>
   
    
    </div>
  );
}

export default App;
