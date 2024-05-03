import React, { Dispatch, FC, SetStateAction } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

type CommentSectionProps = {
  setText: Dispatch<SetStateAction<string>>
  text: string
}

const CommentSection: FC<CommentSectionProps> = ({ setText, text }) => {
  const module = {
    toolbar: ['bold', 'italic', 'underline', 'strike']
  }
  return (
    <section className='my-1.5'>
      <h3 className='text-sm font-bold'>Commentaires et remarques</h3>
      <ReactQuill modules={module} theme="snow" value={text} onChange={setText} />
    </section>
  )
}

export default CommentSection
