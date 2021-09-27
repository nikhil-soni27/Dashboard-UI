 import LineCharts from './Components/LineChart';
import {AiOutlineDashboard,RiComputerLine,IoBarChartSharp,FaSolarPanel,ImTable,AiOutlineForm,FcSalesPerformance,AiFillFile} from 'react-icons/all'
import Todo from './Components/Todo';
import PieChart from './Components/PieChart';

function App() {
  return (
    <div>
      {/* <div className="sidebar"> */}
      <div className="Main-sidebar">
        <ul className="sidebar">
          <li><a href="#"><AiOutlineDashboard/>Dashboard</a></li>
          <li><a href="#"><RiComputerLine/>UI Elements</a></li>
          <li><a href="#"><IoBarChartSharp/>Charts</a></li>
          <li><a href="#"><FaSolarPanel/>Tabs & Panels</a></li>
          <li><a href="#"><ImTable/>Responsive Tables </a></li>
          <li><a href="#"><AiOutlineForm/>Forms</a></li>
          <li><a href="#"><FcSalesPerformance/>Multi Level Dropdown</a></li>
          <li><a href="#"><AiFillFile/>Empty page  </a></li>
        </ul>
        <header>
    <h2>Dashboard</h2>
    <p>Summary of your App</p>
    </header>
    <nav>
    <p>Home / Library / Data</p>
    </nav>
    <Todo text='8457'/>
    <div className="graphs">
      <div className="first-graph">
<PieChart/>
      </div>
<div className="second-graph">
<LineCharts/> 
</div>
    </div>
   
    </div>
</div>
  )
}

   
export default App;
