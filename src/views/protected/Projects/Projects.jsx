import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'

export default function Projects() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [count, setCount] = useState(parseInt(searchParams.get("count") || 0));

    return (
        <div>
            <p>Count: {count}</p>
            <button
                onClick={(e)=>{
                    setSearchParams(`count=${count+1}`);
                    setCount((prevCount) => prevCount+1);
                }}
            >
              Click me
            </button>
        </div>
      )
}
