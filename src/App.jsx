import "./App.css";
import { useState } from 'react';
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";

function App() {

    const [parkingLotItems, setParkingLotItems] = useState([ 
        { 
            date: "2024-01-27", 
            priority: "Low", 
            link: "https://google.com/", 
            description: "Ultimate source of truth.", 
        }, 
        { 
            date: "2024-01-29", 
            priority: "Medium", 
            link: "https://react.dev/", 
            description: "React documentation and tutorial", 
        }, 
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Browser Parking Lot</h1>
                <p>Send most of your browser tabs into retirement.</p>
            </header>
            <main>
                <ParkingLotForm />
                <ParkingLotList />
                <pre>
                    { JSON.stringify(parkingLotItems) }
                </pre>
            </main>
        </div>
    );
}

export default App;
