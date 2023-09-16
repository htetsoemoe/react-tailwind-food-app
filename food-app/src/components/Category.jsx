import React from 'react'
import { categories } from '../data/data.js'

const Category = () => {
    //console.log(categories);

    return (
        <div className='max-w-[1400px] mx-auto p-4 py-12'>
            <h1 className="text-orange-600 font-bold text-4xl text-center">
                Top Rated Menu Items
            </h1>

            {/* Category Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-6">
                {categories.map((category, index) => {
                    return (
                        <div key={index}
                            className="flex justify-between items-center bg-gray-100 rounded-lg p-3 hover:scale-105 duration-300">
                            <h2 className="font-bold sm:text-xl">{category.name}</h2>
                            <img src={category.image} alt={category.name} className="w-20" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category
