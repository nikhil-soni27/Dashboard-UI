import { BiCart, IoMdEye, IoMdPeople, IoChatbubbles } from 'react-icons/all';
function Todo(props) {
    return <div className="heading">
        <div className="column">
            <IoMdEye className="a"/>
            <h1>{props.text}</h1>
            <p>Daily Visits</p>
        </div>
        <div className="column">
         
                <BiCart className="b" />
            
            <h1>52,160</h1>
            <p>Sales</p>
        </div>
        <div className="column">
            
                <IoChatbubbles className="c"/>
        
            <h1>15,823</h1>
            <p>Comments</p>
        </div>
        <div className="column">
          
                <IoMdPeople className="d" />
          
            <h1>36,752</h1>
            <p>No. of Visits</p>
        </div>
    </div>
}
export default Todo;