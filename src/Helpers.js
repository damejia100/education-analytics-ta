//use to remove '_' from data labels
export const formatLabel = label => label.replace(/_/g, ' ')

//converts decimal data to percentage
export const percentage = num => Math.round(num*100)

//converts obj to arr
export const makeEntries = obj => Object.entries(obj)

export const apiLink = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=${process.env.REACT_APP_DATA_GOV_API_KEY}`
