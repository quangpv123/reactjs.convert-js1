import { useState } from "react"

function Exercise37(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const newList = list.replace(/\s+/g, '').toLowerCase();
    const handle = () => {
        let charCounts = {}
        let maxCounts = 1
        for(let i=0; i < newList.length; i++){
            let char = newList[i];
            if(charCounts[char]){
                charCounts[char]++;
            }
              else {
                  charCounts[char] = 1;
              } 
          }
          
          for(let a of Object.values(charCounts)){
              if(a%2 === 0){
                  maxCounts += a;
              } else {
                  maxCounts += a - 1;
              }
          }   
        return setValue(maxCounts)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 3-7: Write a program that takes a string as input and returns the length of the longest palindrome that can be formed by rearranging the characters in the string.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi kí tự"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Độ dài chuỗi Palindrome: {value}</p>
        </div>
    )
}
export default Exercise37