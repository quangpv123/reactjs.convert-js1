import { useState } from "react"

function Exercise310(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        for(let i=0; i < listArray.length; i++){
            for(let j=i+1; j < listArray.length; j++){
                if(listArray[i].length > listArray[j].length){
                    var temp = listArray[i];
                    listArray[i] = listArray[j];
                    listArray[j] = temp;
                }
            }
        }
        return setValue(listArray.join(' '))
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 3-10: Write a program that takes a list of strings as input and returns the list sorted by the number of distinct characters in each string, with the shortest strings appearing first.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào các chuỗi ký tự"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Danh sách chuỗi sắp xếp theo số lượng ký tự tăng dần: {value}</p>
        </div>
    )
}
export default Exercise310