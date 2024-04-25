'use client'

import React, { FC, useState } from 'react'
import PageA4 from '../layout/PageA4'
import TopFormComponents from './TopFormComponents'
import BottomFormComponents from './BottomFormComponents'

const CahierNotations: FC = () => {
  const [nom, setNom] = useState<string>("")
  const [prenom, setPrenom] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [classe, setClasse] = useState<string>("")
  const [dateTest, setDateTest] = useState<string>("")

  return (
    <>
      <button className="absolute bg-slate-500 text-white rounded-md p-2 m-3">Télécharger le pdf</button>
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
      </PageA4>
      {/* <PdfDocument
        nom={nom}
        prenom={prenom}
        age={age}
        classe={classe}
        dateTest={dateTest}
      /> */}
    </>
  )
}

export default CahierNotations