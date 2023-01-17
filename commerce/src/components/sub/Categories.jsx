import "../../styles/categories.css";
import { useState } from "react";

export default function Categories() {
    const [category, setCategory] = useState('');
    console.log("category:", category);


    return <div className="categories">
        <h3>Popular products</h3>
        <ul>
            {/* add rendering effect */}
            <li ><button onClick={()=> setCategory('computers & tablets')}>Computers/Tablets</button></li>
            <li ><button onClick={()=> setCategory('appliances')}>Appliances</button></li>
            <li ><button onClick={()=> setCategory('gaming console')}>Console</button></li>
            <li ><button onClick={()=> setCategory('telescope')}>Telescope</button></li>
        </ul>
    </div >
}