import { useState } from "react"

function Exercise410(){
    const [list, setList] = useState('')
    const [twoString, setTwoString] = useState('...')
    const [common, setCommon] = useState('...')
    const [lengthCommon, setLengthCommon] = useState('...')
    const listArray = list.split(' ')
    const handle = () => {
        let maxOverlap = 0;
        let twoStringMaxOverlap = "";
        for(let i=0; i<listArray.length; i++){
            for(let j=i+1; j<listArray.length; j++){
                let overlap = 0;
                for(let k=0; k<listArray[i].length; k++){
                if (listArray[j].includes(listArray[i][k])){
                        overlap++;
                }                
                }
                if(overlap > maxOverlap){
                    maxOverlap = overlap;
                    let str1 = listArray[i];
                    let str2 = listArray[j];
                    twoStringMaxOverlap = [str1, str2]
                }
            }
        }
        
        let str1 = twoStringMaxOverlap[0]
        let str2 = twoStringMaxOverlap[1]
        let m = str1.length;
        let n = str2.length;
        let longest = 0;
        let endIndex = 0;
        let matrix = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
        for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
            matrix[i][j] = matrix[i - 1][j - 1] + 1;
            if (matrix[i][j] > longest) {
                longest = matrix[i][j];
                endIndex = i - 1;
            }
            } else {
            matrix[i][j] = 0;
            }
        
        }
    }
    let str3 = str1.substring(endIndex - longest + 1, endIndex +1)    
    setTwoString(twoStringMaxOverlap.join(' - '))
    setCommon(str3)
    setLengthCommon(str3.length)

    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 4-1: Write a program that takes a list of strings as input and returns the two strings with the largest overlap of substrings, where the substrings must be at least k characters long (where k is a parameter to the function).
             </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào các chuỗi ký tự"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium"
                    onClick={handle}
            >Kết quả</button>
            <p className="ml-8 mt-8">
                Hai chuỗi có chuỗi con chung dài nhất: {twoString}
                <br></br>
                Chuỗi con chung: {common}
                <br></br>
                Độ dài chuỗi con chung: {lengthCommon}
            </p>
        </div>
    )
}
export default Exercise410