import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react'

type Cell2x1Props = {
  A1TopValue: string
  A1BottomValue: string
  endValue: string
  setA1TopValue: Dispatch<SetStateAction<string>>
  setA1BottomValue: Dispatch<SetStateAction<string>>
  bgColor: string
  textColor: string
}

const Cell2x1: FC<Cell2x1Props> = ({A1TopValue, A1BottomValue, endValue, setA1BottomValue, setA1TopValue, bgColor, textColor}) => {
  return (
    <div className='text-xs text-center flex items-center min-w-[104px]'>
      <div className='flex flex-col w-1/2 justify-center border-r border-black h-[122px]'>
        <div className={`${bgColor} h-[61px] flex items-center justify-center border-b border-black`}>
          <input className={`${textColor} border-b text-center w-[48px] h-[50px] font-bold bg-white rounded-full border-black px-1`} 
            onChange={(event:FormEvent<HTMLInputElement>)=>setA1TopValue(event.currentTarget.value)} 
            value={A1TopValue}
          />
        </div>
        <div className={`${bgColor} h-[61px] flex items-center justify-center`}>
          <input 
            className={`${textColor}  border-b text-center w-[48px] h-[50px] font-bold bg-white rounded-full border-black px-1`}
            onChange={(event:FormEvent<HTMLInputElement>)=>setA1BottomValue(event.currentTarget.value)} 
            value={A1BottomValue}
          />
        </div>
      </div>
      <div className='min-w-[50%]'>
        <span className={`${bgColor} px-1 h-[122px] w-[51px] font-bold`}>{endValue}</span>
      </div>
    </div>
  )
}

export default Cell2x1
