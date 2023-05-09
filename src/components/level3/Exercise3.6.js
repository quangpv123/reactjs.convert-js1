import { useState } from "react"

function Exercise36(){
    const [list1, setList1] = useState('')
    const [list2, setList2] = useState('')
    const [value, setValue] = useState('')
    const list = list1.concat(list2)
    const listArray = list.split(' ')
    const handle = () => {
        let a = listArray.length
        let median = 0
        if(a%2===0){
            median = (parseInt(listArray[a/2-1])+parseInt(listArray[a/2]))/2
        } else {
            median = parseInt(listArray[(a-1)/2])
        }
        return setValue(median)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 3-6: Write a program that takes two lists of integers as input and returns the median of the combined list.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Chuỗi 1: Nhập vào chuỗi các số cách nhau bằng dấu khoảng trắng"
                value={list1}
                onChange={e => setList1(e.target.value)}
            ></input>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Chuỗi 2: Nhập vào chuỗi các số cách nhau bằng dấu khoảng trắng"
                value={list2}
                onChange={e => setList2(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Median Value: {value}</p>
        </div>
    )
}
export default Exercise36