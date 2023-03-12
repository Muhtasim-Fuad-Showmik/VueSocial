import React from "react";

export default function NavBar() {
    return (
        <nav className="w-full h-16 max-h-16 flex items-center px-12 backdrop-blur-sm sticky top-0 z-50 shadow-md">
            <div className="h-16 mr-4 flex items-center">
                <img src="./Logo.png" alt="logo" className="w-full h-full" />
                <span className="text-3xl font-bold text-primaryDark">React</span>
                <span className="text-3xl">Social</span>
            </div>
            <div className="ml-4">
                <a href="/">Activities</a>
            </div>
            <div className="ml-4">
                <a href="/">Notifications</a>
            </div>
        </nav>
    )
}