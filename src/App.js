import './App.css';
import PageRouting from './Pages/PageRouting/PageRouting';

import { useSettings } from './Contexts/SettingsContext';

function App() {
  
  const {theme} = useSettings();

  return (


    // This component is emptier than usual, since the design does not require a header / footer on every page like many websites. Could had just done routing here and skip the routing component.
    // theme and typography classes applied here.
    <div className={`App ${theme} typography-default`}>
      <PageRouting/>
    </div>
  );
}

export default App;
