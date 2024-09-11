import { DataPatient } from "@/@types/dataPatient"

export const getListeFromLocalStorage = (nomObj: string): DataPatient[]=> {
  const liste = localStorage.getItem(nomObj)

  if(!liste) return []

  const listePatients = JSON.parse(liste as string)

  return listePatients
}


export const deleteSinglePatient = (nom: string, prenom: string, patientsListe: DataPatient[])=> {
  const slicedListe = patientsListe.filter((data: DataPatient)=> data.nom !== nom && data.prenom !== prenom)

  localStorage.setItem("testMBA",JSON.stringify(slicedListe))
  
}