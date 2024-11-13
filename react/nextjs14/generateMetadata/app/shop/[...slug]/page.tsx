type Props = {
    params: {
        slug: string[]
    }
}

const Page = ({params}: Props)=>{
    return (
        <div>
            {params.slug.join(', ')}
        </div>
    )
}

export default Page