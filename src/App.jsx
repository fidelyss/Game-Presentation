import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-w-[100px] min-h-[100px] bg-black'>
        <p className='text-blue-50 font-zentry'>Test fonts and color palette</p>
      </div>
    </>
  )
}

export default App
