"use client"

import { useEffect, useRef } from "react";

type Props = {
    src: string;
    isPlaying: boolean;
}

const Video = ({src,isPlaying}: Props)=>{

    const videoTag = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(isPlaying){
            videoTag.current?.play()
        }else{
            videoTag.current?.pause()
        }
    },[isPlaying])

    return (
        <video ref={videoTag} src={src} loop playsInline controls />
    )
}

export default Video