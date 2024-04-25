'use client'

import React, { FC, FormEvent, useEffect, useMemo, useRef, useState } from 'react'

const BottomFormComponents: FC = () => {

  const [DM1a1Top, setDM1a1Top] = useState<string>("")
  const [DM1a2Top, setDM1a2Top] = useState<string>("")
  const [DM1a1Bottom, setDM1a1Bottom] = useState<string>("")
  const [DM1a2Bottom, setDM1a2Bottom] = useState<string>("")
  const [DM1End, setDM1End] = useState<string>("")

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
  const [eq1End, setEq1End] = useState<string>("")

  const [eq2NoteBrute, setEq2NoteBrute] = useState<string>("")
  const [eq2NoteStandard, setEq2NoteStandard] = useState<string>("")

  const [eq3a1Top, setEq3a1Top] = useState<string>("")
  const [eq3a1Bottom, setEq3a1Bottom] = useState<string>("")
  const [eq3a2Top, setEq3a2Top] = useState<string>("")
  const [eq3a2Bottom, setEq3a2Bottom] = useState<string>("")
  const [eq3End, setEq3End] = useState<string>("")

  const [percentileTotal, setPercentileTotal] = useState<string>("")
  

  return (
    <section className='flex'>
      <div className='w-[50%]'>
        <h2 className='text-sm'>Notes d'items et notes standard correspondantes</h2>
        <article className='flex border border-black'>
          <div className='text-xs text-center flex items-center border-r border-black min-w-[69.41px] '>Code de l'item</div>
          <div className='text-xs text-center flex items-center border-r px-1 border-black min-w-[85px]'>Nom de l'item</div>
          <div className='text-xs text-center flex items-center border-r px-1 border-black'>Note brute (meilleur essai)</div>
          <div className='text-xs text-center flex items-center min-w-[104px]'>Note standard de l'item</div>
        </article>

        <article className='flex border border-black'>
          <div className='text-xs flex items-center border-r border-black min-w-[69.41px] pl-1'>DM1*</div>
          <div className='text-xs text-center flex items-center border-r border-black flex-col min-w-[85px]'>
            <div className='border-b border-black py-1.5'>Placer chevilles main préférée</div>
            <div className='py-1.5'>Placer chevilles main non préférée</div>
          </div>
          <div className='text-xs text-center flex items-center border-r border-black flex-col'>
            <input className='border-b border-black py-1.5 w-[115px] p-1 h-[61px] px-2' value={DM1a1Top} onChange={(event:FormEvent<HTMLInputElement>)=>setDM1a1Top(event.currentTarget.value)}/>
            <input className='py-1.5 w-[115px] h-[61px] px-2' value={DM1a1Bottom} onChange={(event:FormEvent<HTMLInputElement>)=>setDM1a1Bottom(event.currentTarget.value)}/>
          </div>
          <div className='text-xs text-center flex items-center min-w-[104px]'>
            <div className='flex flex-col w-1/2 justify-center border-r border-black'>
              <input className='border-b border-black px-1 h-[61px]' value={DM1a2Top} onChange={(event:FormEvent<HTMLInputElement>)=>setDM1a2Top(event.currentTarget.value)}/>
              <input className='px-1 h-[61px]' value={DM1a2Bottom} onChange={(event:FormEvent<HTMLInputElement>)=>setDM1a2Bottom(event.currentTarget.value)}/>
            </div>
            <div className='min-w-[50%]'>
              <input className='px-1 h-[122px] w-[51px] text-green-800 font-bold' value={DM1End} onChange={(event:FormEvent<HTMLInputElement>)=>setDM1End(event.currentTarget.value)}/>
            </div>
          </div>
        </article>
        <article className='flex text-xs border border-black'>
          <div className=' text-center flex items-center border-r border-black min-w-[69.41px] pl-1'>DM2</div>
          <div className='text-center flex items-center border-r px-1 border-black min-w-[85px]'>Lacet</div>
          <input className='border-r border-black py-1.5 w-[116px] p-1 px-2' value={DM2NoteBrute} onChange={(event:FormEvent<HTMLInputElement>)=>setDM2NoteBrute(event.currentTarget.value)}/>
          <input className='py-1.5 w-[104px] p-1 px-2 text-green-800 font-bold' value={DM2NoteStandard} onChange={(event:FormEvent<HTMLInputElement>)=>setDM2NoteStandard(event.currentTarget.value)}/>
        </article>
        <article className='flex text-xs border border-black'>
          <div className='text-center flex items-center border-r border-black min-w-[69.41px] pl-1'>DM3</div>
          <div className='text-center flex items-center border-r px-1 border-black min-w-[85px]'>Trajet 2</div>
          <input className='border-r border-black py-1.5 w-[116px] p-1 px-2' value={DM3NoteBrute} onChange={(event:FormEvent<HTMLInputElement>)=>setDM3NoteBrute(event.currentTarget.value)}/>
          <input className='py-1.5 w-[104px] p-1 px-2 text-green-800 font-bold' value={DM3NoteStandard} onChange={(event:FormEvent<HTMLInputElement>)=>setDM3NoteStandard(event.currentTarget.value)}/>
        </article>

        <article className='flex text-xs border border-black mt-2'>
          <div className='text-center flex items-center border-r border-black min-w-[69.41px] pl-1'>VA1</div>
          <div className='text-center flex items-center border-r px-1 border-black min-w-[85px]'>Attrapper avec 2 mains</div>
          <input className='border-r border-black py-1.5 w-[116px] p-1 px-2' value={VA1NoteBrute} onChange={(event:FormEvent<HTMLInputElement>)=>setVA1NoteBrute(event.currentTarget.value)}/>
          <input className='py-1.5 w-[104px] p-1 px-2 text-blue-500 font-bold' value={VA1NoteStandard} onChange={(event:FormEvent<HTMLInputElement>)=>setVA1NoteStandard(event.currentTarget.value)}/>
        </article>
        <article className='flex text-xs border border-black'>
          <div className='text-center flex items-center border-r border-black min-w-[69.41px] pl-1'>VA2</div>
          <div className='text-center flex items-center border-r px-1 border-black min-w-[85px]'>Lancer sac</div>
          <input className='border-r border-black py-1.5 w-[116px] p-1 px-2' value={VA2NoteBrute} onChange={(event:FormEvent<HTMLInputElement>)=>setVA2NoteBrute(event.currentTarget.value)}/>
          <input className='py-1.5 w-[104px] text-blue-500 font-bold p-1 px-2' value={VA2NoteStandard} onChange={(event:FormEvent<HTMLInputElement>)=>setVA2NoteStandard(event.currentTarget.value)}/>
        </article>

        <article className='flex border border-black mt-2'>
          <div className='text-xs flex items-center border-r border-black min-w-[69.41px] pl-1'>&Eacute;q1*</div>
          <div className='text-[11px] text-center flex items-center border-r border-black flex-col min-w-[85px]'>
            <div className='border-b border-black py-1.5 h-[60.8px]'>&Eacute;q. sur planche meilleure jambe</div>
            <div className='py-1.5 h-[61px]'>&Eacute;q. sur planche autre jambe</div>
          </div>
          <div className='text-xs text-center flex items-center border-r border-black flex-col'>
            <input className='border-b border-black py-1.5 w-[115px] p-1 h-[61px] px-2' onChange={(event:FormEvent<HTMLInputElement>)=>setEq1a1Top(event.currentTarget.value)} value={eq1a1Top}/>
            <input className='py-1.5 w-[115px] h-[61px] px-2' onChange={(event:FormEvent<HTMLInputElement>)=>setEq1a1Bottom(event.currentTarget.value)} value={eq1a1Bottom}/>
          </div>
          <div className='text-xs text-center flex items-center min-w-[104px]'>
            <div className='flex flex-col w-1/2 justify-center border-r border-black'>
              <input className='border-b border-black px-1 h-[61px]' onChange={(event:FormEvent<HTMLInputElement>)=>setEq1a2Top(event.currentTarget.value)} value={eq1a2Top}/>
              <input className='px-1 h-[61px]' onChange={(event:FormEvent<HTMLInputElement>)=>setEq1a2Bottom(event.currentTarget.value)} value={eq1a2Bottom}/>
            </div>
            <div className='min-w-[50%]'>
              <input className='px-1 h-[122px] w-[51px] text-purple-700 font-bold' onChange={(event:FormEvent<HTMLInputElement>)=>setEq1End(event.currentTarget.value)} value={eq1End}/>
            </div>
          </div>
        </article>
        <article className='text-xs flex border border-black'>
          <div className='text-center flex items-center border-r border-black min-w-[69.41px] pl-1'>&Eacute;q2</div>
          <div className='text-center flex items-center border-r px-1 border-black min-w-[85px]'>Marcher T/P en avant</div>
          <input className='border-r border-black py-1.5 w-[116px] p-1 px-2' onChange={(event:FormEvent<HTMLInputElement>)=>setEq2NoteBrute(event.currentTarget.value)} value={eq2NoteBrute}/>
          <input className='py-1.5 w-[104px] p-1 px-2 text-center text-purple-700 font-bold' onChange={(event:FormEvent<HTMLInputElement>)=>setEq2NoteStandard(event.currentTarget.value)} value={eq2NoteStandard}/>
        </article>
        <article className='flex border border-black'>
          <div className='text-xs flex items-center border-r border-black min-w-[69.41px] pl-1'>&Eacute;q3*</div>
          <div className='text-[11px] text-center flex items-center border-r border-black flex-col min-w-[85px]'>
            <div className='border-b border-black py-1.5 h-[60.8px]'>Sauter à cloche-pied meilleure jambe</div>
            <div className='py-1.5 h-[61px]'>Sauter à cloche-pied autre jambe</div>
          </div>
          <div className='text-xs text-center flex items-center border-r border-black flex-col'>
            <input className='border-b border-black py-1.5 w-[115px] p-1 h-[61px] px-2' onChange={(event:FormEvent<HTMLInputElement>)=>setEq3a1Top(event.currentTarget.value)} value={eq3a1Top}/>
            <input className='py-1.5 w-[115px] h-[61px] px-2' onChange={(event:FormEvent<HTMLInputElement>)=>setEq3a1Bottom(event.currentTarget.value)} value={eq3a1Bottom}/>
          </div>
          <div className='text-xs text-center flex items-center min-w-[104px]'>
            <div className='flex flex-col w-1/2 justify-center border-r border-black'>
              <input className='border-b border-black px-1 h-[61px]' onChange={(event:FormEvent<HTMLInputElement>)=>setEq3a2Top(event.currentTarget.value)} value={eq3a2Top}/>
              <input className='px-1 h-[61px]' onChange={(event:FormEvent<HTMLInputElement>)=>setEq3a2Bottom(event.currentTarget.value)} value={eq3a2Bottom}/>
            </div>
            <div className='min-w-[50%]'>
              <input className='px-1 h-[122px] w-[51px] text-purple-700 font-bold' onChange={(event:FormEvent<HTMLInputElement>)=>setEq3End(event.currentTarget.value)} value={eq3End}/>
            </div>
          </div>
        </article>

        <article className='flex border border-black mt-2'>
          <div className='text-xs items-center border-r border-black min-w-[69.41px] p-1'>
            <b>Note totale de test</b><br/>
            Somme des notes standard des 8 items
          </div>
          <div className='text-center text-red-800 font-bold text-xs flex justify-center items-center w-1/3'>
            { (+DM1End) + (+DM2NoteStandard) + (+DM3NoteStandard) + (+VA1NoteStandard) + (+VA2NoteStandard) + (+eq1End) + (+eq2NoteStandard) + (+eq3End) }
          </div>
        </article>
      </div>

      <div className='w-[10%] relative'>
        <div className='border-t-2 border-r-2 border-b-2 border-black w-1/2 absolute' style={{top: `${113}px`, height:`${103}px`}} />
        <div className='border border-black w-1/2 absolute left-1/2' style={{top: `${103+51.5}px`}} />
        <div className='absolute -right-0.5' style={{top: `${103+51.5-12}px`}}>&#9654;</div>

        <div className='border-t-2 border-r-2 border-b-2 border-black w-1/2 absolute' style={{top: `268px`, height:`36px`}} />
        <div className='border border-black w-1/2 absolute left-1/2' style={{top: `${268+18}px`}} />
        <div className='absolute -right-0.5' style={{top: `${268+18-12}px`}}>&#9654;</div>

        <div className='border-t-2 border-r-2 border-b-2 border-black w-1/2 absolute' style={{bottom: `109px`, height:`158px`}} />
        <div className='border border-black w-1/2 absolute left-1/2' style={{bottom: `${109+79}px`}} />
        <div className='absolute -right-0.5' style={{bottom: `${109+79-12}px`}}>&#9654;</div>

        <div className='border border-black w-1/2 absolute' style={{bottom: `20px`}} />
        <div className='border border-black w-1/2 absolute left-1/2' style={{bottom: `28.5px`}} />
        <div className='border border-black absolute left-1/2' style={{bottom: `20.5px`, height:'8.5px'}} />
        <div className='absolute -right-0.5' style={{bottom: `${28.5-10}px`}}>&#9654;</div>
      </div>

      <div className='w-[40%] relative'>
        <article className='absolute' style={{top: `${103}px`}}>
          <h3 className='text-sm'>
            Trois notes de composantes**
          </h3>
          <div className='flex flex-col text-xs'>
            <div className='items-center border border-black p-2'>
              <b>Dextérité manuelle</b>*** DM1 + DM2 + DM3
            </div>
            <div className='flex border border-black'>
              <div className='w-1/2 border-r border-black p-1 '>
                Note de composante : <br/>
                <span className='text-green-800 font-bold'>{(+DM1End) + (+DM2NoteStandard) + (+DM3NoteStandard)}</span>
              </div>
              <div className='w-1/2 p-1'>
                Percentile :
                <input className='text-base w-full border-b border-black' onChange={(event: FormEvent<HTMLInputElement>)=> setDMPercentile(event.currentTarget.value)} value={DMPercentile}/>
              </div>
            </div>
          </div>
        </article>

        <article className='absolute text-xs' style={{top: `${296 - 41.5}px`}}>
          <div className='items-center border border-black p-2'>
            <b>Viser et attrapper</b>*** VA1 + VA2
          </div>
          <div className='flex border border-black'>
            <div className='w-1/2 border-r border-black p-1'>
              Note de composante : <br/>
              <span className='text-blue-500 font-bold'>{(+VA1NoteStandard) + (+VA2NoteStandard)}</span>
            </div>
            <div className='w-1/2 p-1'>
              Percentile :
              <input className='text-xs w-full border-b border-black' onChange={(event: FormEvent<HTMLInputElement>)=> setVAPercentile(event.currentTarget.value)} value={VAPercentile}/>
            </div>
          </div>
        </article>

        <article className='absolute text-xs' style={{bottom: `${109+79-41.5}px`}}>
          <div className='items-center border border-black p-2'>
            <b>&Eacute;quilibre</b>*** &Eacute;q1 + &Eacute;q2 + &Eacute;q3
          </div>
          <div className='flex border border-black'>
            <div className='w-1/2 border-r border-black p-1'>
              Note de composante : <br/>
              <span className='text-purple-700 font-bold'>{(+eq1End) + (+eq2NoteStandard) + (+eq3End)}</span>
            </div>
            <div className='w-1/2 p-1'>
              Percentile :
              <input className='text-base w-full border-b border-black'/>
            </div>
          </div>
        </article>

        <article className='absolute flex flex-col text-xs w-full' style={{bottom: `0`}}>
          <div className='flex border border-black'>
            <div className='w-1/2 border-r border-black p-1 font-bold'>
              Note totale de test
            </div>
            <div className='w-1/2 p-1 font-bold'>
              Rang percentile
            </div>
          </div>
          <div className='flex border border-black'>
            <div className='w-1/2 border-r text-center border-black p-1 font-bold pt-2.5'>
              { (+DM1End) + (+DM2NoteStandard) + (+DM3NoteStandard) + (+VA1NoteStandard) + (+VA2NoteStandard) + (+eq1End) + (+eq2NoteStandard) + (+eq3End) }
            </div>
            <div className='w-1/2 p-1 font-bold'>
              <input className='text-base w-full border-b border-black' onChange={(event: FormEvent<HTMLInputElement>)=> setPercentileTotal(event.currentTarget.value)} value={percentileTotal}/>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}

export default BottomFormComponents