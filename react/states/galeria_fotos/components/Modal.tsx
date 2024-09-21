"use client"

type Props = {
    image: string;
    closeModal: ()=>void;
}

const Modal = ({image,closeModal}:Props)=>{
    return (
        <>
            <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <img src={`/assets/${image}`} className="max-w-screen max-h-screen"/>
            </div>
            <div onClick={closeModal} className="fixed cursor-pointer top-5 right-5 w-10 h-10 text-white text-5xl">
                x
            </div>
        </>

    )
}

export default Modal