<template>
    <div class="p-12">
        <h2 class="text-5xl sm:text-7xl font-semibold mb-4 text-center font-chalck">Our Pizza</h2>
        <div>
            <Carousel v-bind="settings" :breakpoints="breakpoints">
                <Slide v-for="(pizza, i) in imgs" :key="pizza">
                    <div class="p-3">
                        <div class="relative group">
                            <img :src="pizza" alt="Pizza" class="transition-all w-full h-full object-cover block">
                            <div
                                class="group-hover:scale-0 transition-all duration-400 absolute inset-0 w-full px-3 h-full bg-black bg-opacity-60 flex flex-col justify-center items-center">
                                <h5 class="text-2xl sm:text-3xl uppercase font-poppins font-black flex-1 text-amber-500 mt-14">
                                    {{ pizzaTypes[i] }}</h5>
                                <button class="py-3 px-6 bg-red-600 text-2xl font-bold text-white mb-14">Order Now</button>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation>
                        <template #next>
                            <span
                                class="flex p-0 w-[30px] h-24 text-2xl justify-center items-center bg-amber-500 hover:bg-amber-400 transition-all">
                                &raquo; </span>
                        </template>
                        <template #prev>
                            <span
                                class="flex p-0 w-[30px] h-24 text-2xl justify-center items-center bg-amber-500 hover:bg-amber-400 transition-all">
                                &laquo; </span>
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </div>
    </div>
    <div class="my-10 relative">
        <img :src="pizza" alt="Pizza" class="h-[400px] md:h-[500px] lg:h-[700px] w-full object-cover">
        <div
            class="absolute flex justify-end items-center inset-0 w-full h-full overflow-hidden before:absolute before:content-[''] before:h-full before:scale-y-150 before:w-2/3 md:before:w-1/2 before:bg-red-600 before:-right-20 before:top-0 before:rotate-12">
            <span class="text-right w-2/3 md:w-1/2 pl-32 pr-4 md:pr-28 md:pl-28 text-white font-poppins relative flex flex-col">
                <span class="py-1 lg:py-4 text-amber-300 text-xl">Big Deal !</span>
                <span class="uppercase text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black py-2 lg:py-4">
                    Big Meat Pizza
                </span>
                <span class="py-1 lg:py-4 text-white lg:text-xl">Meat Lover's Pizza, topped with melty cheese, pepperoni cups, Italian
                    sausage, and bacon.</span>
                <span class="py-4 font-black text-5xl lg:text-7xl">$14.99</span>
            </span>
        </div>
        <div
            class="absolute bg-yellow-300 -top-2 sm:top-10 md:top-16 lg:top-24 left-24 sm:left-5 md:left-12 rounded-full p-1 w-28 h-28 md:w-44 md:h-44 text-center flex justify-center items-center font-black text-3xl md:text-5xl">
            Save 15%</div>
    </div>
    <div class="grid sm:grid-cols-3 gap-2 md:gap-4 lg:gap-10 font-poppins mb-10">
        <div class="px-3 md:px-6 pt-12">
            <div class="px-12 lg:px-20">
                <img class="px-20 sm:px-0 block w-full xanimate-[spin_25s_linear_infinite]" :src="pizza_spinner_1" alt="Pizza Spinner 1">
            </div>
            <span class="block font-semibold text-2xl uppercase text-center py-3">Pizza Capricciosa</span>
            <p class="py-2 px-4 md:px-12 lg:px-20 text-center">Tomato sauce, mozzarella, ham, artichokes, olives, mushrooms, olive oil, oregano, salt, pepper.</p>
        </div>
        <div class="px-6">
            <div class="px-12 lg:px-20">
                <img class="px-20 sm:px-0 block w-full xanimate-[spin_30s_linear_infinite]" :src="pizza_spinner_2" alt="Pizza Spinner 2">
            </div>
            <span class="block font-semibold text-2xl uppercase text-center py-3">Pepperoni Margherita</span>
            <p class="py-2 px-4 md:px-12 lg:px-20 text-center">tomato sauce, mozzarella, basil, olive oil, pepperoni.</p>
        </div>
        <div class="px-3 md:px-6 pt-12">
            <div class="px-12 lg:px-20">
                <img class="px-20 sm:px-0 block w-full xanimate-[spin_20s_linear_infinite]" :src="pizza_spinner_3" alt="Pizza Spinner 3">
            </div>
            <span class="block font-semibold text-2xl uppercase text-center py-3">Seafood Supreme Pizza</span>
            <p class="py-2 px-4 md:px-12 lg:px-20 text-center">Tomato sauce, seafood, mozzarella, vegetables, herbs, sauce.</p>
        </div>
    </div>
</template>
<script>
import pizza from "../../images/pizza.jpg"
import pizza_spinner_1 from "../../images/pizza_spinner/pizza_1.png"
import pizza_spinner_2 from "../../images/pizza_spinner/pizza_2.png"
import pizza_spinner_3 from "../../images/pizza_spinner/pizza_3.png"
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const pizzaTypes = [
    "Margherita Pizza",
    "Pepperoni Pizza",
    "Mushroom and Sausage Pizza",
    "Hawaiian Pizza",
    "Vegetarian Pizza",
    "Supreme Pizza"
]
let imgs = []
for (let i = 1; i <= 6; i++) imgs.push(new URL(`../../images/pizza/pizza_${i}.jpg`, import.meta.url).href)
export default {
    name: "Pizza",
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            imgs, pizzaTypes, pizza, pizza_spinner_1, pizza_spinner_3, pizza_spinner_2,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                autoplay: 5000,
                mouseDrag: false,
                pauseAutoplayOnHover: true,
                transition: 500,
                wrapAround: true,
            },
            breakpoints: {
                1200: {
                    itemsToShow: 5
                },
                1000: {
                    itemsToShow: 4
                },
                800: {
                    itemsToShow: 3
                },
                600: {
                    itemsToShow: 2.5
                }
            }
        }
    }
}
</script>