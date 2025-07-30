import React from "react";
import weeklyMenu from "../../utils/WeeklyMenu";

const WeeklyMealDashboard = () => {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    const todayMenu = weeklyMenu[dayName];

    if (!todayMenu) {
        return (
            <div className="text-center py-10 text-red-600 font-bold text-xl">
                No Menu Found for {dayName}
            </div>
        );
    }

    return (
        <div className="min-h-screen sm:p-5 flex items-center justify-center">
            <div className="w-full sm:w-screen rounded-2xl sm:p-4">
                <h1 className="text-3xl sm:text-5xl font-bold text-center text-rose-800 mb-5 tracking-tight">
                    🍽️ {dayName} – Canteen Menu 🍽️
                </h1>

                {/* Rate Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
                    <div className="bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 rounded-xl shadow-md transform transition-transform hover:scale-[1.02]">
                        <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold py-3 text-center shadow-inner text-xl sm:text-3xl">
                            Breakfast / Snacks
                        </div>
                        <div className="flex flex-col sm:flex-row justify-around py-1 text-xl sm:text-3xl font-semibold">
                            <div className="text-center p-2">
                                <div className="text-gray-600">Subsidized Rate</div>
                                <div className="text-red-700 font-bold mt-1">₹ 18 /-</div>
                            </div>
                            <div className="text-center p-2">
                                <div className="text-gray-600">Commercial Rate</div>
                                <div className="text-green-700 font-bold mt-1">₹ 30 /-</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 rounded-xl shadow-md transform transition-transform hover:scale-[1.02]">
                        <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold py-3 text-center shadow-inner text-xl sm:text-3xl">
                            Lunch / Dinner
                        </div>
                        <div className="flex flex-col sm:flex-row justify-around py-1 text-xl sm:text-3xl font-semibold">
                            <div className="text-center p-2">
                                <div className="text-gray-600">Subsidized Rate</div>
                                <div className="text-red-700 font-bold mt-1">₹ 50 /-</div>
                            </div>
                            <div className="text-center p-2">
                                <div className="text-gray-600">Commercial Rate</div>
                                <div className="text-green-700 font-bold mt-1">₹ 60 /-</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col items-center space-y-5 w-full">
                        {/* Breakfast */}
                        <div className="bg-amber-50 rounded-2xl p-2 shadow-lg border border-rose-200 overflow-hidden w-full sm:w-4/5 md:w-2/3">
                            <h3 className="text-2xl sm:text-5xl font-bold text-red-700 mb-4 flex items-center justify-center">
                                <span className="mr-2">🥣</span> Morning Breakfast <span className="ml-2 mb-2">🥣</span>
                            </h3>
                            <div>
                                {todayMenu.breakfastItems.map((item, i) => (
                                    <div key={i} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-amber-100 transition-colors">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-amber-200 shadow-sm object-cover"
                                        />
                                        <span className="text-2xl sm:text-4xl text-amber-900 font-bold">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Snacks */}
                        <div className="bg-amber-50 rounded-2xl p-2 shadow-lg border border-amber-200 overflow-hidden w-full sm:w-4/5 md:w-2/3">
                            <h3 className="text-2xl sm:text-5xl font-bold text-red-700 mb-4 flex items-center justify-center">
                                <span className="mr-2">🍟</span> Evening Snacks <span className="ml-2 mb-2">🍟</span>
                            </h3>
                            <div>
                                {todayMenu.snacksItems.map((item, i) => (
                                    <div key={i} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-amber-100 transition-colors">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-amber-200 shadow-sm object-cover"
                                        />
                                        <span className="text-2xl sm:text-4xl text-amber-900 font-bold">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-2 gap-6 w-full">
                        {/* Lunch */}
                        <div className="bg-slate-800 text-white rounded-2xl p-5 overflow-hidden shadow-md border-4 border-amber-400">
                            <h3 className="text-2xl sm:text-5xl font-bold text-rose-300 mb-4 flex items-center justify-center">
                                <span className="mr-2">🍽️</span> <u>Lunch</u> <span className="ml-2">🍽️</span>
                            </h3>
                            <ul className="list-disc list-inside grid gap-x-6 gap-y-3 text-base sm:text-3xl text-gray-100 px-3 py-4">
                                {todayMenu.lunch.map((item, i) => (
                                    <li key={i} className="font-bold hover:text-rose-200 transition-colors">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Dinner */}
                        <div className="bg-slate-800 text-white rounded-2xl p-5 overflow-hidden shadow-md border-4 border-amber-400">
                            <h3 className="text-2xl sm:text-5xl font-bold text-rose-300 mb-4 flex items-center justify-center">
                                <span className="mr-2">🍲</span> <u>Dinner</u> <span className="ml-2">🍲</span>
                            </h3>
                            <ul className="list-disc list-inside grid gap-x-6 gap-y-3 text-base sm:text-3xl text-gray-100 px-3 py-4">
                                {todayMenu.dinner.map((item, i) => (
                                    <li key={i} className="font-bold hover:text-rose-200 transition-colors">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Special Items */}
                    {todayMenu.specialItems && (
                        <div className="col-span-full bg-gradient-to-r from-amber-50 to-rose-50 p-5 border-l-4 border-rose-500 rounded-xl shadow-md">
                            <h4 className="text-rose-800 font-bold text-lg sm:text-xl mb-2 flex items-center">
                                <span className="mr-2">⭐</span> Special Items : <span className="ml-2 text-blue-900">Minimum 10 Pre-order required</span>
                            </h4>
                            <div className="space-y-2">
                                {Object.entries(todayMenu.specialItems).map(([mealType, items], index) => (
                                    <div key={index} className="ml-2 text-gray-700 bg-rose-100 p-2 rounded-lg">
                                        <strong className="capitalize text-rose-800">{mealType}:</strong> {items.join(", ")}
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
