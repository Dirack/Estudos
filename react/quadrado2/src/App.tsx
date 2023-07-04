import './App.css'

function App() {

  const handleClick = ()=>{
    alert("clicou!");
  }
  return (
    <>
      <div className="quadrado" onClick={handleClick}>
       </div>
    </>
  )
}

export default App
