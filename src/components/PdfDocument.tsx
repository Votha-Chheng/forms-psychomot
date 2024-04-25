import React, { FC } from 'react'
import BottomFormComponents from './cahierNotation/BottomFormComponents'
import { Page, Document } from '@react-pdf/renderer'

type PdfDocumentProps = {
  nom: string
  prenom: string
  age: number
  classe: string
  dateTest: string
}

const PdfDocument: FC<PdfDocumentProps> = ({nom, prenom, age, classe, dateTest}) => {
  return (
    <Document>
      <Page size="A4" style={{width:"21cm", height:"29.7cm", backgroundColor:"white", padding:5}}>
        <h2 className='text-center text-2xl'>Cahier de notation</h2>
        <section className='border-black border text-sm mb-5 p-2'>
          <div className='flex w-full my-5'>
            <article className='w-[18cm]'>
              <span>Nom : </span>
              <span className='font-bold'>{nom}</span>
            </article>
            <article className='w-[15%]'>
              <span >Âge : </span>
              <span>{age}</span>
            </article>
          </div>
          <div className='flex w-full my-5'>
            <article className='w-full'>
              <span >Prénom : </span>
              <span>{prenom}</span>
            </article>
          </div>
          <div className='flex w-full my-5'>
            <article className='w-[12.5cm]'>
              <span>Date de l'examen : </span>
              <span>{dateTest}</span>
            </article>
            <article className='w-[9cm]'>
              <span>Classe actuelle : </span>
              <span>{classe}</span>
            </article>
          </div>
        </section>
        <BottomFormComponents/>
      </Page>
    </Document>
  )
}

export default PdfDocument