import "../../styles/categories.css";

export default function Categories(prop) {
    const { currentCategory, chosen } = prop;
    return <div >
        <div className="categories">
            <h2>Popular products</h2>
            <ul>
                <li ><button onClick={() => currentCategory('all')} className={chosen === 'all' ? "chosen" : "none"}>All</button></li>
                <li ><button onClick={() => currentCategory('computers & tablets')} className={chosen === 'computers & tablets' ? "chosen" : "none"}>Computers & Tablets</button></li>
                <li ><button onClick={() => currentCategory('appliances')} className={chosen === 'appliances' ? "chosen" : "none"}>Appliances</button></li>
                <li ><button onClick={() => currentCategory('gaming console')} className={chosen === 'gaming console' ? "chosen" : "none"}>Console</button></li>
                <li ><button onClick={() => currentCategory('telescope')} className={chosen === 'telescope' ? "chosen" : "none"}>Telescope</button></li>
            </ul>
        </div>
    </div >

}