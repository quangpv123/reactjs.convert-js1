import { useState } from "react"

function Exercise41(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let shortestStr = listArray.reduce((acc, str) => str.length < acc.length ? str : acc, listArray[0]);
        let maxLength = 0;
        for (let i = 0; i < shortestStr.length; i++) {
        for (let j = i + 1; j <= shortestStr.length; j++) {
            let substring = shortestStr.substring(i, j);
            let check = true;
            for (let k = 0; k < listArray.length; k++) {
            if (!listArray[k].includes(substring)) {
                check = false;
                break;
            }
            }
            if (check && substring.length > maxLength) {
            maxLength = substring.length;
            }
        }
        }
        return setValue(maxLength)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 4-3: Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào các chuỗi ký tự"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Độ dài chuỗi con dài nhất: {value}</p>
        </div>
    )
}
export default Exercise41