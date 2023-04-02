import { useReducer, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useCaseContext } from "../hooks/useCaseContext"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const Report = () => {
    const { dispatch } = useCaseContext()
    const [victim, setVictim] = useReducer(formReducer, {
        name: '',
        occupation: '',
        age: undefined,
        phone: undefined,
        email: ''
    });

    const [perpetrator, setPerpetrator] = useReducer(formReducer, {
        name: '',
        occupation: '',
        relationship: ''
    });

    const [report, setReport] = useReducer(formReducer, {
        category: '',
        details: '',
        actions: '',
        expectations: ''
    })

    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newCase = { victim, perpetrator, report }

        const response = await fetch('http://localhost:5000/api/cases', {
            method: 'POST',
            body: JSON.stringify(newCase),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setError(null)
            console.log('New case added', json)
            dispatch({ type: 'CREATE_CASE', payload: json})
            alert('Case successfully submitted.')
            navigate('/')
        }
    }

    const handleVicChange = event => {
        setVictim({
          name: event.target.name,
          value: event.target.value,
        })
    }

    const handlePerpChange = event => {
        setPerpetrator({
          name: event.target.name,
          value: event.target.value,
        })
    }

    const handleReportChange = event => {
        setReport({
          name: event.target.name,
          value: event.target.value,
        })
    }

    return (
        <div className="report">
            <form className="create" onSubmit={handleSubmit}>
                <h2>Report a VAW Case</h2>
                <p>* required</p>
                {/* Victim Details */}
                <div className="form-part">
                <h4>Victim Details</h4>
                <label>Name *
                    <input 
                        onChange={handleVicChange}
                        value={victim.name}
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label>Occupation *
                    <input 
                        onChange={handleVicChange}
                        value={victim.occupation}
                        type="text"
                        name="occupation"
                        required
                    />
                </label>
                <label>Age (in years)
                    <input 
                        onChange={handleVicChange}
                        value={victim.age}
                        type="number"
                        min="0"
                        name="age"
                    />
                </label>
                <label>Cellphone Number *
                    <input 
                        onChange={handleVicChange}
                        value={victim.phone}
                        type="number"
                        name="phone"
                        required
                    />
                </label>
                <label>Email
                    <input 
                        onChange={handleVicChange}
                        value={victim.email}
                        type="email"
                        name="email"
                    />
                </label>
                </div>


                {/* Perpetrator Details */}
                <div className="form-part">
                <h4>Perpetrator Details</h4>
                <label>Name
                    <input 
                        onChange={handlePerpChange}
                        value={perpetrator.name}
                        type="text"
                        name="name"
                    />
                </label>
                <label>Occupation
                    <input 
                        onChange={handlePerpChange}
                        value={perpetrator.occupation}
                        type="text"
                        name="occupation"
                    />
                </label>
                <label>Relation to Victim
                    <input 
                        onChange={handlePerpChange}
                        value={perpetrator.relationship}
                        type="text"
                        name="relationship"
                    />
                </label>
                </div>

                {/* Case Details */}
                <div className="form-part">
                <h4>Case Details</h4>
                <label>Category *
                    <select onChange={handleReportChange}
                            value={report.category}
                            id="category"
                            name="category" 
                            required>
                        <option value="">---</option>
                        <option value="RA 9262">RA 9262 (Anti-Violence Against Women and Children)</option>
                        <option value="RA 11313">RA 11313 (Anti-Bastos Law)</option>
                        <option value="RA 8353">RA 8353 (Anti-Rape Law)</option>
                        <option value="Acts of Lasciviousness">Acts of Lasciviousness</option>
                    </select>
                </label>
                <label>Details of the case *
                    <textarea 
                        onChange={handleReportChange}
                        value={report.details}
                        type="text"
                        name="details"
                        required
                    />
                </label>
                <label>Actions Taken
                    <input 
                        onChange={handleReportChange}
                        value={report.actions}
                        type="text"
                        name="actions"
                    />
                </label>
                <label>Expectations from Us *
                    <input 
                        onChange={handleReportChange}
                        value={report.expectations}
                        type="text"
                        name="expectations"
                        required
                    />
                </label>
                </div>
                
                <button className="submit-btn">Report Case</button>
                { error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Report