import React, { useRef, useState ,useEffect} from 'react'
import dropImage from '../image.svg'

export default function ({ upload }) {

    const dropRef = useRef('')
    const [dragCount, setDragcount] = useState(0)
    const [isImage, setIsImage] = useState(false)

    function handleDrag(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    function handleDragIn(e) {
        e.preventDefault()
        e.stopPropagation()
        setDragcount(dragCount + 1)
        setIsImage(e.dataTransfer.items && e.dataTransfer.items[0].type.match(/image.*/));
    }

    function handleDragOut(e) {
        e.preventDefault()
        e.stopPropagation()
        setDragcount((state) => {
            state === 1 && setIsImage(false);
            return state - 1;
        });
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setIsImage(false);
        setDragcount(0);
        if (
            e.dataTransfer.files &&
            e.dataTransfer.files.length > 0 &&
            e.dataTransfer.files[0].type.match(/image.*/)
        ) {
            upload && upload(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    }

    useEffect(() => {
        let div = dropRef.current;
        div.addEventListener("dragenter", handleDragIn);
        div.addEventListener("dragleave", handleDragOut);
        div.addEventListener("dragover", handleDrag);
        div.addEventListener("drop", handleDrop);

        return () => {
            // Clean up
            div.removeEventListener("dragenter", handleDragIn);
            div.removeEventListener("dragleave", handleDragOut);
            div.removeEventListener("dragover", handleDrag);
            div.removeEventListener("drop", handleDrop);
        };
    }, []);

    return <div className="drag-drop" ref={dropRef}>
        <img src={dropImage} alt='day la anh' width='40%' height='auto'/>
        <span>Drag & Drop image here</span>
    </div>
}