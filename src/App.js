import { ThemeProvider } from './contexts/theme-context';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { Card } from './components/card/card'
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <Card />
      <Card />
      <Card />
    </ThemeProvider>
  );
}

export default App;
