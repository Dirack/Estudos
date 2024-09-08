type Props = {
    label: string;
    handleClick: () => void;
    className?: string
}

const Button = ({label, handleClick, className}: Props)=>{
    if(className){
        className += " bg-yellow-500 text-white text-bold p-2 rounded"
    }else{
        className = "bg-yellow-500 text-white text-bold p-2 rounded"
    }
    return (
        <button
            className={className}
            onClick={handleClick}>
            {label}
        </button>
    )
}

export default Button