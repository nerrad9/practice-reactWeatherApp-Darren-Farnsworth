

export default function CityForecast({city, data, inputRef, setFoc}){
    return <>
    <h1>{city}</h1>
    <button onClick = {() => {setFoc(true)}}>View Details</button>
    <h2>{data[city].summary}</h2>
    <section ref = {inputRef}>
    <h2>{data[city].details}</h2>
    </section>
    </>
}