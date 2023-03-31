import { useEffect, useState } from "react"

// components
import CaseDetails from "../components/CaseDetails"

const Home = () => {
    const [ cases, setCases ] = useState(null)

    useEffect( () => {
        const fetchCases = async () => {
            await fetch('http://localhost:5000/api/cases')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Process the JSON data
                    setCases(data)
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }

        fetchCases()
    }, [])

    return (
        <div className="home">
            <div className="cases">
                { cases && cases.map( (oneCase) => (
                    <CaseDetails key={ oneCase._id } oneCase={ oneCase }/>
                ))}
            </div>
        </div>
    )
}

export default Home