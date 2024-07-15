import Card from './components/Card'
import './App.css'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind Test </h1>
     <Card username="MACBOOK" btnText="BUY NOW!" imgURL="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
     />
     <Card username="iPHONE" btnText="BUY NOW!" imgURL= "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww" /> 
    </>
     
    
  )
}

export default App
