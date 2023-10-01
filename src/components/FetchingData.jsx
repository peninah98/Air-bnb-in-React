import { useState } from "react"
const FetchData = () =>{
    const [fetchedData, setFetchedData] = useState({})
    fetch("https://swapi.dev/api/people/1")
    .then((res)=>res.json())
    .then(data=>setFetchedData(data))
    return (
        <div>
            <pre>
            {JSON.stringify(fetchedData, null, 2)}
            </pre>
        </div>
    )
}


export default FetchData