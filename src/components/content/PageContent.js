import React from 'react'
import {Link} from 'react-router-dom'

function PageContent() {
    const links = [
        {
            pathname: "/content/subcontent-1",
            linktitle: "Sub-Content 1",
            param: {data: "Param 1"},
        },
        {
            pathname: "/content/subcontent-2",
            linktitle: "Sub-Content 2",
            param: {data: "Param 2"},
        },
        {
            pathname: "/content/subcontent-3",
            linktitle: "Sub-Content 3",
             param: {data: "Param 3"},
        },
    ];

    return (
        <div className="flex flex-col text-center px-20 py-10">
            <p className="text-6xl font-bold uppercase font-mono text-gray-700 text-center">Content</p>
            <div className="flex flex-row w-full justify-center">
                <div className="flex flex-col justify-self-center w-1/3 margin-auto mt-5">
                    {
                        links.length > 0 && 
                        links.map((link) => (
                            <Link to={link.pathname} state={link.param} className="text-xl text-gray-600 py-2 font-semibold border-b-2 text-center border-transparent transition-colors duration-300 hover:border-black">{link.linktitle}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PageContent
