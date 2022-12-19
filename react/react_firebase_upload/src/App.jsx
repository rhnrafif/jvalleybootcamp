import React, {useState, useEffect} from 'react'
import './App.css'
import {storage} from "./config/firebaseConfig"
import { ref, uploadBytes, listAll } from "firebase/storage"

export default function App() {

  //state penampung preview image
  const [imagePrev, setImagePrev] = useState("");
  const [imageData, setImageData] = useState([]);


  //preview image before upload
  const handlePreviewImage = (e)=>{

    const file = e.target.files[0];

    //buat file reader
    const reader = new FileReader();

    reader.onload = (res)=>{

      setImagePrev(res.target.result);

    }
    // console.info(file);

    reader.readAsDataURL(file);
  }

  // handle upload ke firebase
  const handleSubmit = (e)=>{
    e.preventDefault();

    const file = e.target.image.files[0]

    // buat reference
    const uploadRef = ref(storage, "/simple_upload/" + file.name);

    // upload process
    uploadBytes(uploadRef, file)
    .then((res)=>{
      console.info("Berhasil Uplaod")

      setImagePrev(""); //reset state
    
    })
    .catch((err)=>{console.error(err)})

    
  }

  //list semua image di folder simple_image
  const listImage = async ()=>{
    let newArr = []
    //ref dari folder simple_upload
    const sfRef = ref(storage, "/simple_upload");

    await listAll(sfRef)
    .then((res)=>{
      res.items.forEach((e, i)=>{
        // console.info(e.name);
        newArr.push({
          id : i,
          url : `https://firebasestorage.googleapis.com/v0/b/jvalley-bootcamp.appspot.com/o/simple_upload%2F${e.name}?alt=media&token=311131a1-22ff-4207-87f4-aeedb7da142d`
        })
      })
    })
    .catch((err)=>{console.error(err)});

    return newArr;

  }

  //clc
  useEffect(()=>{
    listImage()
    .then((res)=>{
      // console.info(res);
      setImageData(res)
    })
    
  },[])

  return (
    <div className='App'>

      <form className='form_image' onSubmit={handleSubmit} >

          <label htmlFor="image">Image</label>
          <input type="file" accept='image/jpg, image/jpeg, image/png, image/gif' onChange={handlePreviewImage} id="image" />

          <img src={imagePrev} alt="image prev" width={200} />
          {imageData.map((e)=>(
            <img src={e.url} alt="" key={e.id} />
          ))}

          <button type='submit'>Submit</button>
          {console.info(imageData)}

      </form>

    </div>
  )
}
