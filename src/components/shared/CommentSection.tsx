import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react'

type CommentSectionProps = {
  setText: Dispatch<SetStateAction<string>>
  text: string
}

const CommentSection: FC<CommentSectionProps> = ({ setText, text }) => {
  return (
    <section className='mt-5'>
      <h3 className='text-sm font-bold'>Commentaires et remarques</h3>
      <textarea className='border border-black w-full h-32 p-2 text-xs' onChange={(event: FormEvent<HTMLTextAreaElement>)=> setText(event.currentTarget.value)}/>
    </section>
  )
}

export default CommentSection
