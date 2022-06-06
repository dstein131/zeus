document.addEventListener('DOMContentLoaded', () => {
   
    const selectDrop = document.getElementById('countries')

    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json()
    }).then (data => {
        const countries = []
        console.log(data)
        let output = `<option>${data[118].name.common} ${data[118].flag}</option>`
       
        data.forEach(country => {
            var obj = {}
            obj["name"] = country.name.common
            obj["flag"] = country.flag
            countries.push(obj)
        })
        countries.sort((a, b) => a.name.localeCompare(b.name))

        countries.forEach(country => {
            output += `<option>${country.name} ${country.flag}</option>`
            selectDrop.innerHTML = output
        })
    }).catch(err => {
        console.log(err)
    })
} )