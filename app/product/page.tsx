import Image from "next/image";
import ProductItem from "../components/ProductItem";

export default function Products() {
    const products = [
        { id: 1, name: "Computer", description: "Product description goes here.", image: "https://th.bing.com/th/id/OIP.WOeswlUSB3TYDPLbYbwa4AHaHa?rs=1&pid=ImgDetMain" },
        { id: 2, name: "Laptop core i7", description: "Product description goes here.", image: "https://www.jib.co.th/img_master/product/original/2024020815500365364_3.png" },
        { id: 3, name: "RTX 5070", description: "Product description goes here.", image: "https://www.jib.co.th/img_master/product/original/2025030511015374866_1.jpg" },
        { id: 4, name: "Keyboard", description: "Product description goes here.", image: "https://www.jib.co.th/img_master/product/original/2022082315181054787_1.jpg" },
        { id: 5, name: "iPad 5th Gen", description: "Product description goes here.", image: "https://th.bing.com/th/id/OIP.WOeswlUSB3TYDPLbYbwa4AHaHa?rs=1&pid=ImgDetMain" },
    ];

    return (
        <div>
            <h1 className="font-bold text-2xl text-center my-4">Product</h1>
            <div className="flex flex-wrap m-auto justify-center w-[80%] border rounded p-4 bg-slate-100 mb-6">
                {
                    products.map((product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                productName={product.name}
                                description={product.description}
                                image_url={product.image}
                            />
                        )
                    })
                }
            </div>
            <footer className="bg-blue-200 p-2 text-center font-bold text-xl"> ..:: Product footer ::.. </footer>
        </div>
    )
}
