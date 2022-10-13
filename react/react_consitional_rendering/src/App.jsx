import React, {useState} from "react";


export default function App(){

    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage] = useState({
        show : false,
        src : ""
    })

    //function ala ala loading, animasi timeout loading
    setTimeout(()=>{
        setLoading(false);
    },3000)

    //kondisi ketika loading bernilai true
    if(loading){
        return(
            <div className="loading_screen">
                Loading Please Wait
            </div>
        )
    }

    //logical untuk modal
    const handleModal = ()=>{
        setModal( !modal )
    }


    //logic untuk gambar modal
    const handleImageModal = (e)=>{
        setModalImage({
            show : true,
            src : e.target.src
        })
    }

    return (
        <>
        {modal && (
            <div className="modal">
                <h1>Hello Modal</h1>
                <button onClick={handleModal}>Close Modal</button>
            </div>
        )}

        {modalImage.show && (
            <div className="modal">
                <img src={modalImage.src} alt="" />
                <button onClick={()=>{
                    setModalImage({
                        show : false,
                        src : ""
                    })  
                }}>Close Image Modal</button>
            </div>
        )}

        <div>
            <h1>Hello React</h1>
            <button onClick={handleModal}>Open Modal</button>
        </div>

        <div className="image_wrapper">
            <img src="https://images.pexels.com/photos/219570/pexels-photo-219570.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />

            <img src="https://images.pexels.com/photos/3861787/pexels-photo-3861787.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />

            <img src="https://images.pexels.com/photos/498697/pexels-photo-498697.jpeg?auto=compress&cs=tinysrgb&w=500" alt="" onClick={handleImageModal} />
        </div>
        </>
    )
}