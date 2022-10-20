import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
import ContentComponent from './components/ContentComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent header="Header"></HeaderComponent>
      <NavigationComponent></NavigationComponent>
      <ContentComponent about="About" link="Quick links"></ContentComponent>
      <FooterComponent copyright="Site plan and copyright info"></FooterComponent>
    </div>
  );
}

export default App;
