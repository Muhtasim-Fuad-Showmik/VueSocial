import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "../models/activity";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const api = "http://localhost:5000";

    useEffect(() => {
        axios.get<Activity[]>(`${api}/api/activities`).then((response) => {
            setActivities(response.data);
        });
    }, []);

    return (
        <div className="h-screen">
            <nav className="w-full h-16 max-h-16 px-12 backdrop-blur-sm sticky top-0 z-50 shadow-md">
                <div className="w-16 h-16 flex items-center">
                    <img src="./Logo.png" alt="logo" className="w-full h-full" />
                    <span className="text-3xl font-bold text-primaryDark">React</span>
                    <span className="text-3xl">Social</span>
                </div>
            </nav>
            <div className="bg-gradient-to-r from-primary to-orangeSoda pl-10 pb-10 h-[calc(100vh-64px)]">
                <div className="bg-white h-full p-10 rounded">
                    {/* Main Content */}
                    <h1 className="font-bold text-2xl mb-4">Activites</h1>
                    {activities.length && (
                        <ul>
                            {activities.map((activity) => (
                                <li className="mb-2" key={activity.id}>{activity.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
