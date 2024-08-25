"use client"
const MyButton = ()=>{
    const loadData = async ()=>{
        let response = await fetch("http://localhost:5000/all")
        let json = response.json()
        console.log(json)
    }
    return (
        <div>OI</div>
    )
}

export default MyButton