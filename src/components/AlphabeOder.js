import { useState } from "react";

function AlphabeOder(){
    const [list, setList] = useState('')
    const [listAlphabeOder, setListAlphabeOder] = useState('')
    const handleList = () => {
        let listArray = list.split(' ')
        let listOder = listArray.sort().join(' ')
        return setListAlphabeOder(listOder)
    }
   return(
    <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
    <h1 className = 'text-center mt-4 text-lg'>Level 1-7: Write a program that takes a list of strings as input and sorts the list in alphabetical order.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi kí tự cần sắp xếp"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleList}>Sắp xếp</button>
            <p className="ml-8 mt-8">Chuỗi được sắp xếp theo bảng chữ cái: {listAlphabeOder}</p>
        </div>
    )
}

export default AlphabeOder