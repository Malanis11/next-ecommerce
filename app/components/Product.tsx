import Image from "next/image";
import formatPrice from "@component/util/PriceFormat";

export default function Product({ name, image, price }) {
    return(
        <>
            <Image src={image} alt={name} width={400} height={400} />
            <h1>{name}</h1>
            {formatPrice(price)}
        </>
    )
}