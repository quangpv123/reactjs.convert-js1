import { useState } from "react"

function Exercise41(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let longestArray = [];
        let currentArray = [];
        for (let i = 0; i < listArray.length; i++) {
        if (i === 0 || listArray[i] - listArray[i - 1] === 1) {
          currentArray.push(listArray[i]);
        }
        else {
          if (currentArray.length > longestArray.length) {
            longestArray = currentArray;
          }
           currentArray = [listArray[i]];
        }
    }

  if (currentArray.length > longestArray.length) {
    longestArray = currentArray;
  }

        return setValue(longestArray.length)
    }
    return(
      <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
      <h1 className = 'text-center mt-4 text-lg'>Level 4-9: Write a program that takes a list of integers as input and returns the length of the longest increasing subsequence of the numbers, with the additional constraint that no two adjacent elements in the subsequence can differ by more than 1. ( Khuyến khích dùng reduce )
      </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số (Ví dụ: 1, 2, 3,...)"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Độ dài dãy con dài nhất tăng dần 1 đơn vị: {value}</p>
        </div>
    )
}
export default Exercise41