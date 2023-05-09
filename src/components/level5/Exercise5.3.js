import { useState } from "react"

function Exercise53(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let newArray = [];
        listArray.forEach((element) => {
        if(!newArray.includes(element)){
            newArray.push(element);
        }
    })
        setValue(newArray.join(' '))
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
        <h1 className = 'text-center mt-4 text-lg'>Level 5-8: Suniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.</h1>
        <input
            className = 'w-10/12 text-center ml-8 mt-8'
            placeholder="Nhập vào dãy các số cách nhau bằng dấu khoảng trắng"
            value={list}
            onChange={e => setList(e.target.value)}
        ></input>
        <button 
                onClick={handle}
                className="ml-8 bg-orange-200 px-6 font-medium"
        >Kết quả</button>
        <p className="ml-8 mt-8">Dãy số được loại bỏ các số trùng nhau: {value}</p>
    </div>
    )
}
export default Exercise53