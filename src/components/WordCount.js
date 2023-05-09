import { useState } from "react"

function WordCount(){
    const [list, setList] = useState('')
    const [length, setLength] = useState('')
    const handleList = () => {
        let listArray = list.split(' ')
        return setLength(listArray.length)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 1-9: Write a program that takes a string as input and returns the number of words in the string.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi ký tự"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleList}>Tính số lượng từ</button>
            <p className="ml-8 mt-8">Số lượng từ: {length}</p>
        </div>
    )
}
export default WordCount