type params = {
    id: string
}

type SearchParams = {
    name: string,
    id: string,
    unit_amount: number | null,
    image: string,
    description: string | null,
    features: string
    quantity: number | 1
}

export type SearchParamTypes = {
    params: params,
    searchParams: SearchParams
}