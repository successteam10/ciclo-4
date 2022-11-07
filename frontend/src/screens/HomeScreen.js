import data from "../data.js";
import { Link } from 'react-router-dom'

function HomeScreen() {
    return (
        <div>
            <h1>Lista de productos</h1>
            <div className="products">
                {data.productos.map((productos) => (
                    <div className="productos">
                        <Link to={`/productos/${productos.slug}`}>
                            <img src={productos.image} alt={productos.name} />
                        </Link>
                        <div className='productos-info'>
                            <a href={`/productos/${productos.slug}`}>
                                <p>{productos.name}</p>
                            </a>
                            <p>{productos.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default HomeScreen;