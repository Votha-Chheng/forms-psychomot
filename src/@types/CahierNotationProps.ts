import { Dispatch, SetStateAction } from "react"

export type DataBottomFormCommponent = {
  DM1End: string
  eq1End: string
  eq3End: string
  scoreTotalTest: string
  DMScoreTotal: string
  VAScoreTotal: string
  eqScoreTotal: string
  percentileTotal: string

  DM1a1Top: string
  DM1a2Top: string
  DM1a1Bottom: string
  DM1a2Bottom: string

  DM2NoteBrute: string
  DM2NoteStandard: string

  DM3NoteBrute: string 
  DM3NoteStandard: string

  DMPercentile: string  

  VA1NoteBrute: string  
  VA1NoteStandard: string  

  VA2NoteBrute: string  
  VA2NoteStandard: string  

  VAPercentile: string  

  eq1a1Top: string  
  eq1a1Bottom: string  
  eq1a2Top: string  
  eq1a2Bottom: string  

  eq2NoteBrute: string
  eq2NoteStandard: string

  eq3a1Top: string
  eq3a1Bottom: string
  eq3a2Top: string
  eq3a2Bottom: string

  eqPercentile: string
}

export type SetterBottomFormCommponent = {
  setPercentileTotal: Dispatch<SetStateAction<string>>

  setDM1a1Top: Dispatch<SetStateAction<string>>
  setDM1a2Top: Dispatch<SetStateAction<string>>
  setDM1a1Bottom: Dispatch<SetStateAction<string>>
  setDM1a2Bottom: Dispatch<SetStateAction<string>>

  setDM2NoteBrute: Dispatch<SetStateAction<string>>
  setDM2NoteStandard: Dispatch<SetStateAction<string>>

  setDM3NoteBrute: Dispatch<SetStateAction<string>>
  setDM3NoteStandard: Dispatch<SetStateAction<string>>

  setDMPercentile: Dispatch<SetStateAction<string>>
  
  setVA1NoteBrute: Dispatch<SetStateAction<string>>
  setVA1NoteStandard: Dispatch<SetStateAction<string>> 
  setVA2NoteBrute: Dispatch<SetStateAction<string>> 
  setVA2NoteStandard: Dispatch<SetStateAction<string>>
  setVAPercentile: Dispatch<SetStateAction<string>>

  setEq1a1Top: Dispatch<SetStateAction<string>>
  setEq1a1Bottom: Dispatch<SetStateAction<string>> 
  setEq1a2Top: Dispatch<SetStateAction<string>>
  setEq1a2Bottom: Dispatch<SetStateAction<string>>

  setEq2NoteBrute: Dispatch<SetStateAction<string>>
  setEq2NoteStandard: Dispatch<SetStateAction<string>>

  setEq3a1Top: Dispatch<SetStateAction<string>>
  setEq3a1Bottom: Dispatch<SetStateAction<string>>
  setEq3a2Top: Dispatch<SetStateAction<string>>
  setEq3a2Bottom: Dispatch<SetStateAction<string>>

  setEqPercentile: Dispatch<SetStateAction<string>>
}

export type BottomFormComponentsProps= SetterBottomFormCommponent & DataBottomFormCommponent