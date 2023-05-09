import { useState } from "react"

function Exercise51(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let reverseArr = []
        listArray.forEach((element) => {
            reverseArr.unshift(element);
        })
        setValue(reverseArr.join(' '))
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>
                Level 5-8: Reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , 
                yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy ký tự cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button onClick={handle}
                    className="ml-8 bg-orange-200 px-6 font-medium"
            >Kết quả</button>
            <p className="ml-8 mt-8">Dãy ký tự đảo ngược: {value}</p>
        </div>
    )
}
export default Exercise51