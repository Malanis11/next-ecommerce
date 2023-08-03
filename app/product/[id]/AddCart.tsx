'use client'

import { useCartStore } from "@component/store"
import { AddCartType } from "@component/types/AddCartType"

export default function AddCart({ name, id, image, quantity, unit_amount }: AddCartType) {
    const cartStore = useCartStore()
    
    return (
        <>
            <button onClick={() => cartStore.addProduct({id, image, unit_amount, quantity, name})} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700">
                Add to cart
            </button>
        </>
    )
}