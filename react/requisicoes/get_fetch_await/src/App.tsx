
function App() {

  const loadData = async ()=>{
    //let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    console.log(json);
  }

  return (
    <div className="App">
      <button onClick={loadData}>Carregar</button>
    </div>
  );
}

export default App;
