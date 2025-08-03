export default function Resume({ details }) {
    return (
        <section className='resume'>
            <h2>{details.name}</h2>
            <p>
                {details.email} - {details.phone} - {details.country}
            </p>
            <hr />
        </section>
    )
}