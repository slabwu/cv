import { useState } from 'react'
import Field from './field.jsx'

function School({ school, isActive, edit, remove, activate }) {
    const fields = [
        {name: 'School', value: 'name'},
        {name: 'Degree', value: 'degree'},
        {name: 'Start', value: 'start'},
        {name: 'End', value: 'end'}
    ]

    const handleChange = (field, value) => {
        edit({...school, [field]: value})
    }

    if (isActive) {
        return (
            <div>
                {fields.map(({ name, value }) => (
                    <Field key={value} name={name} value={school[value]} onChange={e => handleChange(value, e.target.value)}></Field>
                ))}
                <button onClick={() => activate(null)}>Cancel</button>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{school.name}</h3>
                <button onClick={() => activate(school.id)}>Edit</button>
                <button onClick={() => remove(school.id)}>Delete</button>
            </div>
        )
    }
}

export default function Education({ education, setEducation }) {
    const [activeId, setActiveId] = useState(null)

    const removeSchool = (id) => {
        const updated = education.filter(school => school.id !== id)
        setEducation(updated)
    }

    const activateSchool = (id) => {
        setActiveId(id)
    }

    const editSchool = (updatedSchool) => {
        const updated = education.map(school => school.id === updatedSchool.id ? updatedSchool : school)
        setEducation(updated)
    }

    const addSchool = () => {
        const newSchool = {
            id: crypto.randomUUID(),
            name: "University Name",
            degree: "Degree Name",
            start: "01/01/2000",
            end: "01/01/2004"
        }
        setEducation([...education, newSchool])
    }

    return (
        <section className='education'>
            <h2>Education</h2>
            {education.map(school => (
                <School key={school.id} school={school} isActive={activeId === school.id} remove={removeSchool} edit={editSchool} activate={activateSchool}></School>
            ))}
            <button onClick={addSchool}>+</button>
        </section>
    )
}