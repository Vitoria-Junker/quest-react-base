import UpperCaseText from './componentes/uppercase/uppercase';
import Button from './componentes/button/button';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <UpperCaseText text='A vida é bela. Que as futuras gerações a livrem de todo mal e opressão, e possam desfrutá-la em toda sua plenitude.' color='#37fcc1'></UpperCaseText>
        <Button label='Baixar CV'></Button>
      </header>
    </div>
  );
}

export default App;

