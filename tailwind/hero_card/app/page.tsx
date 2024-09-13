"use client"

const Page = ()=>{
  return (
    <div className="container mx-auto">
      <div className="bg-slate-800 rounded-xl overflow-hidden p-4 text-white md:flex md:p-0">
        <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto md:w-48 md:h-auto md:rounded-none md:flex bg-[url(https://th.bing.com/th/id/OIP.5sBCV62cOygpZuYdpyfFQAHaEK?rs=1&pid=ImgDetMain)]"></div>
        <div className="pt-6 text-center md:p-8">
          <p className="text-lg">"Me fale e eu esqueço. Me ensine e eu lembro. Me envolva e eu aprendo."</p>
          <p className="mt-3 font-bold text-sky-400">Benjanmin, Franklin</p>
          <p className="text-slate-500">Político, EUA</p>
        </div>
      </div>
    </div>
  )
}

export default Page