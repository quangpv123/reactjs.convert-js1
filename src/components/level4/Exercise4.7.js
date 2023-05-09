import { useState } from "react"

function Exercise47(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(', ')
    const handle = () => {
        for(let i=0; i<listArray.length; i++){
            for(let j=0; j<listArray.length-1-i; j++){
                if(listArray[j].length < listArray[j+1].length){
                    let temp = listArray[j];
                    listArray[j] = listArray[j+1];
                    listArray[j+1] = temp;
                }
    
                if(listArray[j].length === listArray[j+1].length){
                    if(listArray[j].localeCompare(listArray[j+1]) > 0){
                        let temp2 = listArray[j];
                        listArray[j] = listArray[j+1];
                        listArray[j+1] = temp2;
                    }
                }
            }
        }
        let newListArray = listArray.join(", ")
        setValue(newListArray)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 4-7: Write a program that takes a list of strings as input and returns the list sorted by the number of distinct words in each string, with the longest strings appearing first.
             </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào các chuỗi cách nhau bằng dấu phẩy"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Các chuỗi được sắp xếp: {value}</p>
        </div>
    )
}
export default Exercise47