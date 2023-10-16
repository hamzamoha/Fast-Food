<template>
    <div>
        <h2 class="text-2xl font-thin font-chalck mb-4">Operating Hours</h2>
        <div class="grid grid-cols-2 gap-y-2 md:gap-y-1 md:grid-cols-1 w-full text-center texl-lg sm:text-xl md:text-sm lg:text-lg select-none relative p-8 md:p-6 border border-orange-600 bg-no-repeat bg-cover border-8 rounded-lg bg-emerald-700 bg-[image:var(--bg-image)] font-thin font-chalck text-white"
            :style="`--bg-image: url('${chalckboard}')`">
            <div class="text-left md:text-center">Monday:</div>
            <div  class="text-right md:text-center">10:00 AM - 8:00 PM</div>
            <div class="text-left md:text-center">Tuesday:</div>
            <div  class="text-right md:text-center">10:00 AM - 8:00 PM</div>
            <div class="text-left md:text-center">Wednesday:</div>
            <div  class="text-right md:text-center">10:00 AM - 8:00 PM</div>
            <div class="text-left md:text-center">Thursday:</div>
            <div  class="text-right md:text-center">10:00 AM - 8:00 PM</div>
            <div class="text-left md:text-center">Friday:</div>
            <div  class="text-right md:text-center">10:00 AM - 9:00 PM</div>
            <div class="text-left md:text-center">Saturday:</div>
            <div  class="text-right md:text-center">11:00 AM - 9:00 PM</div>
            <div class="text-left md:text-center">Sunday:</div>
            <div  class="text-right md:text-center">11:00 AM - 8:00 PM</div>
            <div
                class="absolute rounded w-12 h-2 bottom-0 right-2 bg-neutral-100 shadow-[inset_0_-4px_1px_rgba(0,0,0,0.3),-1px_-1px_1px_rgba(0,0,0,0.2),0_2px_0_rgba(0,0,0,0.3)]">
            </div>
        </div>
    </div>
</template>

<script>
import chalckboard from "../../images/chalckboard.png"

export default {
    name: "OperatingHours",
    data() {
        return { chalckboard }
    }
}
</script>