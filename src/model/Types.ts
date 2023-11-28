export interface Product{
    name: string;
    price: number|null;
    id: number;
}

export interface CartDetail{
    productId: number;
    quantity: number;
}

export interface Category {
    id: number;
    name: string;
    
}