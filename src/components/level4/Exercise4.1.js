import { useState } from "react"

function Exercise41(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let counts = 0
        for(let i=0; i < listArray.length; i++){
            for(let j=i+1; j < listArray.length; j++){
                if(listArray[i] > listArray[j]){
                    let location = listArray[i];
                    listArray[i] = listArray[j];
                    listArray[j] = location;
                    counts++
                }
            }
        }
        return setValue(counts)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 4-1: Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy các số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Số lần lặp tối thiểu để hoàn thành sắp xếp: {value}</p>
        </div>
    )
}
export default Exercise41