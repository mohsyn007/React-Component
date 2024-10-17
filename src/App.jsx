import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './friends';
function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handClick2=()=>{
    alert('Button 2 Clicked');
  }
  const addToFive=(num)=>{
    alert(num+5);

  }
 
  return (
    <>

      <h1>React Core Concepts-2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handClick2}>Click-2</button>
      <button onClick={()=>{alert('Third is clicked')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Fourth</button>

       </>
  )
}

export default App
