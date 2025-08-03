import { useState } from 'react'
import Field from './field.jsx'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'

function School({ school, isActive, edit, remove, activate }) {
    const fields = [
        {name: 'School', value: 'name'},
        {name: 'Degree', value: 'degree'},
        {name: 'Start Date', value: 'start'},
        {name: 'End Date', value: 'end'}
    ]

    const handleChange = (field, value) => {
        edit({...school, [field]: value})
    }

    return (
            <>
                <hr />
                <div class='section'>
                    <h3>{school.name}</h3>
                    <button onClick={() => activate(school.id)}><EditIcon></EditIcon></button>
                    <button className='delete' onClick={() => remove(school.id)}><CloseIcon></CloseIcon></button>
                </div>

                { isActive && (
                    <section>
                        {fields.map(({ name, value }) => (
                            <>
                                <Field key={value} name={name} value={school[value]} onChange={e => handleChange(value, e.target.value)}></Field>
                            </>
                        ))}
                        <button onClick={() => activate(null)}>Confirm</button>
                    </section>
                )}
            </>
    )
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
            name: "School Name",
            degree: "Degree Name",
            start: "Start Date",
            end: "End Date"
        }
        setEducation([...education, newSchool])
    }

    return (
        <section className='education'>
            <h2>Education</h2>
            {education.map(school => (
                <School key={school.id} school={school} isActive={activeId === school.id} remove={removeSchool} edit={editSchool} activate={activateSchool}></School>
            ))}
            <hr />
            <div class='add'>
                <button onClick={addSchool}><AddIcon></AddIcon></button>
                <h3>Add Education</h3>
            </div>
        </section>
    )
}