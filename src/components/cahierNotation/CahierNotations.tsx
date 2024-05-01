'use client'

import React, { FC, useRef, useState } from 'react'
import PageA4 from '../layout/PageA4'
import TopFormComponents from './TopFormComponents'
import BottomFormComponents from './BottomFormComponents'
import CommentSection from '../shared/CommentSection'
import PdfDocument from '../PdfDocument'
import { useReactToPrint } from 'react-to-print'

const CahierNotations: FC = () => {
  const [modify, setModify] = useState<boolean>(true)
  const [nom, setNom] = useState<string>("")
  const [prenom, setPrenom] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [classe, setClasse] = useState<string>("")
  const [dateTest, setDateTest] = useState<string>("")
  const [comment, setComment] = useState<string>("")

  const documentRef = useRef(null)

  const generatePDF = useReactToPrint({
    content: () => documentRef.current,
    documentTitle: `${nom} - ${prenom} - ${dateTest}`,
    
  })

  return (
    <>
      <div className='absolute flex flex-col'>
        <button className={`${modify ? "bg-green-700":"bg-slate-500"} text-white rounded-md p-2 m-3`} onClick={()=>setModify(prev=> !prev)}>{modify ? "Visualiser le PDF":"Modifier le formulaire"}</button>
        <button className={`${!modify ? "bg-green-700" : "bg-slate-200"} text-white rounded-md p-2 m-3`} onClick={()=>generatePDF()} disabled={modify}>Télécharger le pdf</button>
      </div>
      {
        modify
        ?
        <PageA4>
          <h2 className='text-center text-2xl mb-5'>Cahier de notation</h2>
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
          <BottomFormComponents/>
          <CommentSection text={comment} setText={setComment} />
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

        />
      }
    </>
  )
}

export default CahierNotations