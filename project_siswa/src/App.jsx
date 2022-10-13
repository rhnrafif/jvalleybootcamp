import { useState } from "react";

export default function App(){


    const [dataSiswa,setDataSiswa] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault();

        let fullname = e.target.fullname.value;
        let dob = e.target.dob.value;
        let address = e.target.address.value;

        setDataSiswa([
            ...dataSiswa,
            {
                fullname : fullname,
                dob : dob,
                address : address,
                id : Date.now()
            }
        ])        
    }



    return (
        <div className="w-screen min-h-screen bg-slate-100">
        <div className="w-full max-w-[700px] flex flex-col mx-auto">
            <h1>Data Siswa</h1>
            <form action="" className="w-full flex flex-col p-8 bg-white shadow-lg gap-4 mt-10" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullname">Nama Lengkap</label>
                    <input type="text" id="fullname" required className="h-10 px-3 font-light rounded-md border-[1px] border-sky-700"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="dob">Tahun Lahir</label>
                    <input type="text" id="dob" required className="h-10 px-3 font-light rounded-md border-[1px] border-sky-700" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="address">Alamat</label>
                    <textarea type="text" id="address" required className="p-3 font-light rounded-md border-[1px] border-sky-700"></textarea>
                </div>

                <button type="submit" className="w-[120px] h-10 bg-sky-700 rounded ml-auto">Submit</button>

            </form>

            {dataSiswa.map((e)=>{
                return (
                    <div className="w-full flex flex-col bg-white shadow-md p-6 my-6 rounded-md" key={e.id}>
                        <h1 className="text-2xl font-light">{e.fullname}</h1>
                        <small>{e.dob}</small>
                    </div>
                )
            })}
        </div>
        </div>
    )
}