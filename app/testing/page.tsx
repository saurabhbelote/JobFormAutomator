"use client";

import React from 'react'
import { useState } from 'react';
import {app, storage} from '@/firebase/config'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'


const page = () => {

    const [data, setData]=  useState();

    const handleSubmit=()=>{
        // console.log(data)
        const storageRef= ref(storage, data.name);
        const uploadTask= uploadBytesResumable(storageRef,data);
        uploadTask.on('state_changed',(snapshot)=>{

        })
    }
  return (
    <div className='App m-50 p-50' >
        <input
        type='file'
        onChange={(event)=>setData(event.target.files[0])}
        />
        <br/>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default page
