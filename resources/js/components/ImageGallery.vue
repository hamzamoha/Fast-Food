<template>
    <div class="bg-neutral-900 text-white p-8">
        <div class="mx-auto p-4">
            <h2 class="text-4xl sm:text-6xl mb-8 text-center font-chalck">Image Gallery</h2>
            <div class="columns-3 sm:columns-4">
                <div class="relative group mb-4" v-for="url in imgs">
                    <img :src="url" alt="Gallery" class="w-full object-cover rounded-md">
                    <div
                        class="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity bg-black bg-opacity-40 rounded-md">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

let imgs = []
for (let i = 1; i <= 11; i++) imgs.push(new URL(`../../images/gallery/image_${i}.jpg`, import.meta.url).href)

export default {
    name: "ImageGallery",
    data() {
        return { imgs }
    }
}
</script>