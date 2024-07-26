import { useRef , useEffect} from "react";


// function Timer() {
//     const countRef = useRef(0);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         countRef.current++;
//         console.log(countRef.current);
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);
  
//     return <div>Open the console to see the count</div>;
//   }


// export default Timer


//================================

// function FocusInput() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // Focus the input element when the component mounts
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} type="text" />;
// }
// export default FocusInput



//============================
// function Component() {
//     const renderCount = useRef(0);
  
//     useEffect(() => {
//       renderCount.current += 1;
//     });
  
//     return <div>Render count: {renderCount.current}</div>;
//   }

//=======================================









// import {useState, useEffect, useRef, useCallback} from 'react'

// function Again() {


//     const [password, setPassword] = useState('')
//     const [allowedNum, setAllowedNum] = useState(false)
//     const [allowedChar, setAllowedChar] = useState(false)
//     const [lenght, setLenght] = useState(8)
     
//     const passwordRef = useRef()


//     const passwordGenerator = useCallback(()=>{
//       let  pass = ""
//       let  str   =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//        if(allowedNum) str += "0123456789"

//        if(allowedChar) str += "!@#$%^&*()_+={}[]:|"

//        for(let i=1; i<=lenght; i++){
        
//          let char = Math.floor( Math.random() *str.length+1)
//            pass +=  str.charAt(char)
//       }
//       setPassword(pass)

//     },[allowedNum,allowedChar,lenght,setPassword])
//     // useCallback memorize k liye huta h ky dependancies method sy khxh b change huta hn 
//     // main method mein usy chache mein rakh lu =>optimaization

    
//     const copyPasswordToClipBoard = useCallback(()=>{
//          passwordRef.current?.select() 
//          //  passwordRef.current?.setSelectionRange(0, 10)
//          window.navigator.clipboard.writeText(password)
//     },[password])

//      useEffect(()=>{
//       passwordGenerator()
//       },[allowedChar,allowedNum,lenght, passwordGenerator])
//       // or in method mein koi b change hua to re-render kr do passwordGenerator ko


//   return (
//     <>
//     <div className ="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className ='text-white text-center my-3'>Password generator</h1>
//     <div className ="flex shadow rounded-lg overflow-hidden mb-4">
//         {/* Part 1 for mainPartofPasswordGenerator */}
//         <input
//             type = "text"
//             value = {password}
//             className = "outline-none w-full py-1 px-3"
//             placeholder = "Password"
//             //Boolean. The value is not editable
//             readOnly
//             //kesi dosi method mein reference lany k liye Ref use hua h copy mein ref dein gy
//             ref = {passwordRef}
//         />
//         {/* Part 2 CopyPassordButtonFuntionality */}
//         <button
//         onClick = {copyPasswordToClipBoard}
//         className = 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>
        
//     </div>
//     <div className = 'flex text-sm gap-x-2'>
//       <div className = 'flex items-center gap-x-1'>
//         {/* Part 3 for ToggleLenghtChanged */}
//         <input 
//           type ="range"
//           min  = {8}
//           max = {100}
//           value = {lenght}
//          className = 'cursor-pointer'
//           onChange = {(e)=>{
//             e.preventDefault()
//             setLenght(e.target.value)
//           }}
//           />
//          {/* Part 4 for CurrentInputLenghtUpdated*/}
//         <label>Length: {lenght}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//       {/* Part 5 for NumberAllowed */}
//       <input
//           type = "checkbox"
//           defaultChecked = {allowedNum}
//           id = "numberInput"
//           onChange = {()=>{
//               setAllowedNum((pre)=>!pre)
//           }}
//       />

//       <label htmlFor = "numberInput">Numbers</label>

//       </div>
//       <div className = "flex items-center gap-x-1">
//         {/* Part 6 for CharacterAllowed */}
//           <input
//               type = "checkbox"
//               defaultChecked = {allowedChar}
//         //id="..." Its purpose is to identify the element when linking. The value is used as the
//         // value of the <label>'s for attribute to link the label with the form control. See <label>.
//               id="characterInput"
//               onChange = {()=>{
//                 setAllowedChar((pre)=>!pre)
//               }}
//           />
          
//           <label htmlFor = "characterInput">Characters</label>
//       </div>
//     </div>
// </div>

    
    
    
    
    
    
//     </>
//   )
// }

// export default Again