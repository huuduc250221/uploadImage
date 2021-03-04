import React, { useState } from 'react'

import UpLoad from './UpLoad'
import Loading from './Loading'
import UpLoaded from './upLoaded'

export default function () {
    const [isLoading, setIsLoading] = useState(false)
    const [imgURL, setImgURL] = useState(null)

    return <div className='container-box'>
        {isLoading ? <Loading /> :
            imgURL ?
                <UpLoaded setIsLoading={setIsLoading} imgURL={imgURL} /> :
                <UpLoad setIsLoading={setIsLoading} setImgURL={setImgURL} />}
    </div>
}