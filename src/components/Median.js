import { useState } from "react"

function Median(){
    const [list, setList] = useState('')
    const [median, setMedian] = useState('')
    const handleList = () => {
        let listArray = list.split(' ')
        let listOder = listArray.sort((a, b) => a - b)
        let x = listOder.length
        let medianValue = ''
        console.log(typeof listOder)
        console.log(x)
        if(x%2===0){
            medianValue = (parseInt(listOder[x/2-1])+parseInt(listOder[x/2]))/2;
        } else {
            medianValue = parseInt(listOder[(x-1)/2]);
        }
        return setMedian(medianValue)
    }

    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
        <h1 className = 'text-center mt-4 text-lg'>Level 1-8: Write a program that takes a list of numbers as input and returns the median of the numbers.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleList}>Kết quả</button>
            <p className="ml-8 mt-8">Median Value: {median}</p>
        </div>
    )
}
export default Median