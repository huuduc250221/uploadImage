import React from 'react'
import axios from 'axios'

import DragAndDrop from './DragAndDrop'

export default function ({ setIsLoading, setImgURL }) {



  function upload(file) {
    console.log(file)
    const formData = new FormData()
    formData.append('image', file)
    axios.post('/uploads', formData)
      .then(res => {
        setIsLoading(false)
        setImgURL(res.data)
      })
      .catch(err => console.log(err))


  }
  const handleChange = e => {
    setIsLoading(true);
    const image = e.target.files[0];
    console.log(image)
    upload(image)
  };
  return <>
    <div >
      <h3>Upload your image</h3>
      <p>File should be jpeg,png...</p>
    </div>
    <DragAndDrop upload={upload} />
    <h5>Or</h5>
    <form encType='multipart/form-data'>
      <input
        style={{ display: 'none' }}
        type='file' id='upImage' name='upLoadImage' accept='image/*' onChange={handleChange} />
      <label htmlFor='upImage'>choose an image</label>
    </form>
  </>
}