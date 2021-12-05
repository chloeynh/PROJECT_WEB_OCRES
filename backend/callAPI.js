const fetchSearch = async() => {
    temperatures = await fetch()
    .then(res => res.json())
    .then(res => res.temperatures)
    console.log(temperatures);
}

const affichage = async(/* qqch */) => {
    await fetchSearch();
    
    results.innerHTML = (
        temperatures.map(temperature => (
            console.log(/* qqch */)        
        ))           
    );
};

fetchSearch();
