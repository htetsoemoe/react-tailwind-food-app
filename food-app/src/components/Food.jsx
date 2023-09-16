import React, { useEffect, useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        setFoods(data)
    }, [])

    // Filter foods with specified category
    const filterCategory = (category) => {
        setFoods(
            data.filter(food => {
                return food.category === category
            })
        )
    }

    // Filter foods with specified price
    const filterPrice = (price) => {
        setFoods(
            data.filter(food => {
                return food.price === price
            })
        )
    }

    return (
        <div className='max-w-[1400px] mx-auto p-4 py-12'>
            <h1 className="text-orange-600 font-bold text-4xl text-center mb-4">
                Top Rated Menu Items
            </h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between gap-5 mb-4">
                {/* Filter with food type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex flex-wrap">
                        <button onClick={() => setFoods(data)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            All
                        </button>
                        <button onClick={() => filterCategory('burger')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Burgers
                        </button>
                        <button onClick={() => filterCategory('pizza')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Pizza
                        </button>
                        <button onClick={() => filterCategory('salad')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Salads
                        </button>
                        <button onClick={() => filterCategory('chicken')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Chicken
                        </button>
                    </div>
                </div>

                {/* Filter with food price */}
                <div>
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex flex-wrap">
                        <button onClick={() => setFoods(data)}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            All
                        </button>
                        <button onClick={() => filterPrice('$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $
                        </button>
                        <button onClick={() => filterPrice('$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $$
                        </button>
                        <button onClick={() => filterPrice('$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $$$
                        </button>
                        <button onClick={() => filterPrice('$$$$')}
                            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                            $$$$
                        </button>
                    </div>
                </div>
            </div>

            {/* display foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                {foods.map((food, index) => {
                    return (
                        // food card
                        <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                            <img src={food.image} alt={food.name}
                                className="w-full h-[200px] object-cover rounded-t-lg" />
                            <div className="flex justify-between px-3 py-4">
                                <p className="font-bold">{food.name}</p>
                                <p className="">
                                    <span className="bg-orange-500 text-white p-1 rounded-full">
                                        {food.price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Food
