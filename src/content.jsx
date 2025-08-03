import { useState } from 'react'
import Details from './details.jsx'
import Education from './education.jsx'
import Resume from './resume.jsx'

export default function Content() {
    const [details, setDetails] = useState({
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "88129302",
        country: "SG",
    });

    const [education, setEducation] = useState([
        {
        id: 0,
        name: "U of Blank",
        degree: "MSc in Biology",
        start: "23/01/2004",
        end: "23/02/2006",
        },
        {
        id: 1,
        name: "U of Blank 2",
        degree: "MSc in Biology",
        start: "23/01/2004",
        end: "23/02/2006",
        },
    ]);

    return (
        <main>
            <Resume details={details} education={education}></Resume>
            <div className="form">
                <Details details={details} setDetails={setDetails}></Details>
                <Education education={education} setEducation={setEducation}></Education>
            </div>
        </main>
    )
}