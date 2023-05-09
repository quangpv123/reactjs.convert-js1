import { useState } from "react"

function Exercise55(){
    const [collection, setCollection] = useState([])
    const [keys, setKeys] = useState("")
    const [value, setValue] = useState({})
    const handle = () => {
        const result = {};
    for(const item of collection){
        const key = item[keys];
        if(!result[key]){
            result[key] = [];
        }

        result[key].push(item);
    }
        console.log(result)
        setValue(result)
    }
    
   
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>
                Level 5-5: Group by: Cho đầu vào là 1 collection ( array of object ), 
                Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập collection dạng [{a: 1, b: 2}, {a: 1, b: 3},...]"
                value={collection}
                onChange={e => setCollection(e.target.value)}
            ></input>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập key GruopBy. Ví dụ: a"
                value={keys}
                onChange={e => setKeys(e.target.value)}
            ></input>
            <button 
                    onClick={handle}
                    className="ml-8 bg-orange-200 px-6 font-medium"
            >Kết quả</button>
            <p className="ml-8 mt-8">OBJECT mới chứa dữ liệu được group theo trường chỉ định: {value !== "" ? JSON.stringify(value  ) : ""}</p>
        </div>
    )
}
export default Exercise55