import { useState } from "react"

function Exercise54(){
    const [list, setList] = useState('')
    const [result, setResult] = useState('')
    const handle = () => {
        let array = JSON.parse(list);
        const unique = array.filter(
          (value, index, self) =>
            self.findIndex((m) => m.x === value.x && m.y === value.y) === index
        );
        setResult(unique);
    }
    console.log(result)
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>
                Level 5-8: Switch Order: Viết function để thay đổi thứ tự order của các object. <br></br>
                Ví dụ có input: {'[{ "x": 1, "y": 2 }, {"x": 2, "y": 1 }, { "x": 1, "y": 2 }]'} <br></br>
                Kết quả: {'[{"x":1,"y":2},{"x":2,"y":1}]'}
            </h1>
            <input  
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào collection dạng {'x': a, 'y': b}, {'x': c, 'y': d}"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button 
                onClick={handle}
                className="ml-8 bg-orange-200 px-6 font-medium"
            >Kết quả</button>
            <p className="ml-8 mt-8">Mảng đã loại bỏ cần phần tử trùng nhau: {result !== "" ? JSON.stringify(result) : ""}</p>
        </div>
    )
}
export default Exercise54