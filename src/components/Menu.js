import React from "react";
import weeklyMenu from "../../utils/WeeklyMenu";

const WeeklyMealDashboard = () => {
    const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const todayMenu = weeklyMenu[dayName];

    if (!todayMenu) {
        return (
            <div className="text-center py-10 text-red-600 font-bold text-xl">
                No Menu Found for {dayName}
            </div>
        );
    }

    return (
        <div className="min-h-screen sm:p-3 flex items-center justify-center bg-gradient-to-br from-yellow-50 to-pink-50">
            <div className="w-full sm:w-screen rounded-2xl sm:p-1">
                <h1 className="text-3xl sm:text-5xl font-bold text-center text-rose-700 mb-5 tracking-tight">
                    🍽️ {dayName} – Canteen Menu 🍽️
                </h1>

                {/* Rate Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
                    <div className="bg-gradient-to-r from-pink-50 to-yellow-50 border border-pink-200 rounded-xl shadow-md transform transition-transform hover:scale-[1.02]">
                        <div className="bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-bold py-3 text-center shadow-inner text-xl sm:text-4xl">
                            Breakfast / Snacks
                        </div>
                        <div className="flex flex-col sm:flex-row justify-around py-1 text-xl sm:text-3xl font-semibold">
                            <div className="text-center p-2">
                                <div className="text-gray-600">Subsidized Rate</div>
                                <div className="text-pink-700 font-bold mt-1">₹ 18 /-</div>
                            </div>
                            <div className="text-center p-2">
                                <div className="text-gray-600">Commercial Rate</div>
                                <div className="text-emerald-700 font-bold mt-1">₹ 30 /-</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-yellow-50 border border-pink-200 rounded-xl shadow-md transform transition-transform hover:scale-[1.02]">
                        <div className="bg-gradient-to-r from-pink-600 to-yellow-500 text-white font-bold py-3 text-center shadow-inner text-xl sm:text-4xl">
                            Lunch / Dinner
                        </div>
                        <div className="flex flex-col sm:flex-row justify-around py-1 text-xl sm:text-3xl font-semibold">
                            <div className="text-center p-2">
                                <div className="text-gray-600">Subsidized Rate</div>
                                <div className="text-pink-700 font-bold mt-1">₹ 50 /-</div>
                            </div>
                            <div className="text-center p-2">
                                <div className="text-gray-600">Commercial Rate</div>
                                <div className="text-emerald-700 font-bold mt-1">₹ 60 /-</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col items-center space-y-6 w-full">
                        {/* Breakfast */}
                        <div className="bg-yellow-50 rounded-2xl p-3 shadow-xl border border-pink-200 overflow-hidden w-full sm:w-4/5 md:w-2/3 transition-transform duration-300 hover:scale-[1.01]">
                            <h3 className="text-2xl sm:text-5xl font-extrabold text-pink-700 mb-3 flex items-center justify-center tracking-tight">
                                <span className="mr-3 text-3xl">🥣</span>
                                Morning Breakfast
                                <span className="ml-3 text-3xl mb-1">🥣</span>
                            </h3>
                            <div className="space-y-3">
                                {todayMenu.breakfastItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center space-x-4 p-1 rounded-xl hover:bg-yellow-100 transition-colors duration-200"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-20 h-20 sm:w-20 sm:h-20 rounded-xl border-2 border-yellow-200 shadow-md object-cover"
                                        />
                                        <span className="text-xl sm:text-3xl text-yellow-900 font-bold">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Snacks */}
                        <div className="bg-yellow-50 rounded-2xl p-3 shadow-xl border border-yellow-200 overflow-hidden w-full sm:w-4/5 md:w-2/3 transition-transform duration-300 hover:scale-[1.01]">
                            <h3 className="text-2xl sm:text-5xl font-extrabold text-pink-700 mb-3 flex items-center justify-center tracking-tight">
                                <span className="mr-3 text-3xl">🍟</span>
                                Evening Snacks
                                <span className="ml-3 text-3xl mb-1">🍟</span>
                            </h3>
                            <div className="space-y-3">
                                {todayMenu.snacksItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center space-x-4 p-1 rounded-xl hover:bg-yellow-100 transition-colors duration-200"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-20 h-20 sm:w-20 sm:h-20 rounded-xl border-2 border-yellow-200 shadow-md object-cover"
                                        />
                                        <span className="text-xl sm:text-3xl text-yellow-900 font-bold">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-2 gap-6 w-full">
                        {/* Lunch */}
                        <div className="bg-gray-900 text-white rounded-2xl p-5 overflow-hidden shadow-md border-4 border-yellow-400">
                            <h3 className="text-2xl sm:text-5xl font-bold text-yellow-300 mb-4 flex items-center justify-center">
                                <span className="mr-2">🍽️</span> <u>Lunch</u> <span className="ml-2">🍽️</span>
                            </h3>
                            <ul className="list-disc list-inside grid gap-x-6 gap-y-3 text-base sm:text-3xl text-gray-200 px-3 py-4">
                                {todayMenu.lunch.map((item, i) => (
                                    <li key={i} className="font-bold hover:text-yellow-200 transition-colors">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Dinner */}
                        <div className="bg-gray-900 text-white rounded-2xl p-5 overflow-hidden shadow-md border-4 border-yellow-400">
                            <h3 className="text-2xl sm:text-5xl font-bold text-yellow-300 mb-4 flex items-center justify-center">
                                <span className="mr-2">🍲</span> <u>Dinner</u> <span className="ml-2">🍲</span>
                            </h3>
                            <ul className="list-disc list-inside grid gap-x-6 gap-y-3 text-base sm:text-3xl text-gray-200 px-3 py-4">
                                {todayMenu.dinner.map((item, i) => (
                                    <li key={i} className="font-bold hover:text-yellow-200 transition-colors">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Special Items */}
                    {todayMenu.specialItems && (
                        <div className="col-span-full bg-gradient-to-r from-yellow-100 to-pink-100 p-4 border-l-4 border-pink-600 rounded-2xl shadow-lg">
                            <h4 className="text-pink-900 font-extrabold text-xl sm:text-2xl mb-4 flex items-center">
                                <span className="mr-3 text-2xl">⭐</span>
                                Special Items
                                <span className="ml-3 text-base text-indigo-800 font-medium italic">(Minimum 10 Pre-order required)</span>
                            </h4>
                            <div className="space-y-3">
                                {Object.entries(todayMenu.specialItems).map(([mealType, items], index) => (
                                    <div
                                        key={index}
                                        className="ml-4 px-4 py-2 bg-white text-gray-800 rounded-lg border border-pink-300"
                                    >
                                        <span className="block font-bold text-pink-700 capitalize mb-1">
                                            {mealType} :
                                            <span className="text-gray-700 font-medium"> {items.join(", ")}</span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeeklyMealDashboard;
