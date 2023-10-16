<template>
    <div class="p-12 text-center">
        <h3 class="sm:text-7xl text-5xl font-chalck py-1">Featured Delights</h3>
        <h6 class="px-10 sm:text-xl py-1 text-gray-700">Explore Our Signature Dishes and Limited-Time Promotions</h6>
        <div class="grid md:grid-cols-3 gap-24 py-10 px-20 mb-14">
            <div class="text-left">
                <div class="relative">
                    <img :src="burger" alt="Burger" class="block rounded-full p-5 bg-orange-500 hover:p-0 transition-all">
                    <div class="absolute block bottom-0 right-0 text-2xl sm:text-3xl sm:py-4 sm:px-7 p-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">$9.99</div>
                </div>
                <h5 class="text-3xl py-3">The Ultimate Burger</h5>
                <p>Juicy beef patty, crispy bacon, fresh lettuce, tomatoes, and our secret sauce, all packed in a toasted sesame seed bun.</p>
            </div>
            <div class="text-left">
                <div class="relative">
                    <img :src="chicken" alt="Burger" class="block rounded-full p-5 bg-orange-500 hover:p-0 transition-all">
                    <div class="absolute block bottom-0 right-0 text-2xl sm:text-3xl sm:py-4 sm:px-7 p-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">$8.49</div>
                </div>
                <h5 class="text-3xl py-3">Crispy Chicken Deluxe</h5>
                <p>Crispy, golden-fried chicken breast topped with creamy coleslaw and zesty mayonnaise, served in a soft artisan bun.</p>
            </div>
            <div class="text-left">
                <div class="relative">
                    <img :src="salad" alt="Burger" class="block rounded-full p-5 bg-orange-500 hover:p-0 transition-all">
                    <div class="absolute block bottom-0 right-0 text-2xl sm:text-3xl sm:py-4 sm:px-7 p-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">$7.99</div>
                </div>
                <h5 class="text-3xl py-3">Garden Fresh Salad</h5>
                <p>A refreshing mix of organic greens, cherry tomatoes, cucumbers, and your choice of house-made dressing.</p>
            </div>
        </div>
        <div>
            <button class="uppercase font-bold rounded-full bg-gray-700 text-white py-3 px-14 hover:bg-gray-600 transition-all">Show More</button>
        </div>
    </div>
</template>

<script>
import burger from "../../images/burger.jpg"
import salad from "../../images/salad.jpg"
import chicken from "../../images/chicken.jpg"
export default {
    name: "FeaturedItems",
    data(){
        return {
            burger,salad,chicken
        }
    }
}
</script>