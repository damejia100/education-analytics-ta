//use to remove '_' from data labels
export const formatLabel = text => text.replace('_', ' ');

//converts decimal data to percentage
export const percentage = num => Math.round(num*100)

//converts obj to arr
export const makeEntries = obj => Object.entries(obj)
