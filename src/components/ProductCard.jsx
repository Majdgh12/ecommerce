import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.userInfo);

    if (!product) return null;
    const { id, image, title, price, rating } = product;

    const handleAddToCart = () => {
        if (userInfo) {
            const itemToAdd = {
                id: id,
                title: title,
                image: image,
                price: price,
                quantity: 1,
            };
            dispatch(addToCart(itemToAdd));
            alert(`${title} was added to your cart!`);
        } else {
            alert('Please sign in to add items to your cart.');
            navigate('/signin');
        }
    };

    return (
        <div className="border rounded-lg shadow p-4 flex flex-col">
            <img src={image} alt={title} className="h-48 object-contain mb-4" />

            <h2 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h2>

            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">${price.toFixed(2)}</span>
                <span className="text-sm text-yellow-500">⭐ {rating.rate}</span>
            </div>

            <button
                className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded"
                onClick={handleAddToCart}
            >
                Add to cart
            </button>
        </div>
    );
}