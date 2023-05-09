import { useState } from "react"

function ContainA(){
    const [list, setList] = useState('')
    const [counts, setCounts] = useState('')
    let listArray = list.split(' ')
    const handleList = () => {
        let count = 0
        for(let i=0; i < listArray.length; i++){
    let listArray = list.split(' ')
            if(listArray[i].includes('a')){count++}
        }
        return setCounts(count)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 1-10: Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi ký tự"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleList}>Kết quả</button>
            <p className="ml-8 mt-8">Số lượng từ chứa chữ "a": {counts}</p>
        </div>
    )
}
export default ContainA