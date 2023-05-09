import { useState } from "react"

function ShortestString(){
    const [string, setString] = useState('')
    let array = string.split(' ')
    let minLength = array[0]
    const [shortest, setShortest] = useState('')
    const handleString = () => {
        for(let i=1; i<array.length; i++){
            if(array[i].length<minLength.length){
                minLength = array[i]
            }
        }
        return setShortest(minLength)
    }
    console.log(string)
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 1-5: Write a program that takes a list of strings as input and displays the shortest string in the list. </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào các chuỗi kí tự"
                value={string}
                onChange={e => setString(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleString}>Kết quả</button>
            <p className="ml-8 mt-8">Chuỗi ngắn nhất: {shortest}</p>
        </div>
    )
}
export default ShortestString