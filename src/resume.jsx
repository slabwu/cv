export default function Resume({ details, education, experience }) {
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
        
            {experience.map((job) => (
                <>
                <h3>{job.name}</h3>
                <h4>{job.position}</h4>
                <p>{job.description}</p>
                <p>
                    {job.start} - {job.end}
                </p>
                </>
            ))}

        </section>
    )
}