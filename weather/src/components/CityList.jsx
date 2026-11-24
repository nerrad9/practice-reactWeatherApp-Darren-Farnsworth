

export default function CityList({data, sel, setSel}){
    return <>
        <div>
            {Object.keys(data).map(city => <button key = {city} onClick = {() => setSel(city)}>{city}</button>)}
        </div>
    </>
}