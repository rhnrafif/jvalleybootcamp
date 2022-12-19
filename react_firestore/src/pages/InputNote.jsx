import React from 'react'
import {firestore} from '../config/firebaseConfig'
import {doc, setDoc} from 'firebase/firestore'

export default function InputNote() {

    const handleSubmit = (e)=>{
        e.preventDefault()

        let text = e.target.text.value
        let author = e.target.author.value 

        // clear value
        e.target.text.value = ''
        e.target.author.value = ''

        // membuat reference document
        let notesRef = doc(firestore, "notes", Date.now().toString())
        
        // store data ke firestore
        setDoc(notesRef, {
            id : Date.now(),
            author : author,
            text : text
        })
        .then((res)=>{
            console.info("data berhasil di store")
        })
        .catch((err)=>{
            console.error(err)
        })
    }
  return (
    <div>
        <h1>Input Note ke Firebase</h1>
        <form onSubmit={handleSubmit}>
            <div className='formGroup'>
                <label htmlFor="text">Text</label>
                <textarea id="text" ></textarea>
            </div>

            <div className='formGroup'>
                <label htmlFor="author">Author</label>
                <input type="text" id='author' />
            </div>

            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}
