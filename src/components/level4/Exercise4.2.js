import { useState } from "react"

function Exercise41(){
    const [list, setList] = useState('')
    const [target, setTarget] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let dp = new Array(listArray.length + 1).fill(0);
            dp[0] = 1;
        for (let i = 1; i <= listArray.length; i++) {
        for (let j = target; j >= listArray[i - 1]; j--) {
            dp[j] += dp[j - listArray[i - 1]];
        }
        }
        return setValue(dp[target])
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 4-2: Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <input
                placeholder="Giá trị đích"
                value={target}
                onChange={e => setTarget(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Số lượng dãy con có tổng bằng giá trị đích: {value}</p>
        </div>
    )
}
export default Exercise41