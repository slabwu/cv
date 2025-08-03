import { useState } from 'react'
import Field from './field.jsx'

function Job({ job, isActive, edit, remove, activate }) {
    const fields = [
        {name: 'Job', value: 'name'},
        {name: 'Position', value: 'position'},
        {name: 'Description', value: 'description'},
        {name: 'Start', value: 'start'},
        {name: 'End', value: 'end'}
    ]

    const handleChange = (field, value) => {
        edit({...job, [field]: value})
    }

    if (isActive) {
        return (
            <div>
                {fields.map(({ name, value }) => (
                    <Field key={value} name={name} value={job[value]} onChange={e => handleChange(value, e.target.value)}></Field>
                ))}
                <button onClick={() => activate(null)}>Cancel</button>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{job.name}</h3>
                <button onClick={() => activate(job.id)}>Edit</button>
                <button onClick={() => remove(job.id)}>Delete</button>
            </div>
        )
    }
}

export default function Experience({ experience, setExperience }) {
    const [activeId, setActiveId] = useState(null)

    const removeJob = (id) => {
        const updated = experience.filter(job => job.id !== id)
        setExperience(updated)
    }

    const activateJob = (id) => {
        setActiveId(id)
    }

    const editJob = (updatedJob) => {
        const updated = experience.map(job => job.id === updatedJob.id ? updatedJob : job)
        setExperience(updated)
    }

    const addJob = () => {
        const newJob = {
            id: crypto.randomUUID(),
            name: "Job Name",
            position: "Position Name",
            description: "Description of Job",
            start: "01/01/2000",
            end: "01/01/2004"
        }
        setExperience([...experience, newJob])
    }

    return (
        <section className='experience'>
            <h2>Experience</h2>
            {experience.map(job => (
                <Job key={job.id} job={job} isActive={activeId === job.id} remove={removeJob} edit={editJob} activate={activateJob}></Job>
            ))}
            <button onClick={addJob}>+</button>
        </section>
    )
}