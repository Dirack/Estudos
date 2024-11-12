
type Props = {
    params: {
        name: string;
    }
}

const Page = ({params}:Props)=>{
    return (
        <div>
            {params.name}
        </div>
    )
}

export default Page