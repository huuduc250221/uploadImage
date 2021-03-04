import React, { useRef } from 'react'

export default function({setIsLoading,imgURL}) {
    const textAreaRef = useRef('')
    const onClickToCopy = () => {
        textAreaRef.current.select()
        document.execCommand('copy')
    }

    return <>
        <h4>Upload success</h4>
        <img src={imgURL} width='80%' height='auto'/>
    <form style={{marginBottom:'20px'}}>
        <input id='imageLink' type='text' ref={textAreaRef} defaultValue={imgURL} />
        <label  className='noround' htmlFor='imageLink' onClick={onClickToCopy} >Copy</label>
    </form>
    </>
} 