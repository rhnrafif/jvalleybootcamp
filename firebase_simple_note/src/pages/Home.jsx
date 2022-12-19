import React, {useState, useEffect} from 'react'
import {firebase} from '../config/firebaseConfig'
import { doc, setDoc, collection, getDocs, onSnapshot, deleteDoc} from 'firebase/firestore'
import moment from 'moment/moment'


export default function Home() {

  // state
  const [data, setData] = useState([])
  const [updateData, setUpdateData] = useState()

  // handlesubmit
  const handleSubmit = (event)=>{
    
    event.preventDefault()

    let note = event.target.note.value;
    let author = event.target.author.value;

    event.target.note.value = ''
    event.target.author.value = ''

    // store ke firebase
    const docId = Date.now().toString()
    const noteRef = doc(firebase, "note_app", docId )

    setDoc(noteRef, {
      id : docId,
      note : note,
      author : author,
      createdAt : Date.now()
    })
    .then(res => {console.info("data berhasil distore")})
    .catch(err => {console.error(err)})
  }

  // func ambil data dari collections
  const getNotesCollection = async ()=>{
    let collArr = []
    let noteRef = collection(firebase, 'note_app')
    let collectData = await getDocs(noteRef).then((res)=>{
      res.forEach((e)=>{
        collArr.push(e.data())
      })
    })
    return collArr
  }

  // dlete note
  const handleDelete = (id)=>{
    let docId = doc(firebase, "note_app", id)
    deleteDoc(docId)
    .then((res)=>{
      console.info('data berhasil dihapus')
    })
    .catch((err)=>{
      console.error(err)
    })
  }

  // update data
  const handleUpdate = (event)=>{
    
    event.preventDefault()
    let note = event.target.note.value

    const noteRef = doc(firebase, "note_app", updateData.id)
    setDoc(noteRef, {
      ...updateData,
      note : note
    })
    .then(()=>{
      console.info("data berhasil diupdate")
    })
    .catch((err)=>{
      console.error(err)
    })
    setUpdateData(null)
  }

  // listener function update data realtime
  const listener = ()=>{
    let noteRef = collection(firebase, "note_app")
    onSnapshot(noteRef, (newRec)=>{
      getNotesCollection()
    .then((res)=>{
      setData(res)
    })
    .catch((err)=>{
      console.error(err)
    })

    })
  }

  // clc
  useEffect(()=>{
    getNotesCollection()
    .then((res)=>{
      setData(res)
    })
    .catch((err)=>{
      console.error(err)
    })

    // component did update
    return ()=>{
      listener()
    }
  },[])

  return (
    <div className='App'>
        <h1>Home Page</h1>  

        <form autoComplete='off' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="note">Note</label>
              <textarea id="note"></textarea>
            </div>

            <div>
              <label htmlFor="author">Penulis</label>
              <input type="text" id='author' />
            </div>

            <button type='submit'>SUBMIT</button>
        </form>

        <div style={{
          marginTop : "40px",
          display : "flex",
          flexDirection : "column",
          gap : 15
        }}>
          {data.map((e)=>(
            <div key={e.id} style={{
              position : "relative",
              padding : 20,
              border : "1px solid white",
              borderRadius : "20px"
            }}>
              {updateData?.id == e.id ? (
                <form 
                style={{
                  display : "flex",
                  flexDirection : "column",
                  gap : 10
                }} 
                onSubmit={handleUpdate}
                >
                  <label htmlFor="note">Note</label>
                  <input type="text" id='note' defaultValue={e.note} />
                  <button type='submit'>SUBMIT</button>
                </form>
              ) : (
                <p>{e.note}</p>
              )}

              <small>{e.author} | </small>
              <small> {moment(e.createdAt).format("DD/MM/YYYY hh:mm") }</small>
              <button style={{
                backgroundColor : "red",
                borderRadius : 8,
                position : "absolute",
                top : 4,
                right : 4,
                width : 20,
                fontSize : 12,
                display : "flex",
                alignItems : "center",
                justifyContent : "center"
              }}
              onClick = {()=>{
                handleDelete(e.id)
              }}
              >
                 X 
                 </button>
                 <button style={{
                backgroundColor : "green",
                borderRadius : 8,
                position : "absolute",
                top : 4,
                right : 40,
                width : 20,
                fontSize : 12,
                display : "flex",
                alignItems : "center",
                justifyContent : "center"
              }}
              onClick = {()=>{
                if(!updateData){
                  return setUpdateData(e)
                }
                setUpdateData(null)
              }}
              > ? </button>
            </div>
          ))}
          
        </div>  
    </div>
  )
}
