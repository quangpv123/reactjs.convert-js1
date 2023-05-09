import { useState } from "react"

function AscendingOder(){
    const [listNum, setListNum] = useState('')
    let arrayListNum = listNum.split(' ')
    const [ascendingOder, setAscendingOder] = useState()
    const handleOder = () => {
        let oder = arrayListNum.sort((a, b) => a - b).join(" ")
        return setAscendingOder(oder)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
        <h1 className = 'text-center mt-4 text-lg'>Level 1-6: Write a program that takes a list of numbers as input and sorts the list in ascending order.
        </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số cần sắp xếp, các nhau bằng dấu khoẳng trắng"
                value={listNum}
                onChange={e => setListNum(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleOder}>Sắp xếp</button>
            <p className="ml-8 mt-8">Dãy số sắp xếp từ nhỏ đến lớn: {ascendingOder}</p>
        </div>
    )
}
export default AscendingOder