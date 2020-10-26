import countries from './countries'
import axios from 'axios' 

const URL = 'https://api.reliefweb.int/v1/disasters?appname=omundoagora&profile=full&offset=0&limit=10&preset=latest'

function getAffectedCountries() {
  let affectedCountries = []
  return axios.get(URL).then(result => {
    result.data.data.forEach(disaster => {
      affectedCountries.push(countries.find( country => country.iso3 == disaster.fields.country[0].iso3))
    })
    return affectedCountries
  })
}

export default getAffectedCountries