import Field from './field.jsx'

export default function Details({ details, setDetails }) {
    const fields = [
        {name: 'Name', value: 'name'},
        {name: 'Email', value: 'email'},
        {name: 'Phone number', value: 'phone'},
        {name: 'Country', value: 'country'}
    ]

    const handleChange = (field, value) => {
        setDetails({...details, [field]: value.target.value})
    }

    return (
        <section className='details'>
            <h2>Details</h2>
            {fields.map(field => 
                <Field key={field.value} name={field.name} value={details[field.value]} onChange={(e) => {handleChange(field.value, e)}}></Field>
            )}
        </section>
    )
}