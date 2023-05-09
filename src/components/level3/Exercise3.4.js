import { useState } from "react"

function Exercise34(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
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
                twoStringMaxOverlap = [listArray[i], listArray[j]].join(' - ');
            }   
        }
    }
        return setValue(twoStringMaxOverlap)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
        <h1 className = 'text-center mt-4 text-lg'>Level 3-4: Write a program that takes a list of strings as input and returns the two strings with the largest overlap of characters.
        </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Hai chuỗi có nhiều số ký tự trùng nhau nhất: {value}</p>
        </div>
    )
}
export default Exercise34