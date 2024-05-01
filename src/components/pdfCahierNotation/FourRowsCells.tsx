import React, { FC } from 'react'

type FourRowsCellsProps = {
  cell1: string
  cell2: string
  cell3: string
  cell4: string
  bold?: boolean
  borderTop?: boolean
}

const FourRowsCells: FC<FourRowsCellsProps> = ({cell1, cell2, cell3, cell4, bold=false, borderTop = true}) => {
  return (
    <article className={`${bold ? "font-bold":""} ${borderTop ? "border-t":""} flex border-l border-b border-r border-black`}>
      <div className='text-[12.5px] min-w-[69px] max-w-[69px] text-center flex items-center border-r border-black pb-2.5 pl-1'>{cell1}</div>
      <div className='text-[12.5px] min-w-[96px] max-w-[96px] text-center flex items-center border-r px-1 border-black pb-2.5'>{cell2}</div>
      <div className='text-[12.5px] min-w-[118px] max-w-[118px] text-center flex items-center border-r px-1 border-black pb-2.5'>{cell3}</div>
      <div className='text-[12.5px] max-w-[104px] min-w-[104px] text-center flex items-center pb-2.5'>{cell4}</div>
    </article>
  )
}

export default FourRowsCells
