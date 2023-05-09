import { useState } from "react"

function Exercise22(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    let listArray = list.split(' ')
    let longest = listArray[0]
    const handle = () => {
        for(let i=1; i<listArray.length;i++){
            if(listArray[i].length>longest.length){
                longest = listArray[i]
            }
        }
        return setValue(longest)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 2-2: Write a program that takes a list of strings as input and returns the longest word in the list.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Từ dài nhất là: {value}</p>
        </div>
    )
}
export default Exercise22