import { useState } from 'react'
import Details from './details.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import Resume from './resume.jsx'

export default function Content() {
    const [details, setDetails] = useState({
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "88129302",
        country: "SG"
    });

    const [education, setEducation] = useState([
        {
            id: crypto.randomUUID(),
            name: "U of Blank",
            degree: "MSc in Biology",
            start: "23/01/2004",
            end: "23/02/2006"
        },
        {
            id: crypto.randomUUID(),
            name: "U of Blank 2",
            degree: "MSc in Biology",
            start: "23/01/2004",
            end: "23/02/2006"
        }
    ]);

    const [experience, setExperience] = useState([
        {
            name: "USoft",
            position: "Programmer",
            description: "Description",
            start: "23/01/2004",
            end: "23/02/2006"
        },
    ]);

    return (
        <main>
            <Resume details={details} education={education} experience={experience}></Resume>
            <div className="form">
                <Details details={details} setDetails={setDetails}></Details>
                <Education education={education} setEducation={setEducation}></Education>
                <Experience experience={experience} setExperience={setExperience}></Experience>
            </div>
        </main>
    )
}