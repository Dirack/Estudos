type Props = {
    rate: number;
}

const Emoji = ({rate}:Props)=>{

    if (rate > 5){
        rate = 5
    }else if (rate < 0){
        rate = 0
    }

    rate = Math.floor(rate)
    let emo = '😃'.repeat(rate) + '😢'.repeat(5-rate)
    
    return (
        <div className="flex justify-center items-center text-6xl">
            <div className="bg-gray-700 text-white p-2 rounded">{rate.toFixed(1)}</div>
            <div className="ml-3">{emo}</div>
        </div>
        
    )
}

export default Emoji