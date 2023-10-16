<template>
    <Header></Header>
    <FeaturedItems></FeaturedItems>
    <AboutUs></AboutUs>
    <OrderingOptions></OrderingOptions>
    <SpecialOffers></SpecialOffers>
    <Pizza></Pizza>
    <ImageGallery></ImageGallery>
    <Footer></Footer>
</template>

<script>
import Header from './Header.vue';
import FeaturedItems from './FeaturedItems.vue';
import AboutUs from './AboutUs.vue';
import OperatingHours from './OperatingHours.vue';
import OrderingOptions from './OrderingOptions.vue';
import SpecialOffers from './SpecialOffers.vue';
import ImageGallery from './ImageGallery.vue';
import Footer from './Footer.vue';
import Pizza from './Pizza.vue';

export default {
    name: "Home",
    components: { Header, FeaturedItems, AboutUs, OperatingHours, OrderingOptions, SpecialOffers, ImageGallery, Footer, Pizza}
};
</script>
