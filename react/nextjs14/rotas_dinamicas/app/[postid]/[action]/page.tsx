type Props = {
    params: {
        postid: string;
        action:string;
    }
}

const Page = ({params}:Props)=>{
    return (
        <div>
            {params.postid} {params.action}
        </div>
    )
}

export default Page