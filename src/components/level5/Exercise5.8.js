import { useState } from "react"

function Exercise51(){
    const [obj, setObj] = useState('')
    const [id, setID] = useState('')
    const [order, setOrder] = useState('')
    const [result, setResult] = useState('')
    const handle = () => {
        try {
            const objArray = JSON.parse(obj);
            const updatedArray = objArray.map(item => {
                if (item.id === Number(id)) {
                    return { ...item, order: Number(order) };
                }
                return item;
            });
            setResult(updatedArray);
        } catch (error) {
            setResult([]);
        }
    };
    return(
        <div
            className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 5-8: Switch Order: Viết function để thay đổi thứ tự order của các object.
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder='Nhập vào OBJ cần thay đổi thứ tự Order. Ví dụ: [{"id": 10, "order": 0},...]'
                value={obj}
                onChange={e => setObj(e.target.value)}
            ></input>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="ID đổi thứ tự Order"
                value={id}
                onChange={e => setID(e.target.value)}
            ></input>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Vị trí Order mới"
                value={order}
                onChange={e => setOrder(e.target.value)}
            ></input>
            <button 
                    onClick={handle}
                    className="ml-8 bg-orange-200 px-6 font-medium"
            >Kết quả</button>
            <p className="ml-8 mt-8">OBJ đã được đổi thứ tự Order: {result !== "" ? JSON.stringify(result) : ""}</p>
        </div>
    )
}
export default Exercise51