import './App.css';
import Button from './components/button-alert';
import InputText from './components/input-text';
import TextTittle from './components/text-tittle';


function App() {
  return (
    <div className="App">
      <InputText />
      <TextTittle tittle = "Titulo 1" color = "green"></TextTittle>
      <TextTittle color = "blue"></TextTittle>
      <TextTittle tittle = "Titulo 3" color = "#54018C"></TextTittle>
      <Button label = "teste"/>
    </div>
  );
}

export default App;