import { useState } from "react"

function Exercise23(){
    const [list1, setList1] = useState('')
    const [list2, setList2] = useState('')
    const [value, setValue] = useState('')
    let m = list1.length, n = list2.length, longest = 0, endIndex = 0
    let matrix = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0))
    const handleList = () => {
        for(let i=1; i<=m; i++){
            for(let j=1; j<=n; j++){
                if(list1[i-1] === list2[j-1]){
                    matrix[i][j] = matrix[i-1][j-1] + 1;
                    if(matrix[i][j] > longest){
                        longest = matrix[i][j]
                        endIndex = i - 1
                    }
                } else {
                    matrix[i][j] = 0
                }
            }
        }
        return setValue(list1.substring(endIndex - longest + 1, endIndex + 1))
    }
    
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 2-3: Write a program that takes two strings as input and returns the longest common subsequence of the two strings.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập chuỗi 1"
                value={list1}
                onChange={e => setList1(e.target.value)}
            ></input>
            <input
                placeholder="Nhập chuỗi 2"
                value={list2}
                onChange={e => setList2(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleList}>Kết quả</button>
            <p className="ml-8 mt-8">Dãy con chung dài nhất: {value}</p>
        </div>
    )
}
export default Exercise23