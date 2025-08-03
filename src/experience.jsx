import { useState } from 'react'
import Field from './field.jsx'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'

function Job({ job, isActive, edit, remove, activate }) {
    const fields = [
        {name: 'Job', value: 'name'},
        {name: 'Position', value: 'position'},
        {name: 'Description', value: 'description'},
        {name: 'Start Date', value: 'start'},
        {name: 'End Date', value: 'end'}
    ]

    const handleChange = (field, value) => {
        edit({...job, [field]: value})
    }

    return (
            <>
                <hr />
                <div class='section'>
                    <h3>{job.name}</h3>
                    <button onClick={() => activate(job.id)}><EditIcon></EditIcon></button>
                    <button className='delete' onClick={() => remove(job.id)}><CloseIcon></CloseIcon></button>
                </div>

                { isActive && (
                    <section>
                        {fields.map(({ name, value }) => (
                            <>
                                <Field key={value} name={name} value={job[value]} onChange={e => handleChange(value, e.target.value)}></Field>
                            </>
                        ))}
                        <button onClick={() => activate(null)}>Confirm</button>
                    </section>
                )}
            </>
    )
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
            description: "Job Description",
            start: "Start Date",
            end: "End Date"
        }
        setExperience([...experience, newJob])
    }

    return (
        <section className='experience'>
            <h2>Experience</h2>
            {experience.map(job => (
                <Job key={job.id} job={job} isActive={activeId === job.id} remove={removeJob} edit={editJob} activate={activateJob}></Job>
            ))}
            <hr />
            <div class='add'>
                <button onClick={addJob}><AddIcon></AddIcon></button>
                <h3>Add Experience</h3>
            </div>
        </section>
    )
}