import React from "react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <div className="grid grid-cols-8 gap-4">
            <div className="col-span-5">
                <h1 className="font-semibold text-3xl mb-4 ml-4">Activities</h1>
                <ActivityList activities={activities} />
            </div>
        </div>
    )
}