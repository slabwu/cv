import { useState } from 'react'
import Details from './details.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import Resume from './resume.jsx'

export default function Content() {
    const [details, setDetails] = useState({
        name: "Johnathan Brown",
        email: "johnathanbrown1906@gmail.com",
        phone: "+1 3472718260",
        country: "San Francisco, CA"
    });

    const [education, setEducation] = useState([
        {
            id: crypto.randomUUID(),
            name: "University of Pennsylvannia",
            degree: "MSc in Software Engineering",
            start: "Aug 2018",
            end: "Jun 2020"
        },
        {
            id: crypto.randomUUID(),
            name: "University of Arizona",
            degree: "BSc in Computer Science, Minor in Sociology",
            start: " Aug 2014",
            end: "May 2017"
        }
    ]);

    const [experience, setExperience] = useState([
        {
            name: "PeachStem",
            position: "Front-End Developer",
            description: "Developed and maintained responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks (e.g., React). Collaborated closely with designers and backend engineers in a fast-paced startup environment to deliver scalable, user-friendly web applications.",
            start: "23/01/2004",
            end: "23/02/2006"
        },
        {
            name: "Gathero Solutions",
            position: "Market Researcher",
            description: "Conducted in-depth market analysis to identify technology trends, customer needs, and competitor positioning. Delivered actionable insights through data collection, surveys, and competitive intelligence to support product development and strategic planning.",
            start: "23/01/2004",
            end: "23/02/2006"
        }
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