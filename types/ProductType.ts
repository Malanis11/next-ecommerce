export type ProductType = {
    name: string,
    id: string,
    unit_amount: number | null,
    quantity?: number | 1,
    image: string,
    description: string | null,
    metadata: MetadataType 
}

type MetadataType = {
    features: string
}