'use client'

import React, { Dispatch, FC, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import PageA4 from '../layout/PageA4'
import TopFormComponents from './TopFormComponents'
import BottomFormComponents from './BottomFormComponents'
import PdfDocument from '../PdfDocument'
import { useReactToPrint } from 'react-to-print'
import dynamic from 'next/dynamic'
import { transformDateToFrench } from '@/utils/transformDateToFrench'
import { mapDataForLocalStorage } from '@/utils/mapDataForLocalStorage'
import { DataPatient } from '@/@types/dataPatient'
import { getListeFromLocalStorage } from '@/utils/localStorageActions'
import ButtonsList from './ButtonsList'

const DynamicCommentSection = dynamic(()=> import("../shared/CommentSection"), {ssr: false} )

const CahierNotations: FC = () => {
  const [patientsInLocalStorage, setPatientsInLocalStorage] = useState<DataPatient[]>([])
  const [modify, setModify] = useState<boolean>(true)
  const [nom, setNom] = useState<string>("")
  const [prenom, setPrenom] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [classe, setClasse] = useState<string>("")
  const [dateTest, setDateTest] = useState<string>("")
  const [comment, setComment] = useState<string>("")

  const [DM1a1Top, setDM1a1Top] = useState<string>("")
  const [DM1a2Top, setDM1a2Top] = useState<string>("")
  const [DM1a1Bottom, setDM1a1Bottom] = useState<string>("")
  const [DM1a2Bottom, setDM1a2Bottom] = useState<string>("")

  const [DM2NoteBrute, setDM2NoteBrute] = useState<string>("")
  const [DM2NoteStandard, setDM2NoteStandard] = useState<string>("")

  const [DM3NoteBrute, setDM3NoteBrute] = useState<string>("")
  const [DM3NoteStandard, setDM3NoteStandard] = useState<string>("")

  const [DMPercentile, setDMPercentile] = useState<string>("")

  const [VA1NoteBrute, setVA1NoteBrute] = useState<string>("")
  const [VA1NoteStandard, setVA1NoteStandard] = useState<string>("")
  const [VA2NoteBrute, setVA2NoteBrute] = useState<string>("")
  const [VA2NoteStandard, setVA2NoteStandard] = useState<string>("")
  const [VAPercentile, setVAPercentile] = useState<string>("")

  const [eq1a1Top, setEq1a1Top] = useState<string>("")
  const [eq1a1Bottom, setEq1a1Bottom] = useState<string>("")
  const [eq1a2Top, setEq1a2Top] = useState<string>("")
  const [eq1a2Bottom, setEq1a2Bottom] = useState<string>("")

  const [eq2NoteBrute, setEq2NoteBrute] = useState<string>("")
  const [eq2NoteStandard, setEq2NoteStandard] = useState<string>("")

  const [eq3a1Top, setEq3a1Top] = useState<string>("")
  const [eq3a1Bottom, setEq3a1Bottom] = useState<string>("")
  const [eq3a2Top, setEq3a2Top] = useState<string>("")
  const [eq3a2Bottom, setEq3a2Bottom] = useState<string>("")

  const [eqPercentile, setEqPercentile] = useState<string>("")

  const [percentileTotal, setPercentileTotal] = useState<string>("")

  const DM1End = useMemo(()=> {
    return (DM1a2Top !== "" && DM1a2Bottom !=="") ? (((+DM1a2Top) + (+DM1a2Bottom)) / 2).toString() : "Vide"
  }, [DM1a2Top, DM1a2Bottom])

  const eq1End = useMemo(()=> {
    return (eq1a2Top !== "" && eq1a2Bottom !=="") ? (((+eq1a2Top) + (+eq1a2Bottom)) / 2).toString() : "Vide"
  }, [eq1a2Top, eq1a2Bottom])

  const eq3End = useMemo(()=> {
    return (eq3a2Top !== "" && eq3a2Bottom !=="") ? (((+eq3a2Top) + (+eq3a2Bottom)) / 2).toString() : "Vide"

  }, [eq3a2Top, eq3a2Bottom])

  const DMScoreTotal = useMemo(()=> {
    return (DM1End !== "Vide" && DM2NoteStandard !== "" && DM3NoteStandard!== "") ? ((+DM1End) + (+DM2NoteStandard) + (+DM3NoteStandard)).toString() :"Remplir toutes les valeurs DM"
    
  }, [DM1End, DM2NoteStandard, DM3NoteStandard])

  const VAScoreTotal = useMemo(()=> {
    return (VA1NoteStandard !== "" && VA2NoteStandard!== "") ? ((+VA1NoteStandard) + (+VA2NoteStandard)).toString() :"Remplir toutes les valeurs VA"

  }, [VA1NoteStandard, VA2NoteStandard])

  const eqScoreTotal = useMemo(()=> {
    return (eq1End !== "Vide" && eq2NoteStandard !== "" && eq3End !== "Vide") ? ((+eq1End) + (+eq2NoteStandard) + (+eq3End)).toString() :"Remplir toutes les valeurs Eq."

  }, [eq1End, eq2NoteStandard, eq3End])


  const scoreTotalTest: string = useMemo(()=> {
    return (
      DMScoreTotal !== "Remplir toutes les valeurs DM" 
      && VAScoreTotal !== "Remplir toutes les valeurs VA" 
      && eqScoreTotal !== "Remplir toutes les valeurs Eq."
    )
    ? ((+DMScoreTotal) + (+VAScoreTotal) + (+eqScoreTotal)).toString() :"En attente des résultats des 8 items"

  }, [DMScoreTotal, VAScoreTotal, eqScoreTotal])

  const documentRef = useRef(null)

  const generatePDF = useReactToPrint({
    content: () => documentRef.current,
    documentTitle: `${nom} - ${prenom} - ${transformDateToFrench(dateTest, true) }`,
    
  })

  const arrayOfState = mapDataForLocalStorage([
    DM1a1Bottom,  
    DM1a1Top,
    DM1a2Bottom,
    DM1a2Top,
    DM2NoteBrute,
    DM2NoteStandard,
    DM3NoteBrute,
    DM3NoteStandard,
    DMPercentile,
    VA1NoteBrute,
    VA1NoteStandard,  
    VA2NoteBrute,  
    VA2NoteStandard,  
    VAPercentile,  
    age,
    classe,  
    comment,  
    dateTest,  
    eq1a1Bottom,  
    eq1a1Top,  
    eq1a2Bottom,  
    eq1a2Top,  
    eq2NoteBrute,  
    eq2NoteStandard,  
    eq3a1Bottom,  
    eq3a1Top,  
    eq3a2Bottom,  
    eq3a2Top,  
    eqPercentile,  
    nom,
    percentileTotal,
    prenom,
  ])

  const saveInLocalStorage = ()=> {
    const data = localStorage.getItem("testMBA")

    console.log(data)

    let newListe

    if(data){
      const liste: DataPatient[] = JSON.parse(data)
      const arrayResult = liste.filter((data: DataPatient)=> data.nom === nom && data.prenom === prenom) 

      if(arrayResult.length>0){
        const newArray = liste.filter((data: DataPatient)=> data.nom !== nom && data.prenom !== prenom) 
        newListe = [...newArray, arrayOfState]
      } else {
        newListe = [...liste, arrayOfState]
      }
    } else {
      newListe = [arrayOfState]
    }
    
    localStorage.setItem("testMBA", JSON.stringify(newListe))

    const res = getListeFromLocalStorage("testMBA")
    setPatientsInLocalStorage(res)
  }

  const resetState = ()=> {
    setNom("")
    setPrenom("")
    setAge("")
    setClasse("")
    setDateTest("")
    setComment("")
    setDM1a1Top("")
    setDM1a2Top("")
    setDM1a1Bottom("")
    setDM1a2Bottom("")
    setDM2NoteBrute("")
    setDM2NoteStandard("")
    setDM3NoteBrute("")
    setDM3NoteStandard("")
    setDMPercentile("")
    setVA1NoteBrute("")
    setVA1NoteStandard("")
    setVA2NoteBrute("")
    setVA2NoteStandard("")
    setVAPercentile("")
    setEq1a1Top("")
    setEq1a1Bottom("")
    setEq1a2Top("")
    setEq1a2Bottom("")
    setEq2NoteBrute("")
    setEq2NoteStandard("")
    setEq3a1Top("")
    setEq3a1Bottom("")
    setEq3a2Top("")
    setEq3a2Bottom("")
    setEqPercentile("")
    setPercentileTotal("")
  }

  const arrayOfSetter = [
    setDM1a1Bottom,
    setDM1a1Top,
    setDM1a2Bottom,
    setDM1a2Top,
    setDM2NoteBrute,
    setDM2NoteStandard,
    setDM3NoteBrute,
    setDM3NoteStandard,
    setDMPercentile,
    setVA1NoteBrute,
    setVA1NoteStandard,
    setVA2NoteBrute,
    setVA2NoteStandard,
    setVAPercentile,
    setAge,
    setClasse,
    setComment,
    setDateTest,
    setEq1a1Bottom,
    setEq1a1Top,
    setEq1a2Bottom,
    setEq1a2Top,
    setEq2NoteBrute,
    setEq2NoteStandard,
    setEq3a1Bottom,
    setEq3a1Top,
    setEq3a2Bottom,
    setEq3a2Top,
    setEqPercentile,
    setNom,
    setPercentileTotal,
    setPrenom,
  ]

  const loadDataPatient = (arrayOfSetter: (Dispatch<SetStateAction<string>>)[], valuesListe: string[])=> {
    for (let i=0; i<arrayOfSetter.length; i++){
      arrayOfSetter[i](valuesListe[i])
    }
  }

  useEffect(()=> {
    const res = getListeFromLocalStorage("testMBA")
    setPatientsInLocalStorage(res)
  }, [])

  return (
    <>
      <ButtonsList 
        modify={modify} 
        setModify={setModify} 
        saveInLocalStorage={saveInLocalStorage} 
        resetState={resetState} 
        generatePDF={generatePDF} 
        nom={nom} 
        prenom={prenom} 
        patientsListe={patientsInLocalStorage} 
        setPatientsListe={setPatientsInLocalStorage}
        loadDataPatient={loadDataPatient}
        arrayOfSetter={arrayOfSetter}
      />
      {
        modify
        ?
        <PageA4>
          <h2 className='text-center text-2xl mb-2.5'>Cahier de notation</h2>
          <TopFormComponents 
            nom={nom}
            prenom={prenom}
            age={age}
            classe={classe}
            dateTest={dateTest}
            setNom={setNom}
            setAge={setAge}
            setPrenom={setPrenom}
            setDateTest={setDateTest}
            setClasse={setClasse}
          />
          <BottomFormComponents
            eqPercentile={eqPercentile}
            setEqPercentile={setEqPercentile}
            DM1End={DM1End} 
            eq1End={eq1End} 
            eq3End={eq3End} 
            scoreTotalTest={scoreTotalTest}
            DMScoreTotal={DMScoreTotal}
            VAScoreTotal={VAScoreTotal}
            eqScoreTotal={eqScoreTotal}
            percentileTotal={percentileTotal}
            setPercentileTotal={setPercentileTotal}
            DM1a1Top={DM1a1Top}
            setDM1a1Top={setDM1a1Top}
            DM1a2Top={DM1a2Top}
            setDM1a2Top={setDM1a2Top}
            DM1a1Bottom={DM1a1Bottom}
            setDM1a1Bottom={setDM1a1Bottom}
            DM1a2Bottom={DM1a2Bottom}
            setDM1a2Bottom={setDM1a2Bottom}
            DM2NoteBrute={DM2NoteBrute}
            setDM2NoteBrute={setDM2NoteBrute}
            DM2NoteStandard={DM2NoteStandard}
            setDM2NoteStandard={setDM2NoteStandard}
            DM3NoteBrute={DM3NoteBrute} 
            setDM3NoteBrute={setDM3NoteBrute}
            DM3NoteStandard={DM3NoteStandard}
            setDM3NoteStandard={setDM3NoteStandard}
            DMPercentile={DMPercentile} 
            setDMPercentile={setDMPercentile}
            VA1NoteBrute={VA1NoteBrute} 
            setVA1NoteBrute={setVA1NoteBrute}
            VA1NoteStandard={VA1NoteStandard} 
            setVA1NoteStandard={setVA1NoteStandard}
            VA2NoteBrute={VA2NoteBrute} 
            setVA2NoteBrute={setVA2NoteBrute}
            VA2NoteStandard={VA2NoteStandard} 
            setVA2NoteStandard={setVA2NoteStandard}
            VAPercentile={VAPercentile} 
            setVAPercentile={setVAPercentile}
            eq1a1Top={eq1a1Top} 
            setEq1a1Top={setEq1a1Top}
            eq1a1Bottom={eq1a1Bottom} 
            setEq1a1Bottom={setEq1a1Bottom}
            eq1a2Top={eq1a2Top} 
            setEq1a2Top={setEq1a2Top}
            eq1a2Bottom={eq1a2Bottom} 
            setEq1a2Bottom={setEq1a2Bottom}
            eq2NoteBrute={eq2NoteBrute}
            setEq2NoteBrute={setEq2NoteBrute}
            eq2NoteStandard={eq2NoteStandard}
            setEq2NoteStandard={setEq2NoteStandard}
            eq3a1Top={eq3a1Top}
            setEq3a1Top={setEq3a1Top}
            eq3a1Bottom={eq3a1Bottom}
            setEq3a1Bottom={setEq3a1Bottom}
            eq3a2Top={eq3a2Top}
            setEq3a2Top={setEq3a2Top}
            eq3a2Bottom={eq3a2Bottom}
            setEq3a2Bottom={setEq3a2Bottom}
          />
          <DynamicCommentSection text={comment} setText={setComment} />
        </PageA4>
        :
        <PdfDocument
          ref={documentRef}
          nom={nom}
          prenom={prenom}
          age={age}
          classe={classe}
          dateTest={dateTest}
          comment={comment}
          eqPercentile={eqPercentile}
          DM1a1Top={DM1a1Top}
          DM1a2Top={DM1a2Top}
          DM1a1Bottom={DM1a1Bottom}
          DM1a2Bottom={DM1a2Bottom}
          DM2NoteBrute={DM2NoteBrute}
          DM2NoteStandard={DM2NoteStandard}
          DM3NoteBrute={DM3NoteBrute} 
          DM3NoteStandard={DM3NoteStandard}
          DMPercentile={DMPercentile} 
          VA1NoteBrute={VA1NoteBrute} 
          VA1NoteStandard={VA1NoteStandard} 
          VA2NoteBrute={VA2NoteBrute} 
          VA2NoteStandard={VA2NoteStandard} 
          VAPercentile={VAPercentile} 
          eq1a1Top={eq1a1Top} 
          eq1a1Bottom={eq1a1Bottom} 
          eq1a2Top={eq1a2Top} 
          eq1a2Bottom={eq1a2Bottom} 
          eq2NoteBrute={eq2NoteBrute}
          eq2NoteStandard={eq2NoteStandard}
          eq3a1Top={eq3a1Top}
          eq3a1Bottom={eq3a1Bottom}
          eq3a2Top={eq3a2Top}
          eq3a2Bottom={eq3a2Bottom}
          DM1End={DM1End}
          eq1End={eq1End}
          eq3End={eq3End}
          scoreTotalTest={scoreTotalTest}
          DMScoreTotal={DMScoreTotal}
          VAScoreTotal={VAScoreTotal}
          eqScoreTotal={eqScoreTotal}
          percentileTotal={percentileTotal}
        />
      }
    </>
  )
}

export default CahierNotations