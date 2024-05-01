import React, { FC } from 'react'

type TwoVerticalCellsPDFProps = {
  top: string
  bottom: string
  minWidth: string
  maxWidth: string
}

const TwoVerticalCellsPDF:FC<TwoVerticalCellsPDFProps> = ({top, bottom, minWidth, maxWidth}) => {
  return (
    <div className='text-xs text-center flex items-center border-r border-b border-black flex-col' style={{minWidth, maxWidth}}>
      <div className='border-b border-black w-full h-[61px] pt-2'>{top}</div>
      <div className='text-center pt-2 h-[61px]'>{bottom}</div>
    </div>
  )
}

export default TwoVerticalCellsPDF
