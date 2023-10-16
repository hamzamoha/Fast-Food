<template>
    <div :class="`p-8 bg-[image:var(--bg-image)] bg-no-repeat bg-[length:160px_160px] bg-[top_1rem_left_1rem]`" :style="`--bg-image: url('${food_transparent}')`">
        <div class="w-full mx-auto p-4">
            <h2 class="text-5xl font-semibold mb-4 text-center font-chalck">Easy Ordering</h2>
            <p class="text-center lg:px-0 px-20 text-lg text-neutral-900">Order your way - online, mobile app, phone, or delivery. Your convenience, our priority.</p>
            <div class="flex flex-wrap justify-between">
                <div class="md:w-1/4 w-1/2 py-4 px-2 sm:px-6 lg:px-12 rounded-md">
                    <svg-icon type="mdi" :path="mdiWeb" class="block text-center w-full h-16 text-neutral-800 my-12"></svg-icon>
                    <h3 class="text-lg font-semibold mb-2 text-center">Online Ordering</h3>
                    <p>Browse our menu and place orders through our website.</p>
                </div>
                <div class="md:w-1/4 w-1/2 py-4 px-2 sm:px-6 lg:px-12 rounded-md">
                    <svg-icon type="mdi" :path="mdiCellphone" class="block text-center w-full h-16 text-neutral-800 my-12"></svg-icon>
                    <h3 class="text-lg font-semibold mb-2 text-center">Mobile App</h3>
                    <p>Download our app for a faster and exclusive ordering experience.</p>
                </div>
                <div class="md:w-1/4 w-1/2 py-4 px-2 sm:px-6 lg:px-12 rounded-md">
                    <svg-icon type="mdi" :path="mdiPhone" class="block text-center w-full h-16 text-neutral-800 my-12"></svg-icon>
                    <h3 class="text-lg font-semibold mb-2 text-center">Phone Orders</h3>
                    <p>Call us at [Phone Number] to place your order.</p>
                </div>
                <div class="md:w-1/4 w-1/2 py-4 px-2 sm:px-6 lg:px-12 rounded-md">
                    <svg-icon type="mdi" :path="mdiMoped" class="block text-center w-full h-16 text-neutral-800 my-12"></svg-icon>
                    <h3 class="text-lg font-semibold mb-2 text-center">Delivery Services</h3>
                    <p>We offer delivery through UberEats, DoorDash, and GrubHub.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWeb, mdiCellphone, mdiPhone, mdiMoped } from '@mdi/js';
import food_transparent from "../../images/food-transparent.png"

export default {
    name: "OrderingOptions",
    components: {
        SvgIcon
    },
    data() {
        return { mdiWeb, mdiCellphone, mdiPhone, mdiMoped, food_transparent }
    }
}
</script>