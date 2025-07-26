import React from 'react';

export default function ProductCard({ product }) {
    if (!product) return null;
    const { image, title, price, rating } = product;

    return (
        <div className="border rounded-lg shadow p-4 flex flex-col">
            <img src={image}
                alt={title}
                className="h-48 object-contain mb-4" />

            <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {title}
            </h2>

            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">${price.toFixed(2)}</span>
                <span className="text-sm text-yellow-500">
                    ⭐ {rating.rate}
                </span>
            </div>

            <button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded">
                Add to cart
            </button>
        </div>
    );
}
