import React, { useEffect, useState } from "react";
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
        <div>
            <nav className="w-100 h-16 max-h-16 backdrop-blur-sm sticky top-0 z-50">
                <div className="w-16 h-16 flex items-center">
                    <img src="./Logo.png" alt="logo" className="w-100 h-100" />
                    <span className="text-3xl font-bold text-primaryDark">React</span>
                    <span className="text-3xl">Social</span>
                </div>
            </nav>
            <div className="">
                <h1>Activites</h1>
                {activities.length && (
                    <ul>
                        {activities.map((activity: Activity) => (
                            <li key={activity.id}>{activity.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;
