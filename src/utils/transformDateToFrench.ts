export const transformDateToFrench = (date: string, noDay: boolean = false): string => {
  const dateEntiere = `${new Date(date).toLocaleDateString('fr-FR', {weekday:"long"}).toUpperCase()} ${new Date(date).toLocaleString()}` 
  const temp = dateEntiere.split(' ')
  
  return noDay ? temp[1] : `${temp[0]} ${temp[1]}`
}
