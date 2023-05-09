import { useState } from "react"

function Exercise24(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let value = 0
        for(let a of listArray){
            let aNum = parseInt(a)
            if(aNum % 15 === 0){
                value += aNum
            }
        }
        return setValue(value)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 2-4: Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Tổng các số chia hết cho 3 và 5: {value}</p>
        </div>
    )
}
export default Exercise24