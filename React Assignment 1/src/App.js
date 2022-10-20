import './App.css';
import HeaderComponent from './components/headerComponent';
import NavigationComponent from './components/navigationComponent';
import ContentComponent from './components/contentComponent';
import SidebarComponent from './components/sidebarComponent';
import FooterComponent from './components/footerComponent';

function App() {

  const menuitems =[
    {itemname: "Home"},
    {itemname:"Menu1"},
    {itemname:"Menu2"},
    {itemname:"Menu3"},
    {itemname:"Menu4"},
  ]

  const content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  
  const listitems=[
    {sidebaritemname:"Item1"},
    {sidebaritemname:"Item2"},
    {sidebaritemname:"Item3"},
    {sidebaritemname:"Item4"},
  ]
  return (
    <div className="App">
      <HeaderComponent name="Employee Management System"></HeaderComponent>
      <div className='main-content'>
      <NavigationComponent  navbar={menuitems}></NavigationComponent>
      <div className="mid-content">
      <ContentComponent maincontent={content}></ContentComponent>
      <SidebarComponent sidebar={listitems}></SidebarComponent>
      </div>
      <FooterComponent copyright="React Handson" company="Cognizant"></FooterComponent>
      </div>
    </div>
  );
}

export default App;
