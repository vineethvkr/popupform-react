import { useState } from "react";
import Popup from "./component/popup/Popup";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <div className='container'>
        <h2>Hello, save the Segment with Clicking the Button below</h2>
        <br></br>
        <button onClick={ () => setButtonPopup(true)}>Save Segment</button>
   </div>
      
      <Popup trigger={buttonPopup}>
        <div className="box">
          <p>Enter the Name of the Segment</p>
          <input type='text' placeholder="Name of the Segment"/>
          <p> To Save Your Segment You need to add the <br></br>schemas to build the query</p>
          
            <h5> First Name</h5>
         <input type='text' placeholder="First Name"/>
          
          <h5>Last Name</h5>
          <input type='text' placeholder="Last Name"/>

          <h5>Account Number</h5>
          <input className="account" type='text' placeholder="Account Number"/>

          <h5>Gender</h5>
          <select>
          <h5> Gender</h5>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
          </select>
          
          <h5>Age</h5>
          <input type='text' placeholder="Age"/>
          
             <input type='text' placeholder="Add Schema to the segment"/>
          <div className="footer">
           <button class='btn1'>Save Segment</button>
           <button class='btn2'>cancel</button>
           </div>
           <a href="" target="_blank">+ Add A New Schema</a>
        </div>
        
        
        </Popup>
    </div>
  );
}

export default App;
