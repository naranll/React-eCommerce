import "../../styles/categories.css"

export default function Categories() {
    return <div className="categories">
        <p>Popular products</p>
        <ul>
            {/* add rendering effect */}
            <li>Camera</li>
            <li>Laptops</li>
            <li>Tablets</li>
            <li>Mouse</li>
            <li>Sale</li>
        </ul>
    </div >
}