import { useState } from "react"

function Exercise57() {
    const [collections, setCollections] = useState('');
    const [keys, setKeys] = useState([]);
    const [value, setValue] = useState({})
    const handle = () => {
        let newArr = JSON.parse(collections)
        let keysArray = JSON.parse(keys)
        const result = newArr.reduce((acc, obj) => {
        const newObj = {};
        keysArray.forEach((key) => {
          if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
          }
        });
        acc.push(newObj);
        return acc;
      }, []);
      setValue(result);
    };
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>
                Level 5-7: MapKey: Cho 1 mảng các key, vào 1 mảng các object,
                Viết một function để trả ra một mảng các object theo thứ tự mảng các key (Yêu cầu dùng hàm map)
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder='Nhập vào collection dạng [{"a": 1, "b": 2}, {"a": 1, "c": 2},...]'
                value={collections}
                onChange={e => setCollections(e.target.value)}
            ></input>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder='Nhập vào mảng các keys dạng ["a", "c",...]'
                value={keys}
                onChange={e => setKeys(e.target.value)}
            ></input>
            <button 
                    onClick={handle}
                    className="ml-8 bg-orange-200 px-6 font-medium"
            >Kết quả</button>
            <p className="ml-8 mt-8">Mảng mới: {value !== "" ? JSON.stringify(value  ) : ""}</p>
        </div>
    )
}
export default Exercise57