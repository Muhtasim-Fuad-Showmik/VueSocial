import React from "react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <div className="grid grid-cols-8 gap-4">
            <div className="col-span-5">
                {activities.length && (
                    <ul>
                        {activities.map((activity) => (
                            <li className="mb-2" key={activity.id}>{activity.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}