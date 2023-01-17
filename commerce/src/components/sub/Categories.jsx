import "../../styles/categories.css"

export default function Categories() {
    return <div className="categories">
        <h3>Popular products</h3>
        <ul>
            {/* add rendering effect */}
            <li><a href="#">Camera</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Tablets</a></li>
            <li><a href="#">Mouse</a></li>
            <li><a href="#">Sale</a></li>
        </ul>
    </div >
}