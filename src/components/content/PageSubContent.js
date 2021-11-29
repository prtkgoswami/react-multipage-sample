import { React, useEffect } from 'react'
import { useParams, useLocation } from "react-router";

function PageSubContent() {
    let {postSlug} = useParams();
    const location = useLocation();
    // const [contents, setContents] = useEffect([postSlug]);
    // console.log(contents);
    const {data} = location.state;
    console.log(data)

    return (
        <div className="flex flex-col px-20 py-20">
            <p className="text-6xl font-bold uppercase font-mono text-gray-700 border-t-2 border-b-2 border-gray-700 text-center mb-10">This is a Sub-Content</p>
            <p className="text-xl font-bold uppercase font-mono text-gray-500 text-center">Post Slug: {postSlug}</p>
            <p className="text-xl font-bold uppercase font-mono text-gray-500 text-center">Param: {data}</p>
        </div>
    )
}

export default PageSubContent
