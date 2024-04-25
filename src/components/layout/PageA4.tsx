import React, { FC, ReactNode } from 'react'

type PageA4Props = {
  children: ReactNode
}

const PageA4: FC<PageA4Props> = ({ children }) => {
  return (
    <main className='w-[21cm] h-[29.7cm] border border-black mx-auto bg-white p-5'>
      {children}
    </main>
  )
}

export default PageA4