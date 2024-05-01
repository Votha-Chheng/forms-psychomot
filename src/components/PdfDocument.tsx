import React, { FC, ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'
import FourRowsCells from './pdfCahierNotation/FourRowsCells'
import ThreeCellsPDF from './pdfCahierNotation/ThreeCellsPDF'
import TwoVerticalCellsPDF from './pdfCahierNotation/TwoVerticalCellsPDF'

type PdfDocumentProps = {
  nom: string
  prenom: string
  age: number
  classe: string
  dateTest: string
  comment: string
}


const PdfDocument: ForwardRefExoticComponent<PdfDocumentProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, PdfDocumentProps> (({nom, prenom, age, classe, dateTest, comment}, ref) => {
  return (
    <main className='w-[21cm] h-[29.7cm] mx-auto px-2 bg-white mt-2' ref={ref} >
      <h2 className='text-center mb-2.5 -pt-2.5 font-bold uppercase'>Cahier de notation</h2>
      <section className='border-black border text-sm p-2'>
        <div className='flex w-full my-5'>
          <article className='w-[18cm]'>
            <span>Nom : </span> <span className='font-bold'>{nom}</span>
          </article>
          <article className='w-[15%]'>
            <span>Âge : </span><span className='font-bold'>{age}</span>
          </article>
        </div>
        <div className='flex w-full my-5'>
          <article className='w-full'>
          <span>Prénom : </span> <span className='font-bold'>{prenom}</span>
          </article>
        </div>
        <div className='flex w-full my-5'>
          <article className='w-[12.5cm]'>
            <span>Date du test : </span> <span className='font-bold'>{dateTest}</span>
          </article>
          <article className='w-[9cm]'>
            <span>Classe actuelle : </span> <span className='font-bold'>{classe}</span>
          </article>
        </div>
      </section>
      <section className='flex'>
        <div className='w-[50%]'>
          <h2 className='text-[12.5px] font-bold leading-[30px]'>Notes d&apos;items et notes standard correspondantes</h2>
          <FourRowsCells bold={true} cell1="Code de l&apos;item" cell2="Nom de l&apos;item" cell3="Note brute (meilleur essai)" cell4="Note standard de l&apos;item"/>
          <div className='w-full flex'>
            <div className='min-w-[70px] border-l border-r border-b border-black flex items-center pl-1 text-[12.5px]'>
              DM1
            </div>
            <TwoVerticalCellsPDF
              top='Placer chevilles main préférée'
              bottom='Placer chevilles main non préférée'
              minWidth='96px'
              maxWidth='96px'
            />
            <TwoVerticalCellsPDF
              top='Placer chevilles main préférée'
              bottom='Placer chevilles main non préférée'
              minWidth="118px"
              maxWidth="118px"
            />
            <ThreeCellsPDF
              topLeft='65'
              bottomLeft='65'
              right='12'
            />
          </div>
          <FourRowsCells borderTop={false} bold={false} cell1="DM2" cell2="Lacet" cell3="DM2NoteBrute" cell4="DM2NoteStandard"/>
          <FourRowsCells borderTop={false} bold={false} cell1="DM3" cell2="Trajet 2" cell3="DM3NoteBrute" cell4="DM3NoteStandard"/>
          <div className='h-2.5' />
          <FourRowsCells bold={false} cell1="VA1" cell2="Attrapper avec 2 mains" cell3="DM2NoteBrute" cell4="DM2NoteStandard"/>
          <FourRowsCells borderTop={false} bold={false} cell1="VA2" cell2="Lancer sac" cell3="DM3NoteBrute" cell4="DM3NoteStandard"/>
          <div className='h-2.5' />
          <div className='w-full flex border-t border-black'>
            <div className='min-w-[70px] border-l border-r border-b border-black flex items-center pl-1 text-[12.5px]'>
              &Eacute;q1
            </div>
            <TwoVerticalCellsPDF
              top='Éq. sur planche meilleure jambe'
              bottom='Éq. sur planche autre jambe'
              minWidth='96px'
              maxWidth='96px'
            />
            <TwoVerticalCellsPDF
              top='EQ1A1Top'
              bottom='EQ1A2Bottom'
              minWidth="118px"
              maxWidth="118px"
            />
            <ThreeCellsPDF
              topLeft='EQ1A2Top'
              bottomLeft='EQ1A2Bottom'
              right='EQ1NoteStandard'
            />
          </div>
          <FourRowsCells borderTop={false} bold={false} cell1="&Eacute;q2" cell2="Marcher T/P en avant" cell3="Eq2NoteBrute" cell4="Eq2NoteStandard"/>
          <div className='w-full flex'>
            <div className='min-w-[70px] border-l border-r border-b border-black flex items-center pl-1 text-[12.5px]'>
              &Eacute;q3
            </div>
            <TwoVerticalCellsPDF
              top='Sauter à cloche-pied meilleure jambe'
              bottom='Sauter à cloche-pied autre jambe'
              minWidth='96px'
              maxWidth='96px'
            />
            <TwoVerticalCellsPDF
              top='EQ3A1Top'
              bottom='EQ3A2Bottom'
              minWidth="118px"
              maxWidth="118px"
            />
            <ThreeCellsPDF
              topLeft='EQ3A2Top'
              bottomLeft='EQ3A2Bottom'
              right='EQ3NoteStandard'
            />
          </div>
          <div className='h-2.5' />
          <div className='w-full text-[12.5px] border border-black flex px-1.5'>
            <div className='w-2/3 border-r border-black h-[50px]'>
              <span className='font-bold'>Note totale de test</span><br/>
              <span>Somme des notes standard des 8 items</span>
            </div>
            <div className='text-center px-2 pt-1 w-1/3'>
              Note totale
            </div>
          </div>
        </div>
        <div className='w-[10%] min-h-full relative'>
          <div className='absolute border-r-2 border-t-2 border-b-2 border-black h-[103px] w-1/2 top-[138px]'/>
          <div className='absolute right-0.5 top-[170px] w-1/2'>
            <svg fill="#000000" height="38.5px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
            </svg>
          </div>

          <div className='absolute border-r-2 border-t-2 border-b-2 border-black h-[42px] w-1/2 top-[295px]'/>
          <div className='absolute right-0.5 top-[295px] w-1/2'>
            <svg fill="#000000" height="38.5px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
            </svg>
          </div>

          <div className='absolute border-r-2 border-t-2 border-b-2 border-black h-[212px] w-1/2 top-[405px]'/>
          <div className='absolute right-0.5 top-[495px] w-1/2'>
            <svg fill="#000000" height="38.5px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
            </svg>
          </div>
          <div className='absolute top-[645px] w-1/2'>
            <svg width="77px" height="60px" viewBox="0 0 913 459" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M354.591 197.75H822.214L734.652 290.775C724.267 301.806 724.267 319.694 734.652 330.727C739.844 336.241 746.65 339 753.455 339C760.261 339 767.066 336.241 772.257 330.725L905.212 189.474C915.596 178.444 915.596 160.556 905.212 149.523L772.257 8.27302C761.874 -2.75767 745.037 -2.75767 734.652 8.27302C724.267 19.3037 724.267 37.1917 734.652 48.2242L822.214 141.25H354.591C339.906 141.25 328 153.898 328 169.5C328 185.101 339.906 197.75 354.591 197.75Z" fill="black"
              />
              <line x1="343" y1="459.002" x2="343" y2="141" stroke="black" stroke-width="50"/>
              <line y1="434" x2="318.002" y2="434" stroke="black" stroke-width="50"/>
            </svg>
          </div>
        </div>
        <article className='w-[40%] relative'>
          <div className='absolute text-[12.5px] w-full top-[120px]'>
            <h3 className='font-bold pb-2'>
              Trois notes de composantes
            </h3>
            <div className='border-black border font-bold px-1.5 pb-2.5'>
              Dextérité manuelle DM1 + DM2 + DM3
            </div>
            <div className='border-black border-l border-r border-b px-1.5 flex w-full'>
              <div className='border-r border-black pb-2.5 w-2/3'>
                Note de composante : <br/>
                <span className='font-bold'>DM1 + DM2 + DM3</span>
              </div>
              <div className='pb-2.5 pl-1 w-1/3'>
                Percentile : <br/>
                <span className='font-bold'>DM1 + DM2 + DM3</span>
              </div>
            </div>
          </div>
          <div className='absolute text-[12.5px] w-full top-[270px]'>
            <div className='border-black border font-bold px-1.5 pb-2.5'>
              Viser et attrapper VA1 + VA2
            </div>
            <div className='border-black border-l border-r border-b px-1.5 flex w-full'>
              <div className='border-r border-black pb-2.5 w-2/3'>
                Note de composante : <br/>
                <span className='font-bold'>VA1 + VA2</span>
              </div>
              <div className='pb-2.5 pl-1 w-1/3'>
                Percentile : <br/>
                <span className='font-bold'>VA1 + VA2</span>
              </div>
            </div>
          </div>
          <div className='absolute text-[12.5px] w-full top-[470px]'>
            <div className='border-black border font-bold px-1.5 pb-2.5'>
              Équilibre Éq1 + Éq2 + Éq3
            </div>
            <div className='border-black border-l border-r border-b px-1.5 flex w-full'>
              <div className='border-r border-black pb-2.5 w-2/3'>
                Note de composante : <br/>
                <span className='font-bold'>Éq1 + Éq2 + Éq3</span>
              </div>
              <div className='pb-2.5 pl-1 w-1/3'>
                Percentile : <br/>
                <span className='font-bold'>Éq1 + Éq2 + Éq3</span>
              </div>
            </div>
          </div>
          <div className='absolute text-[12.5px] w-full top-[640px] border-t border-black'>
            <div className='border-black border-l border-r border-b px-1.5 flex w-full'>
              <div className='border-r border-black pb-2.5 w-2/3 font-bold'>
                Note totale de test
              </div>
              <div className='pb-2.5 pl-1 w-1/3'>
                Rang percentile
              </div>
            </div>
            <div className='border-black border-l border-r border-b px-1.5 flex w-full'>
              <div className='border-r border-black pb-2.5 w-2/3'>
                Note totale
              </div>
              <div className='pb-2.5 pl-1 w-1/3'>
                Percentile
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
})

PdfDocument.displayName = 'PdfDocument';

export default PdfDocument