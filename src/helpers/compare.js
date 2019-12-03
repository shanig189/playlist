export default (sortOptionName, a, b) => {
    const elemA = a[sortOptionName].toUpperCase();
    const elemB = b[sortOptionName].toUpperCase();
  
    let comparison = 0;
    if (elemA > elemB) {
      comparison = 1;
    } else if (elemA < elemB) {
      comparison = -1;
    }
    return comparison;
}