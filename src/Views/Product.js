import { useParams } from "react-router-dom"
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/HttpRequests";



function Product () {
    const { id } = useParams();
    const url = `https://62daa318d1d97b9e0c43514a.mockapi.io/products/${id}`
    let product = useAxiosGet(url)
    let content = null

    if (product.loading) {
        content = <Loader></Loader>
    }

    if (product.error) {
        content = <p className="text-red-400">There was an error. Please check productId or try again later.</p>
    }

    if (product.data) {
        content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name} />
            </div>
            <div className="font-bold text-xl mb-3">
                Rs. {product.data.price}
            </div>
            <div className="font-medium">
                {product.data.description}
            </div>
        </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product