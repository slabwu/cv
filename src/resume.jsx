export default function Resume({ details, education }) {
    return (
        <section className='resume'>
            <h2>{details.name}</h2>
            <p>
                {details.email} - {details.phone} - {details.country}
            </p>

            <hr />
            <h2>Education</h2>
            {education.map((school) => (
                <>
                <h3>{school.name}</h3>
                <h4>{school.degree}</h4>
                <p>
                    {school.start} - {school.end}
                </p>
                </>
            ))}
            
            <hr />
        
        </section>
    )
}