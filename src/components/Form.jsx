import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "../App.css";

const Form = () => {
    const [name, setName] = useState("");
    const [pswd, setPswd] = useState("");
    const [file, setfile] = useState("");

    //handleName

    const handleName =(e)=> {
        setName(e.target.value);
    }

    //handlePswd

    const handlePswd =(e)=> {
        setPswd(e.target.value);
    }

    //handleFile

    const handleFile =(e)=> {
        setfile(e.target.value);
    }

    //handleReq

    const handleReq =(e)=>{
       e.preventDefault();
       
       if(name.trim().length && pswd.trim().length){
        const info = (
            name,
            pswd,
            file
        )

        setName("");
        setPswd("");
        setfile("");

            toast.success('Successfull', {
                position: "top-center",
                theme: "dark",
            });
       }
    }
  return (
    <div>
      <form onSubmit={handleReq}>
        <input required type="text" onChange={handleName} placeholder='Username' value={name}/>
        <input required type="password" onChange={handlePswd} placeholder='Password' value={pswd}/>
        <input type="file" onChange={handleFile} placeholder='Your picture' value={file}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form;
