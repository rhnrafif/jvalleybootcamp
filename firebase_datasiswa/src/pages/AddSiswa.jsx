import React from 'react'
import { doc, setDoc} from 'firebase/firestore'
import {firestore} from '../config/firebaseConfig'

export default function AddSiswa() {

    // handlesubmit
  const handleSubmit = (e)=>{
    e.preventDefault()

    let nama_lengkap = e.target.nama_lengkap.value

    // firebasestore
    let dataSiswaRef = doc(firestore, 'data_siswa', Date.now().toString())

    setDoc(dataSiswaRef, {
        id : Date.now(),
        nama_lengkap : nama_lengkap
    })
    .then( res => {console.info('data berhasil')})
    .catch(err =>{console.error(err)})
  }

  return (
    <div>
        <form action="" className='w-[500px] p-6 flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex gap-2'>
                <label htmlFor="nama_lengkap">Nama Lengkap</label>
                <input type="text" id='nama_lengkap' className=''/>
            </div>
            <div className='flex gap-4'>
                <button type='reset'>Reset</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
