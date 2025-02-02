import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import './reset.css';
import './vars.css';


function App() {
  return (
    <div>
    <Sidebar/>
    <Header />
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
