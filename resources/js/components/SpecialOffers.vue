<template>
    <div class="grid grid-cols-2 text-white font-poppins font-bold">
        <div class="row-span-2 relative">
            <img :src="family_feast" alt="" class="absolute inset-0 w-full h-full object-cover">
            <div class="relative h-full flex flex-col px-4 sm:px-8 md:px-14 lg:px-24 pb-20 bg-black bg-opacity-70 transition-all hover:bg-opacity-80">
                <h6 class="text-lg sm:text-xl py-2 mt-auto">Family Feast</h6>
                <h5 class="text-3xl sm:text-4xl py-1 sm:py-2 mb-2 sm:mb-5">Gather Your Loved Ones for a Delicious Meal</h5>
                <div class="pt-2 sm:pt-6">
                    <a href="#" class="transition hover:text-rose-600 py-2 px-6 rounded-full bg-amber-500">Order Now</a>
                </div>
                <span
                    class="absolute top-10 right-10 bg-white text-black font-black w-32 h-32 sm:w-44 sm:h-44 flex flex-col items-center rounded-full p-4 justify-center text-center text-2xl sm:text-4xl">3 Meals <span class="whitespace-nowrap">+ 1 Free</span></span>
            </div>
        </div>
        <div>
            <div class="relative">
                <img :src="student" alt="" class="absolute inset-0 w-full h-full object-cover">
                <div
                    class="relative pt-24 sm:pt-40 lg:pt-56 px-4 sm:px-8 md:px-14 lg:px-24 pb-10 sm:pb-20 bg-black bg-opacity-70 box-border transition-all hover:bg-opacity-80">
                    <h6 class="text-lg sm:text-xl py-2">Student Saver</h6>
                    <h5 class="text-3xl sm:text-4xl py-1 sm:py-2 mb-2 sm:mb-5">Exclusive Savings for Students</h5>
                    <div class="pt-2 sm:pt-6">
                        <a href="#" class="transition hover:text-rose-600 py-2 px-6 rounded-full bg-amber-500">Order Now</a>
                    </div>
                    <span
                        class="absolute -top-5 left-10 bg-yellow-500 text-white font-black w-28 h-28 sm:w-36 sm:h-36 flex flex-col items-center justify-center rounded-full p-5 pt-0 text-center text-3xl sm:text-5xl whitespace-nowrap -rotate-12"><span class="text-2xl font-medium uppercase">offre</span>- 15%</span>
                </div>
            </div>
            <div class="relative">
                <img :src="meal" alt="" class="absolute inset-0 w-full h-full object-cover">
                <div
                    class="relative pt-20 sm:pt-40 lg:pt-56 px-4 sm:px-8 md:px-14 lg:px-24 pb-10 sm:pb-20 bg-black bg-opacity-70 box-border transition-all hover:bg-opacity-80">
                    <h6 class="text-lg sm:text-xl py-2">Combo Delight</h6>
                    <h5 class="text-3xl sm:text-4xl py-1 sm:py-2 mb-2 sm:mb-5">Satisfy Your Cravings with Our Irresistible Combo</h5>
                    <div class="pt-2 sm:pt-6">
                        <a href="#" class="transition hover:text-rose-600 py-2 px-6 rounded-full bg-amber-500">Order Now</a>
                    </div>
                    <span
                        class="absolute -top-5 left-10 bg-rose-600 text-white font-black w-28 h-28 sm:w-36 sm:h-36 flex flex-col items-center justify-center rounded-full p-5 pt-0 text-center text-3xl sm:text-5xl whitespace-nowrap -rotate-12"><span class="text-2xl font-medium uppercase">only</span>$9.99</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import family_feast from "../../images/family-feast.jpg"
import student from "../../images/student.jpg"
import meal from "../../images/meal.jpg"
export default {
    name: "SpecialOffers",
    data() {
        return { family_feast, student, meal}
    }
}
</script>