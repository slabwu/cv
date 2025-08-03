import { useState } from 'react'
import Details from './details.jsx'
import Resume from './resume.jsx'

export default function Content() {
    const [details, setDetails] = useState({
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "88129302",
        country: "SG",
    });

    return (
        <main>
            <Resume details={details}></Resume>
            <div class="form">
                <Details details={details} setDetails={setDetails}></Details>
            </div>
        </main>
    )
}