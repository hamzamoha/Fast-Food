<template>
    <div class="grid md:grid-cols-3 py-10 px-10 lg:px-24 gap-4 md:gap-8 lg:gap-16">
        <Map></Map>
        <OperatingHours></OperatingHours>
        <Contact></Contact>
    </div>
</template>

<script>
import OperatingHours from "./OperatingHours.vue"
import Map from "./Map.vue"
import Contact from "./Contact.vue"

export default {
    name: "Footer",
    components: { OperatingHours, Map, Contact }
}
</script>