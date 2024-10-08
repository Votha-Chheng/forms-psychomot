import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react'

type TopFormComponentsProps = {
  nom: string
  setNom: Dispatch<SetStateAction<string>>
  prenom: string
  setPrenom: Dispatch<SetStateAction<string>>
  age: string
  setAge: Dispatch<SetStateAction<string>>
  classe: string
  setClasse: Dispatch<SetStateAction<string>>
  dateTest: string
  setDateTest: Dispatch<SetStateAction<string>>
}

const TopFormComponents: FC<TopFormComponentsProps> = ({nom, setAge, age, setClasse, setDateTest, setNom, setPrenom, classe, dateTest, prenom}) => {
  return (
    <section className='border-black border text-sm mb-5 p-2'>
      <div className='flex w-full my-2.5'>
        <article className='w-[18cm]'>
          <label htmlFor='nom' >Nom : </label>
          <input className='outline-none border-b border-black w-[14.5cm]' type="text" id="nom" value={nom} required onChange={(event: FormEvent<HTMLInputElement>)=> setNom(event.currentTarget.value)}  />
        </article>
        <article className='w-[15%]'>
          <label htmlFor='age' >Âge : </label>
          <input className='outline-none border-b border-black w-[1.5cm]' type="number" id="age" value={age === "" ? "": +age } required onChange={(event: FormEvent<HTMLInputElement>)=> setAge(event.currentTarget.value)}  />
        </article>
      </div>
      <div className='flex w-full my-2.5'>
        <article className='w-full'>
          <label htmlFor='prenom' >Prénom : </label>
          <input className='outline-none border-b border-black w-[17.5cm]' type="text" id="prenom" required value={prenom}  onChange={(event: FormEvent<HTMLInputElement>)=> setPrenom(event.currentTarget.value)}  />
        </article>
      </div>
      <div className='flex w-full my-2.5'>
        <article className='w-[12.5cm]'>
          <label htmlFor='date' >Date de l&apos;examen : </label>
          <input className='outline-none border-b border-black w-[6.5cm]' type="date" id="date" value={dateTest} required onChange={(event: FormEvent<HTMLInputElement>)=> setDateTest(event.currentTarget.value)}  />
        </article>
        <article className='w-[9cm]'>
          <label htmlFor='classe' >Classe actuelle : </label>
          <input className='outline-none border-b border-black w-[4cm]' type="text" id="classe" required value={classe} onChange={(event: FormEvent<HTMLInputElement>)=> setClasse(event.currentTarget.value)} />
        </article>
      </div>
    </section>
  )
}

export default TopFormComponents