import {useState, useCallback, useEffect, useRef} from 'react'

function App() {
   const [lenght, setLenght]=useState(8)

   const [numberAllowed, setNumberAllowed]=useState(false)

   const [characterAllowed, setcharacterAllowed] = useState(false)

   const [password, setPassword] = useState('')
    
   //useRef() hook return the one mutable/changable ref object of current value
   const passwordRef = useRef()
   
    //useCallBack() hook will return a memorized version of the 
    //callback that only changes if one of the inputs has changed.
   const passwordGenerator = useCallback(()=>{
    let pass= ''
    let str= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed)     str += "0123456789"
    if (characterAllowed)  str += '!@#$%^^&*(){}"[]'

      for(let i=1; i <=lenght; i++ )
      {
        // char hame one by one loop 8 dafa chala k index value de rha h .charAt() 
        //javascript ka method h jo k apne andar index leta h 
         let char = Math.floor(Math.random() * str.length + 1)
         pass += str.charAt(char)
      }

    setPassword(pass)

   },[lenght,numberAllowed,characterAllowed,setPassword]
   )
   
     const copyPasswordToClipBoard = useCallback(()=>{
           passwordRef.current?.select()
          //  passwordRef.current?.setSelectionRange(0, 10)
           window.navigator.clipboard.writeText(password)
     },[password])
     
     //The useEffect Hook allows you to perform side effects in your components.
     //Some examples of side effects are: fetching data, directly updating the DOM, and timers.

     useEffect(()=>{
        passwordGenerator()
     },[lenght,numberAllowed,characterAllowed,passwordGenerator])

   

  return (
    <>
    <div className=' w-full max-w-md  mx-auto shadow-md rounded-lg px-6 my-10 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        {/* part 1 */}
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy</button>

        </div>
           {/* part 1 End */}
        <div className='flex text-sm gap-x-2 '>
        <div className='flex item-center gap-x-1'>

          {/* part 2 toggle Button */}
          <input
          type='range'
          min={8}
          max={100}
          value={lenght}
          className='cursor-pointer'
          onChange={(e)=>{
            setLenght(e.target.value)
          }}
          />
          {/* Part 3  lenght */}
          <label>Length:{lenght}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          {/* Part 4 checkBox AllowNumber */}
           <input
           type='checkbox'
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={()=>{
            setNumberAllowed((prev)=>!prev)
           }}
           />
           <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          {/* Part 4 checkBox CharacterAllowed */}
           <input
           type='checkbox'
           defaultChecked={characterAllowed}
           id='characterInput'
           onChange={()=>{
            setcharacterAllowed((prev)=>!prev)
           }}
           />
           <label htmlFor='characterInput'>Character</label>
        </div>
        </div>
       
       
       </div>  
    </>
  )
}

export default App
