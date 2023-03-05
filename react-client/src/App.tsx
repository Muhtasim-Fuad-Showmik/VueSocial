import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
    interface Activity {
        id: string;
        title: string;
        description: string;
        date: string;
        category: string;
        city: string;
        venue: string;
    }
    const initialActivities: Activity[] = [];
    const [activities, setActivities] = useState(initialActivities);
    const api = "http://localhost:5000";

    useEffect(() => {
        axios.get(`${api}/api/activities`).then((response) => {
            setActivities(response.data);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {activities.length && (
                    <ul>
                        {activities.map((activity: Activity) => (
                            <li key={activity.id}>{activity.title}</li>
                        ))}
                    </ul>
                )}
            </header>
        </div>
    );
}

export default App;
