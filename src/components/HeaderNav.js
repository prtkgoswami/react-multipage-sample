import React from 'react'
import {NavLink} from 'react-router-dom'

function HeaderNav() {
    return (
        <div className="flex flex-row justify-between bg-gray-800 px-10 py-3">
            <p className="text-gray-400 p-1 uppercase text-2xl font-mono border-b-2 border-t-2 border-gray-400">Multi-Page React Sample</p>
            <div className="flex flex-row">
                <NavLink className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 uppercase text-xl font-mono transition-all duration-200" to="/">Home</NavLink>
                <NavLink className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 uppercase text-xl font-mono transition-all duration-200" to="/content">Content</NavLink>
                <NavLink className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 uppercase text-xl font-mono transition-all duration-200" to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default HeaderNav
