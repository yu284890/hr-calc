'use client';
import { useState } from 'react';
export default function Page() {
        let[value, setate] = useState(new Date());
        const incrementDate = (e: any) => {
            let input = e.target.value;
            let y = parseInt(input.split("-")[0]);
            let m = parseInt(input.split("-")[1]);
            let d = parseInt(input.split("-")[2]);
            let date = new Date(y,m-1,d);
            console.log(date);
            let new_date = date.setDate(date.getDate()-44);
            console.log(new_date);
            return setate(new Date(new_date));
        }
            
    return (
        <>
            <h1 className="flex justify-center items-center bg-gray-900 text-white py-32 text-5xl font-serif">星野リゾート界旅予約日計算</h1>
            <div className='flex justify-center'>
                <p className='text-5xl'>予約を取りたい日:</p>
                <input className="text-5xl" type="date" name="date" id="date" onChange={(e) => incrementDate(e)}/>
            </div>
            <p>{value.toLocaleDateString()}</p>
        </>
    )

  }