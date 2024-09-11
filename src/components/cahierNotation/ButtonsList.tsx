import { DataPatient } from '@/@types/dataPatient'
import { arrayOfKeys } from '@/data/arrayOfKeys';
import { deleteSinglePatient, getListeFromLocalStorage } from '@/utils/localStorageActions';
import React, { Dispatch, FC, SetStateAction } from 'react'
import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineFileUpload } from 'react-icons/md';

type ButtonsListProps = {
  modify: boolean
  setModify: Dispatch<SetStateAction<boolean>>
  generatePDF: ()=> void
  saveInLocalStorage: ()=> void
  nom: string
  prenom: string
  resetState: ()=> void
  patientsListe: DataPatient[]
  setPatientsListe: Dispatch<SetStateAction<DataPatient[]>>
  loadDataPatient: (arrayOfSetter: (Dispatch<SetStateAction<string>>)[], valuesListe: string[])=> void
  arrayOfSetter: Dispatch<SetStateAction<string>>[]
}

const ButtonsList: FC<ButtonsListProps> = ({modify, setModify, generatePDF, saveInLocalStorage, resetState, nom, prenom, patientsListe, setPatientsListe, loadDataPatient, arrayOfSetter}) => {

  const deletePatient = (nom: string, prenom:string, patientsListe: DataPatient[])=> {
    deleteSinglePatient(nom, prenom, patientsListe)

    const res = getListeFromLocalStorage("testMBA")
    setPatientsListe(res)
  }

  const getSinglePatientsValues = (nom: string, prenom: string): string[]=> {
    const liste = getListeFromLocalStorage("testMBA")
    const patientData = liste.filter((data: DataPatient)=> data.nom === nom && data.prenom === prenom)[0]

    console.log(patientData)

    const valuesListe = Object.values(patientData)
    return valuesListe

  }

  return (
    <>
      <div className='absolute flex flex-col'>
        <button className={`${modify ? "bg-green-700":"bg-slate-500"} transition-all duration-100 text-white rounded-md p-2 m-3`} onClick={()=>setModify(prev=> !prev)}>
          {modify ? "Visualiser le PDF":"Modifier le formulaire"}
        </button>
        <button className={`${!modify ? "bg-green-700" : "bg-slate-200"} transition-all duration-100 text-white rounded-md p-2 m-3`} onClick={()=>generatePDF()} disabled={modify}>Télécharger le pdf</button>
      </div>
      <div className='absolute flex right-5 flex-col'>
        <button 
          className={`${(!nom || !prenom) ? "bg-gray-300" : "bg-blue-700"}  cursor-pointer transition-all duration-100 text-white rounded-md p-2 m-3`} 
          disabled={!nom || !prenom} 
          onClick={()=>saveInLocalStorage()}
        >
          Sauvegarder les données
        </button>
        <button className={`${!modify ? "bg-gray-300" : "bg-red-700"}  transition-all duration-100 text-white rounded-md p-2 m-3`} disabled={!modify} onClick={()=>resetState()}>
          Effacer les données actuelles
        </button>
        {
          patientsListe.length>0 && modify
          &&
          <div className='bg-white p-2.5 rounded-md'>
            <p className='text-xs font-bold'>Données patients enregistrées :</p>
            <ul className='text-xs rounded-md'>
              {
                patientsListe.map((data: DataPatient, index: number)=> (
                  <li key={index} className='bg-gray-200 p-2 mt-1 rounded-md flex items-center justify-between'>
                    <p>
                      {data.nom} {data.prenom}
                    </p>
                    <div className='flex gap-4'>
                      <MdOutlineFileUpload size={18} color='blue' className='cursor-pointer' onClick={()=> loadDataPatient(arrayOfSetter, getSinglePatientsValues(data.nom, data.prenom))} />
                      <IoTrashBinSharp color='red' size={15} className='cursor-pointer' onClick={()=>deletePatient(data.nom, data.prenom, patientsListe)}/>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    </>
  )
}

export default ButtonsList
