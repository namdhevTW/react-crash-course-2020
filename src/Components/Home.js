import Loader from "./Loader"
import ProductCard from "./ProductCard"
import useAxiosGet from "../Hooks/HttpRequests"


function Home () {
    const url = `https://62daa318d1d97b9e0c43514a.mockapi.io/products`
    const products = useAxiosGet(url)

    let content = null

    if (products.loading) {
        content = <Loader></Loader>
    }

    if (products.error) {
        content = <p className="text-red-400">There was an error. Please try again later.</p>
    }

    if (products.data) {
        content = products.data.map((product) => 
            <div key={product.id}>
                <ProductCard product={product}/>
            </div>
        )
    }

    return (
        <div>
            <h1 className='font-bold text-2xl'>Best sellers</h1>
            {content}            
        </div>
    )
}

export default Home