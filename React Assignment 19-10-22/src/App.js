
import LoginComponent from './components/LoginComponent';
import LoginClassComponent from './components/LoginComponent_Class';
import './App.css';
import TableComponent from './components/TableComponent';
import TableClassComponent from './components/TableClassComponent';
import StyledComponent from './components/StyledComponent';

function App() {

  var books = [
    {id:"01", name:"Book1",author:"Satish", publication:"World-pub"},
    {id:"02", name:"Book2",author:"Ram", publication:"World publications"},
    {id:"03", name:"Book3",author:"Loren ipsum", publication:"Indian publications"}
  ]


    
    
  return (
  
    <div className="App">
      <LoginComponent></LoginComponent>
      <LoginClassComponent></LoginClassComponent>
      <TableComponent data={books}></TableComponent>
      <TableClassComponent data={books}></TableClassComponent>
      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;
