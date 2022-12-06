import { createContext } from "react";

interface ProductDetailsContextInterface {
    color?: string; 
    size?: string;
}

export const ProductDetailsContext = createContext<ProductDetailsContextInterface|null>(null);