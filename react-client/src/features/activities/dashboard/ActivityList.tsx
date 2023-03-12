import React from 'react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[]
}

export default function ActivityList({activities}: Props) {
    return (
        <div>
            {activities.length && activities.map(activity => (
                <div key={activity.id} className="border-b border-slate-300 p-4">
                    <h2 className='text-xl font-semibold'>{activity.title}</h2>
                    <div className='text-sm text-slate-500 mb-2'>{activity.date}</div>
                    <div className='text-sm mb-2'>
                        <p>{activity.description}</p>
                        <div>{activity.city}, {activity.venue}</div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='h-6 bg-orangeSoda text-white text-xs px-2 py-1 rounded'>
                            {activity.category}
                        </div>
                        <button className='bg-primaryDark text-white rounded px-4 py-1 cursor-pointer' >
                            View
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}