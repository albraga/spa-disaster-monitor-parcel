import countries from './countries'
import superagent from 'superagent'

const URL = 'https://api.reliefweb.int/v1/disasters?appname=omundoagora&profile=full&offset=0&limit=10&preset=latest'

function getAffectedCountries() {
  let affectedCountries = []
  return superagent.get(URL).then(result => {
    result.body.data.forEach(disaster => {
      affectedCountries.push(countries.find(country => country.iso3 == disaster.fields.country[0].iso3))
    })
    return affectedCountries
  })
}

export default getAffectedCountries