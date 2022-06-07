document.addEventListener('DOMContentLoaded', () => {
   
    const selectDrop = document.getElementById('countries')
    const selectDrop2 = document.getElementById('countries2')

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
            selectDrop2.innerHTML = output
        })
    }).catch(err => {
        console.log(err)
    })
} )


const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
let output2 = `<option>select state...</option>`
const selectDrop2 = document.getElementById('inputState')
const selectDrop3 = document.getElementById('inputState2')
const mapstates = () => {
    states.forEach(state => {
        output2 += `<option>${state}</option>`

    })
    selectDrop2.innerHTML = output2
    selectDrop3.innerHTML = output2
}

mapstates()
