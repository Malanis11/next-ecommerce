import { SearchParamTypes } from "@component/types/SearchParamTypes"
import Image from "next/image"
import formatPrice from "@component/util/PriceFormat"
import AddCart from "./AddCart"

export default async function Product({ searchParams }: SearchParamTypes) {
    return (
        <div className="flex justify-between gap-24 p-12 text-gray-700">
            <Image
                src={searchParams.image}
                alt={searchParams.name}
                width={600} 
                height={600}
            />
            <div className="font-medium text-gray-700">
                <h1 className="text-2x1 py-2">{searchParams.name}</h1>
                <p className="py-2">{searchParams.description}</p>
                <p className="py-2">{searchParams.features}</p>
                <div className="flex gap-2">
                    <p className="font-bold text-teal-700">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
                </div>
                <AddCart {...searchParams}/>
            </div>
        </div>
    )
}