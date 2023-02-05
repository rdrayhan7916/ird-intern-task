import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Healthy from './Components/Healthy/Healthy'
import Info from './Components/Info/Info'
import Banner from './Components/NavBar/Banner/Banner'
import WorkOut from './Components/WorkOut/WorkOut'


function App() {


  return (
    <div className="App ">
      <NavBar></NavBar>
      <Healthy></Healthy>
      <Info></Info>
      <Banner></Banner>
      <WorkOut></WorkOut>
    </div>
  )
}

export default App
