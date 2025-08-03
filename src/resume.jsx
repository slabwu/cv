export default function Resume({ details, education, experience }) {
    return (
        <section className='resume'>
            <h2>{details.name}</h2>
            <p>
                {details.email} • {details.phone} • {details.country}
            </p>

            <h2 className='header'>Education</h2>
            <hr />
            {education.map((school) => (
                <div className='container'>
                    <div className='title'>
                        <h3>{school.name}</h3>
                        <p>{school.start} - {school.end}</p>
                    </div>
                    <h4>{school.degree}</h4>
                </div>
            ))}
        
            <h2 className='header'>Experience</h2>
            <hr />
            {experience.map((job) => (
                <div className='container'>
                    <div className='title'>
                        <h3>{job.name}</h3>
                        <p>{job.start} - {job.end}</p>
                    </div>
                    <h4>{job.position}</h4>
                    <p>{job.description}</p>
                </div>
            ))}

        </section>
    )
}