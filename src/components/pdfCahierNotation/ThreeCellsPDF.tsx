import React, { FC } from 'react'

type ThreeCellsPDFProps = {
  topLeft: string
  bottomLeft: string
  right: string
}

const ThreeCellsPDF: FC<ThreeCellsPDFProps> = ({topLeft, bottomLeft, right}) => {
  return (
    <div className='text-xs text-center flex items-center min-w-[105px] border-b border-r border-black'>
      <div className='flex flex-col w-1/2 justify-center border-r border-black h-[122px]'>
        <div className={`bg-gray-200 h-[61px] flex items-center justify-centerborder-b-2 border-black border-b`}>
          <span className={`text-black text-center w-[48px] h-[50px] font-bold bg-white rounded-full px-1 flex justify-center pt-2`}>
            {topLeft}
          </span> 
        </div>
        <div className={`bg-gray-200 h-[61px] flex items-center justify-center`}>
          <span className={`text-black text-center w-[48px] h-[50px] font-bold bg-white rounded-full px-1 flex justify-center pt-2`}>
            {bottomLeft}
          </span>
        </div>
      </div>
      <div className='min-w-[50%]'>
        <span className='px-1 h-[122px] w-[51px] text-purple-700 font-bold'>{right}</span>
      </div>
    </div>
  )
}

export default ThreeCellsPDF
