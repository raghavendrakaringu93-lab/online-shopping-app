import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    

    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const exists = prev.some(item => item.id === product.id);

            if (exists) return prev;
            return [...prev, product];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((product) => product.id !== id))
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}