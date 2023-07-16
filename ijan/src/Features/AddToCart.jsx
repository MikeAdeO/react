import { useState } from "react";
import  {HiOutlineShoppingBag}  from "react-icons/hi"
import {CiSquareRemove}  from "react-icons/ci";
import  { BiSolidCartAdd} from "react-icons/bi";

const AddToCart =  () =>  {
    const  [itemCount, setItemCount] = useState(1);
    const remove = () =>  {

        setItemCount(Math.max(itemCount -  1, 0));
    }

    const  increase = () => {
    setItemCount(itemCount  + 1);

    }
    return (
        <div>
             <HiOutlineShoppingBag  className="icon"/><h1>{itemCount}</h1>
            <div className="remove">
            <CiSquareRemove onClick={remove} className="icon"/>
            </div>
            <div className="increase">
            <BiSolidCartAdd  onClick={increase} className="icon"/>
            </div>
          
            
        </div>
    )
}

export default AddToCart;