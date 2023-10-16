<template>
    <header class="bg-gray-800 pb-44 text-white bg-[image:var(--bg-image)] bg-cover" :style="`--bg-image: url('${wallpaper}')`">
        <nav class="container mx-auto py-7">
            <div class="flex items-start justify-between">
                <a href="#" class="text-2xl font-bold block pl-2"><img :src="logo" alt="Logo" class="sm:h-48 h-24"></a>
                <div class="flex space-x-7 sm:text-xl pr-2">
                    <a href="#" class="hover:text-gray-300">Home</a>
                    <a href="#" class="hover:text-gray-300">Features</a>
                    <a href="#" class="hover:text-gray-300">Contact</a>
                    <a href="#" class="hover:text-gray-300">Help</a>
                </div>
            </div>
        </nav>
        <h3 class="font-chalck text-5xl sm:text-7xl text-neutral-200 pl-16 mb-20">
            <span class="-rotate-12 inline-block">Food Restaurant</span>
        </h3>
        <div class="mt-12 py-8 px-7 bg-black bg-opacity-60 sm:text-left text-center">
            <h4 class="mt-3 mb-6 text-3xl">Savor the Flavor: Unleash Your Cravings</h4>
            <button
                class="group relative transition-all duration-300 ease-in-out hover:pl-12 hover:pr-5 rounded-3xl py-2 px-4 bg-gradient-to-r	from-red-600 to-50% to-amber-600 text-gray-50 mt-2 mb-8">
                <svg-icon type="mdi" :path="mdiClipboardTextOutline"
                    class="group-hover:opacity-100 delay-0 group-hover:delay-100 transition-all duration-300 ease-in-out absolute left-5 opacity-0 inline"></svg-icon>
                Explore Our Menu</button>
            <p class="font-light text-xl">Your destination for speedy, delicious fast food.<br />Crave burgers, crispy
                chicken, or salads?<br />We've got it all. Join us now for a taste of speed and flavor.</p>
        </div>
    </header>
</template>

<script>
import logo from "../../images/logo.svg"
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiClipboardTextOutline } from '@mdi/js'
import wallpaper from "../../images/wallpaper.jpg"

export default {
    name: "Header",
    components: {
        SvgIcon
    },
    data() {
        return {
            logo, mdiClipboardTextOutline, wallpaper
        }
    }
};

</script>
