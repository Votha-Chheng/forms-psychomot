import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'
import { transformDateToFrench } from '@/utils/transformDateToFrench'
import { DataBottomFormCommponent } from '@/@types/CahierNotationProps'

type PdfDocumentProps = DataBottomFormCommponent & {
  nom: string
  prenom: string
  age: string
  classe: string
  dateTest: string
  comment: string
}


const PdfDocument: ForwardRefExoticComponent<PdfDocumentProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, PdfDocumentProps> ((
  {
    nom, 
    prenom, 
    age, 
    classe, 
    dateTest, 
    comment,
    percentileTotal,
    DMScoreTotal,
    VAScoreTotal,
    DM1a1Top,
    DM1a2Top,
    DM1a1Bottom,
    DM1a2Bottom,
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
    eq1a1Top, 
    eq1a1Bottom, 
    eq1a2Top, 
    eq1a2Bottom, 
    eq2NoteBrute,
    eq2NoteStandard,  
    eq3a1Top,
    eq3a1Bottom,
    eq3a2Top,
    eq3a2Bottom,
    eqScoreTotal,
    eqPercentile,
    scoreTotalTest
  }, ref
) => {

  const theadClassName = (additionnalClassName: string)=> {
    return `text-xs text-left border-b border-black ${additionnalClassName}`
  }

  const theadCellClassName = (additionnalClassName: string)=> {
    return `text-xs px-1 border-x border-black ${additionnalClassName}`
  }

  const tdCellClassName = (additionnalClassName: string)=> {
    return `p-1 border border-black ${additionnalClassName}`
  }

  const wColOne = "w-[54px]"
  const wColTwo = "w-[160px]"
  const wColThree = "w-[72px]"

  const cellResultatClassName = `bg-white rounded-full w-7 h-6 mx-auto pt-1`
 
  return (
    <main className='w-[21cm] h-[29.7cm] mx-auto px-5 py-2.5 bg-white mt-2' ref={ref} >
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
            <span>Date du test : </span> <span className='font-bold'>{transformDateToFrench(dateTest)}</span>
          </article>
          <article className='w-[9cm]'>
            <span>Classe actuelle : </span> <span className='font-bold'>{classe}</span>
          </article>
        </div>
      </section>

      <h2 className='text-[12.5px] font-bold leading-[25px] mt-5'>Notes d&apos;items et notes standard correspondantes</h2>

      <section className='flex'>
        <article className='w-1/2'>
          <table className='w-full border-black border border-collapse border-spacing-0 mb-5'>
            <thead className={theadClassName("")}>
              <tr>
                <th className={theadCellClassName(wColOne)}>Code de l&apos;item</th>
                <th className={theadCellClassName(wColTwo)}>Nom de l&apos;item</th>
                <th className={theadCellClassName(wColThree)}>Note brute <span className='text-[8px]'>(meilleur essai)</span></th>
                <th colSpan={2} className={theadCellClassName("")}>Note standard de l&apos;item</th>
              </tr>
            </thead>
            <tbody className='text-xs border-collapse border-spacing-0'>
              <tr className=''>
                <th rowSpan={2} className='text-left px-2 border-x border-black'>
                  DM1
                </th>
                <td className='border-x border-black p-1'>Placer chevilles main préférée</td>
                <td className='text-center border-x border-black'>{DM1a1Top}</td>
                <td className='text-center border-x border-black bg-green-300'>
                  <div className={cellResultatClassName}>{DM1a2Top}</div>
                </td>
                <td rowSpan={2} className='text-center border-x border-black w-[40px] bg-green-600'>
                  <div className={cellResultatClassName}>{`${((+DM1a2Bottom) + (+DM1a2Top))/2}`}</div>
                </td>
              </tr>
              <tr>
                <td className='border border-black p-1'>
                  Placer chevilles main non préférée
                </td>
                <td className='border border-black p-2 text-center'>
                  {DM1a1Bottom}
                </td>
                <td className='border border-black p-2 text-center bg-green-300'>
                  <div className={cellResultatClassName}>
                    {DM1a2Bottom}
                  </div>
                </td>
              </tr>
              <tr className='border-black border'>
                <th className='text-left p-2'>
                  DM2
                </th>
                <td className={tdCellClassName("")}>
                  Lacet
                </td>
                <td className={tdCellClassName("text-center")}>
                  {DM2NoteBrute}
                </td>
                <td colSpan={2} className={tdCellClassName("text-center bg-green-600")}>
                  <div className={cellResultatClassName}>
                    {DM2NoteStandard}
                  </div>
                </td>
              </tr>
              <tr>
                <th className='text-left p-2'>
                  DM3
                </th>
                <td className={tdCellClassName("")}>
                  Trajet 2
                </td>
                <td className={tdCellClassName("text-center")}>
                  {DM3NoteBrute}
                </td>
                <td colSpan={2} className={tdCellClassName("text-center bg-green-600")}>
                  <div className={cellResultatClassName}>
                    {DM3NoteStandard}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table className='w-full text-xs mb-5'>
            <tbody>
              <tr>
                <th className={'text-left p-2 border border-black '+ wColOne}>
                  VA1
                </th>
                <td className={tdCellClassName(wColTwo)}>
                  Attrapper avec 2 mains
                </td>
                <td className={tdCellClassName(`${wColThree} text-center`)}>
                  {VA1NoteBrute}
                </td>
                <td colSpan={2} className={tdCellClassName(`text-center bg-blue-400`)}>
                  <div className={cellResultatClassName}>
                    {VA1NoteStandard}
                  </div>
                </td>
              </tr>
              <tr>
                <th className={'text-left p-2 border border-black '+ wColOne}>
                  VA2
                </th>
                <td className={tdCellClassName(wColTwo)}>         
                  Lancer sac
                </td>
                <td className={tdCellClassName(`${wColThree} text-center`)}>
                  {VA2NoteBrute}
                </td>
                <td colSpan={2} className={tdCellClassName(`text-center bg-blue-400`)}>
                  <div className={cellResultatClassName}>
                    {VA2NoteStandard}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table className='w-full text-xs mb-5 border border-black'>
            <tbody>
              <tr className='border-border-black'>
                <th className={theadCellClassName(wColOne + " text-left")} rowSpan={2}>
                  &Eacute;q1
                </th>
                <td className={theadCellClassName(wColTwo)}>
                  Éq. sur planche meilleure jambe
                </td>
                <td className={theadCellClassName(`text-center ${wColThree}`)}>
                  {eq1a1Top}
                </td>
                <td className={theadCellClassName(`text-center bg-purple-500`)}>
                  <div className={cellResultatClassName}>
                    {eq1a2Top}
                  </div>
                </td>
                <td className='bg-purple-700 text-center' rowSpan={2}>
                  <div className={cellResultatClassName}>
                  {((+eq1a2Top) + (+eq1a2Bottom))/2}
                  </div>
                </td>
              </tr>
              <tr>
                <td className={tdCellClassName("")}>
                  Éq. sur planche autre jambe
                </td>
                <td className='border border-black text-center'>
                  {eq1a1Bottom}
                </td>
                <td className='bg-purple-500 text-center border border-black'>
                  <div className={cellResultatClassName}>
                    {eq1a2Bottom}
                  </div>
                </td>
              </tr>
              <tr>
                <th className={'text-left p-1 border border-black '+ wColOne}>
                  &Eacute;q2
                </th>
                <td className={tdCellClassName(wColTwo)}>         
                  Marcher T/P en avant
                </td>
                <td className={tdCellClassName(`${wColThree} text-center`)}>
                  {eq2NoteBrute}
                </td>
                <td colSpan={2} className={tdCellClassName(`text-center bg-purple-700`)}>
                  <div className={cellResultatClassName}>
                    {eq2NoteStandard}
                  </div>
                </td>
              </tr>
              <tr className='border-border-black'>
                <th className={theadCellClassName(wColOne + " text-left")} rowSpan={2}>
                  &Eacute;q3
                </th>
                <td className={theadCellClassName(wColTwo)}>
                  Sauter à cloche-pied meilleure jambe
                </td>
                <td className={theadCellClassName(`text-center ${wColThree}`)}>
                  {eq3a1Top}
                </td>
                <td className={theadCellClassName(`text-center bg-purple-500`)}>
                  <div className={cellResultatClassName}>
                    {eq3a2Top}
                  </div>
                </td>
                <td className='bg-purple-700 text-center' rowSpan={2}>
                  <div className={cellResultatClassName}>
                  {((+eq3a2Top) + (+eq3a2Bottom))/2}
                  </div>
                </td>
              </tr>
              <tr>
                <td className={tdCellClassName("")}>
                  Sauter à cloche-pied autre jambe
                </td>
                <td className='border border-black text-center'>
                  {eq3a1Bottom}
                </td>
                <td className='bg-purple-500 text-center border border-black'>
                  <div className={cellResultatClassName}>
                    {eq3a2Bottom}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table className='w-full text-xs'>
            <tbody>
              <tr>
                <td className='w-3/5 p-1 border border-black'>
                  <div className='font-bold'>
                    Note totale de test
                  </div>
                  <div className='italic'>
                    Somme des notes standard des 8 items
                  </div>
                </td>
                <td className='p-1 border border-black font-bold text-center'>{scoreTotalTest}</td>
              </tr>
            </tbody>
          </table>
        </article>   

        <article className='w-[10%] min-h-full relative'>
          <div className='absolute border-r-2 border-t-2 border-b-2 border-black h-[95px] w-1/2 top-[90px]'/>
          <div className='absolute right-0.5 top-[120px] w-1/2'>
            <svg fill="#000000" height="38.5px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
            </svg>
          </div>

          <div className='absolute border-r-2 border-t-2 border-b-2 border-black h-[35px] w-1/2 top-[235px]'/>
          <div className='absolute right-0.5 top-[233px] w-1/2'>
            <svg fill="#000000" height="38.5px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
            </svg>
          </div>

          <div className='absolute border-r-2 border-t-2 border-b-2 border-black h-[110px] w-1/2 top-[345px]'/>
          <div className='absolute right-0.5 top-[385px] w-1/2'>
            <svg fill="#000000" height="38.5px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
              s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
              c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
            </svg>
          </div>
          <div className='absolute top-[495px] w-1/2'>
            <svg width="77px" height="60px" viewBox="0 0 913 459" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M354.591 197.75H822.214L734.652 290.775C724.267 301.806 724.267 319.694 734.652 330.727C739.844 336.241 746.65 339 753.455 339C760.261 339 767.066 336.241 772.257 330.725L905.212 189.474C915.596 178.444 915.596 160.556 905.212 149.523L772.257 8.27302C761.874 -2.75767 745.037 -2.75767 734.652 8.27302C724.267 19.3037 724.267 37.1917 734.652 48.2242L822.214 141.25H354.591C339.906 141.25 328 153.898 328 169.5C328 185.101 339.906 197.75 354.591 197.75Z" fill="black"
              />
              <line x1="343" y1="459.002" x2="343" y2="141" stroke="black" strokeWidth="50"/>
              <line y1="434" x2="318.002" y2="434" stroke="black" strokeWidth="50"/>
            </svg>
          </div>
        </article>

        <article className='w-[40%] relative'>
          <h3 className='font-bold text-xs p-2 absolute top-[70px]'>
            Trois notes de composantes
          </h3>
          <table className='text-xs w-full absolute top-[98px]'>
            <tbody>
              <tr>
                <th colSpan={2} className='border-black border font-bold p-1.5 text-left'>
                  Dextérité manuelle DM1 + DM2 + DM3
                </th>
              </tr>
              <tr>
                <td className='border border-black w-3/5'>
                  <div className='px-2'>
                    Note de composante :
                  </div>
                  <div className='px-2 text-right font-bold text-green-700'>
                    {DMScoreTotal}
                  </div>
                </td>
                <td className='border border-black'>
                  <div className='px-2'>
                    Percentile:
                  </div>
                  <div className='font-bold text-right px-2'>
                    {+DMPercentile}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className='text-xs w-full absolute top-[225px]'>
            <tbody>
              <tr>
                <th colSpan={2} className='border-black border font-bold p-1.5 text-left'>
                  Viser et attrapper VA1 + VA2
                </th>
              </tr>
              <tr>
                <td className='border border-black w-3/5'>
                  <div className='px-2'>
                    Note de composante :
                  </div>
                  <div className='px-2 text-right font-bold text-blue-500'>
                    {VAScoreTotal}
                  </div>
                </td>
                <td className='border border-black'>
                  <div className='px-2'>
                    Percentile:
                  </div>
                  <div className='font-bold text-right px-2'>
                    {+VAPercentile}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table className='text-xs w-full absolute top-[365px]'>
            <tbody>
              <tr>
                <th colSpan={2} className='border-black border font-bold p-1.5 text-left'>
                  Équilibre Éq1 + Éq2 + Éq3
                </th>
              </tr>
              <tr>
                <td className='border border-black w-3/5'>
                  <div className='px-2'>
                    Note de composante :
                  </div>
                  <div className='px-2 text-right font-bold text-purple-700'>
                    {eqScoreTotal}
                  </div>
                </td>
                <td className='border border-black'>
                  <div className='px-2'>
                    Percentile:
                  </div>
                  <div className='font-bold text-right px-2'>
                    {+eqPercentile}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table className='text-xs border border-black w-full absolute top-[495px]'>
            <thead>
              <tr>
                <th className='border border-black w-3/5'>
                  Note totale de test
                </th>
                <th className='border border-black w-3/5'>
                  Rang percentile
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-black text-center font-bold p-1'>
                  {scoreTotalTest}
                </td>
                <td className='text-center font-bold p-1'>
                  {percentileTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>

      <section className='mt-5'>
        <h3 className='text-sm font-bold'>Commentaires et remarques</h3>
        <div className='border border-black w-full h-40 p-2 text-xs' dangerouslySetInnerHTML={{__html: comment}}/>
      </section>
    </main>
  )
})

PdfDocument.displayName = 'PdfDocument';

export default PdfDocument