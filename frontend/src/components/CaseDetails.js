
const CaseDetails = ({ oneCase }) => {
    const { victim, perpetrator, report, createdAt } = oneCase
    return (
        <div className="case-details">
            <h2>{ report.category }</h2>
            <p>{ createdAt }</p>
            <div className="flex">
                <div className="flex-container">
                    <h4>Victim Details</h4>
                    <p>Name: { victim.name }</p>
                    <p>Age: { victim.age }</p>
                    <p>Occupation: { victim.occupation }</p>
                </div>
                <div className="flex-container">
                    <h4>Perpetrator Details</h4>
                    <p>Name: { perpetrator.name }</p>
                    <p>Occupation: { perpetrator.occupation }</p>
                    <p>Relationship: { perpetrator.relationship }</p>
                </div>
            </div>
        </div>
    )
}

export default CaseDetails