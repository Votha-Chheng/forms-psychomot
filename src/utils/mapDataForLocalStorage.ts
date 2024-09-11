import { arrayOfKeys } from "@/data/arrayOfKeys"

export const mapDataForLocalStorage = (arrayOfValues: any[])=> {
  let result = []

  for (let i=0; i<arrayOfKeys.length; i++){
    result.push([arrayOfKeys[i], arrayOfValues[i].toString()])
  }

  const object = Object.fromEntries(result)
  
  return object
}

export const addPatientsDataToLocalStorage = (prevPatientsListe: string, patientStateToAdd: any)=> {
  let patientsListe: any[] = JSON.parse(prevPatientsListe)

  patientsListe.push(patientStateToAdd)

  return patientsListe
}
