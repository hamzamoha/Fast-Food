<template>
    <div class="text-white relative" style="clip-path: inset(0);">
        <img :src="wallpaper" alt="" class="fixed inset-0 w-full h-full object-cover">
        <div class="bg-zinc-900 p-20 bg-opacity-90 text-white relative">
            <h3 class="text-7xl font-chalck py-1 text-center mb-16">Our Story</h3>
            <div class="grid md:grid-cols-2 gap-12 text-light text-lg">
                <p>At <b>[Restaurant Name]</b>, we're more than just a fast food joint; we're a culinary destination on a
                    mission to
                    redefine quick and delicious dining. Our story began <i>[Year of Establishment]</i>, and ever since,
                    we've
                    been
                    dedicated to serving the freshest, most mouthwatering fast food in <u>[Location/City]</u>.</p>
                <p>Our passionate team of chefs and staff work tirelessly to bring you a menu filled with both beloved
                    classics
                    and exciting innovations. Every dish is crafted with care and precision, using the finest,
                    locally-sourced
                    ingredients.</p>
                <p>We take pride in our commitment to quality, flavor, and speedy service. It's not just fast food; it's a
                    flavorful experience you won't find anywhere else.</p>
                <p>Join us in savoring the perfect blend of speed and satisfaction. Discover why <b>[Restaurant Name]</b>
                    has become a
                    beloved fixture in the local dining scene.</p>
            </div>
        </div>
    </div>
</template>

<script>
import wallpaper from "../../images/wallpaper-2.jpg"
export default {
    name: "AboutUs",
    data() {
        return {wallpaper}
    }
}
</script>