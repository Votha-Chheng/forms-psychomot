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
    <article className={`${bold ? "font-bold":""} ${borderTop ? "border-t":""} flex border-l border-b border-r border-black items-center`}>
      <div className='text-[12.5px] min-w-[69px] max-w-[69px] flex items-center border-r border-black h-[38px] px-1'>{cell1}</div>
      <div className='text-[12.5px] min-w-[96px] max-w-[96px] flex items-center border-r px-1 border-black h-[38px]'>{cell2}</div>
      <div className='text-[12.5px] text-center min-w-[118px] max-w-[118px] flex items-center justify-center border-r px-1 border-black h-[38px]'>{cell3}</div>
      <div className='text-[12.5px] text-center max-w-[104px] min-w-[104px] flex items-center justify-center h-[38px] px-1'>{cell4}</div>
    </article>
  )
}

export default FourRowsCells
