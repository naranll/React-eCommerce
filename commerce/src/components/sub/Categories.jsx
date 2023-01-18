import "../../styles/categories.css";

export default function Categories(prop) {
    const { chosenCategory } = prop;
    return <div >
        <div className="categories">
            <h2>Popular products</h2>
            <ul>
                <li ><button onClick={() => chosenCategory('all')}>All</button></li>
                <li ><button onClick={() => chosenCategory('computers & tablets')}>Computers & Tablets</button></li>
                <li ><button onClick={() => chosenCategory('appliances')}>Appliances</button></li>
                <li ><button onClick={() => chosenCategory('gaming console')}>Console</button></li>
                <li ><button onClick={() => chosenCategory('telescope')}>Telescope</button></li>
            </ul>
        </div>
    </div >

}