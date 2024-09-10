"use client"

const Page = ()=>{
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-full bg-blue-500 text-white rounded p-4">01</div>
        <div className="col-span-2 bg-blue-500 text-white rounded p-4">02</div>
        <div className="bg-blue-500 text-white rounded p-4">03</div>
        <div className="bg-blue-500 text-white rounded p-4">04</div>
        <div className="col-start-2 col-end-4 bg-blue-500 text-white rounded p-4">05</div>
        <div className="bg-blue-500 text-white rounded p-4">06</div>
        <div className="bg-blue-500 text-white rounded p-4">07</div>
        <div className="bg-blue-500 text-white rounded p-4">08</div>
        <div className="col-span-full bg-blue-500 text-white rounded p-4">09</div>
      </div>
    </div>
  )
}

export default Page