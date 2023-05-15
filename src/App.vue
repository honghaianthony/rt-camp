<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { Icon } from "@iconify/vue";

const comments = [
    {
        avatar: new URL("./assets/pichai.png", import.meta.url).href,
        comment:
            "“ Partnering with rtCamp has been key to the success of several important projects for us ”",
        name: "-Sundar Pichai | CEO",
        company: new URL("./assets/google.png", import.meta.url).href,
    },
    {
        avatar: new URL("./assets/musk.png", import.meta.url).href,
        comment:
            "“ Partnering with rtCamp has been key to the success of several important projects for us ”",
        name: "-Elon Musk | CEO",
        company: new URL("./assets/tesla.png", import.meta.url).href,
    },
    {
        avatar: new URL("./assets/schulman.png", import.meta.url).href,
        comment:
            "“ Partnering with rtCamp has been key to the success of several important projects for us ”",
        name: "-Dan Schulman | CEO",
        company: new URL("./assets/paypal.png", import.meta.url).href,
    },
];
</script>

<template>
    <Navbar />
    <section class="py-20 text-black bg-[#f7f8fa]">
        <div class="max-w-screen-2xl mx-auto">
            <div class="flex flex-col items-center space-y-12">
                <div
                    class="w-full relative text-center text-[64px] leading-[87px]"
                >
                    <p class="font-semibold font-notosans">
                        Good Work. Good People.
                    </p>
                </div>
                <div class="w-full relative text-center text-2xl">
                    <p class="font-notosans font-normal">
                        We will help you to grow better by fetching most of the
                        leads through Mails, Blogs,<br />
                        Social Media and various other platforms
                    </p>
                </div>
            </div>
            <div class="flex items-center space-x-8 mt-12 justify-center px-2">
                <button
                    class="bg-black text-white rounded-[15px] w-[191px] h-[63px] font-medium font-notosans text-2xl"
                >
                    Get Started
                </button>
                <button
                    class="border-2 border-black text-black rounded-[15px] w-[191px] h-[63px] font-medium font-notosans text-2xl hover:bg-black hover:text-white hover:outline-0"
                >
                    Contact us
                </button>
            </div>
            <div class="flex-items-center mt-12 space-y-8">
                <p
                    class="font-notosans font-normal text-[20px] leading-7 text-center"
                >
                    We are 1st WordPress Vip Partner from Asia serving top
                    companies in the world
                </p>
            </div>
            <div
                class="py-12 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-8 justify-items-center px-2"
            >
                <div
                    class="w-48 h-[120px] bg-white rounded-[20px] drop-shadow-xl flex justify-center"
                >
                    <img
                        src="./assets/google.png"
                        alt="Google"
                        class="w-[50%] block m-auto"
                    />
                </div>
                <div
                    class="w-48 h-[120px] bg-white rounded-[20px] drop-shadow-xl flex justify-center"
                >
                    <img
                        src="./assets/netflix.png"
                        alt="Google"
                        class="w-[50%] block m-auto"
                    />
                </div>
                <div
                    class="w-48 h-[120px] bg-white rounded-[20px] drop-shadow-xl flex justify-center"
                >
                    <img
                        src="./assets/tesla.png"
                        alt="Google"
                        class="w-[50%] block m-auto"
                    />
                </div>
                <div
                    class="w-48 h-[120px] bg-white rounded-[20px] drop-shadow-xl flex justify-center"
                >
                    <img
                        src="./assets/amazon.png"
                        alt="Google"
                        class="w-[50%] block m-auto"
                    />
                </div>
                <div
                    class="w-48 h-[120px] bg-white rounded-[20px] drop-shadow-xl flex justify-center"
                >
                    <img
                        src="./assets/disney.png"
                        alt="Google"
                        class="w-[50%] block m-auto"
                    />
                </div>
                <div
                    class="w-48 h-[120px] bg-white rounded-[20px] drop-shadow-xl flex justify-center"
                >
                    <img
                        src="./assets/paypal.png"
                        alt="Google"
                        class="w-[50%] block m-auto"
                    />
                </div>
            </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-24">
            <div class="w-full text-center">
                <p class="font-notosans font-semibold text-5xl">How We Work?</p>
            </div>
            <div
                class="w-full mt-28 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 justify-items-center lg:justify-items-stretch"
            >
                <div
                    class="w-[400px] h-[480px] rounded-[15px] bg-white text-black shadow-shadow-number"
                >
                    <div
                        class="w-[100px] h-[100px] rounded-full bg-white z-10 shadow-shadow-number -mt-12 flex justify-center items-center mx-auto"
                    >
                        <p
                            class="text-black font-notosans font-semibold text-5xl text-center"
                        >
                            1
                        </p>
                    </div>
                    <div
                        class="flex flex-col items-center justify-center space-y-4"
                    >
                        <img src="./assets/attract.png" alt="Attract" />
                        <p
                            class="font-notosans font-semibold text-black text-3xl"
                        >
                            Attract
                        </p>
                        <p
                            class="block font-normal text-xl font-notosans text-justify w-[300px]"
                        >
                            The attract phase is where the customer first
                            becomes aware of your brand.
                        </p>
                    </div>
                </div>
                <div
                    class="w-[400px] h-[480px] rounded-[15px] bg-white text-black shadow-shadow-number"
                >
                    <div
                        class="w-[100px] h-[100px] rounded-full bg-white z-10 shadow-shadow-number -mt-12 flex justify-center items-center mx-auto"
                    >
                        <p
                            class="text-black font-notosans font-semibold text-5xl text-center"
                        >
                            2
                        </p>
                    </div>
                    <div
                        class="flex flex-col items-center justify-center space-y-4"
                    >
                        <img src="./assets/engage.png" alt="Engage" />
                        <p
                            class="font-notosans font-semibold text-black text-3xl"
                        >
                            Engage
                        </p>
                        <p
                            class="block font-normal text-xl font-notosans text-justify w-[300px]"
                        >
                            Your customer will be engaging with your content,
                            reviewing blogs etc.
                        </p>
                    </div>
                </div>
                <div
                    class="w-[400px] h-[480px] rounded-[15px] bg-white text-black shadow-shadow-number"
                >
                    <div
                        class="w-[100px] h-[100px] rounded-full bg-white z-10 shadow-shadow-number -mt-12 flex justify-center items-center mx-auto"
                    >
                        <p
                            class="text-black font-notosans font-semibold text-5xl text-center"
                        >
                            3
                        </p>
                    </div>
                    <div
                        class="flex flex-col items-center justify-center space-y-4"
                    >
                        <img src="./assets/attract.png" alt="Attract" />
                        <p
                            class="font-notosans font-semibold text-black text-3xl"
                        >
                            Convert
                        </p>
                        <p
                            class="block font-normal text-xl font-notosans text-justify w-[300px]"
                        >
                            Now, they see a sponsored ad and from there, it’s
                            over to your lead nurturing sequences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-28">
            <div class="w-full text-center">
                <p class="font-notosans font-semibold text-5xl">
                    Features We Provide
                </p>
            </div>
            <div
                class="w-full mt-16 grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch gap-12"
            >
                <div
                    class="h-96 md:h-60 bg-white shadow-shadow-number rounded-[15px] flex justify-center items-center"
                >
                    <div
                        class="flex flex-col md:flex-row justify-center items-center md:space-x-12 2xl:space-x-44 px-4"
                    >
                        <div class="flex flex-col space-y-4">
                            <p class="font-notosans font-semibold text-3xl">
                                Emails
                            </p>
                            <p
                                class="font-notosans block w-[300px] text-justify font-normal text-xl"
                            >
                                Email is a great place to reach the people who
                                already know your brand and product or service.
                            </p>
                        </div>
                        <div
                            class="relative w-[180px] h-[180px] rounded-full bg-[#E1E9FA] justify-center flex items-center"
                        >
                            <img src="./assets/mail.png" alt="Mail" />
                        </div>
                    </div>
                </div>
                <div
                    class="h-96 md:h-60 bg-white shadow-shadow-number rounded-[15px] flex justify-center items-center"
                >
                    <div
                        class="flex flex-col md:flex-row justify-center items-center md:space-x-12 2xl:space-x-44 px-4"
                    >
                        <div
                            class="relative w-[180px] h-[180px] rounded-full bg-[#E1E9FA] justify-center flex items-center"
                        >
                            <img
                                src="./assets/sync_saved_locally.png"
                                alt="Sync"
                            />
                        </div>
                        <div class="flex flex-col space-y-4">
                            <p class="font-notosans font-semibold text-3xl">
                                Blog Posts
                            </p>
                            <p
                                class="font-notosans block w-[300px] text-justify font-normal text-xl"
                            >
                                The great thing about using your blog posts to
                                promote an offer is that you can tailor the
                                entire piece to the end goal.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    class="h-96 md:h-60 bg-white shadow-shadow-number rounded-[15px] flex justify-center items-center"
                >
                    <div
                        class="flex flex-col md:flex-row justify-center items-center md:space-x-12 2xl:space-x-44 px-4"
                    >
                        <div class="flex flex-col space-y-4">
                            <p class="font-notosans font-semibold text-3xl">
                                Ads & Retargeting
                            </p>
                            <p
                                class="font-notosans block w-[300px] text-justify font-normal text-xl"
                            >
                                The sole purpose of an ad is to get people to
                                take an action. Otherwise, why spend the money?
                            </p>
                        </div>
                        <div
                            class="relative w-[180px] h-[180px] rounded-full bg-[#E1E9FA] justify-center flex items-center"
                        >
                            <img src="./assets/ads_click.png" alt="Ads" />
                        </div>
                    </div>
                </div>
                <div
                    class="h-96 md:h-60 bg-white shadow-shadow-number rounded-[15px] flex justify-center items-center"
                >
                    <div
                        class="flex flex-col md:flex-row justify-center items-center md:space-x-12 2xl:space-x-44 px-4"
                    >
                        <div
                            class="relative w-[180px] h-[180px] rounded-full bg-[#E1E9FA] justify-center flex items-center"
                        >
                            <img
                                src="./assets/security_update_good.png"
                                alt="Security"
                            />
                        </div>
                        <div class="flex flex-col space-y-4">
                            <p class="font-notosans font-semibold text-3xl">
                                Social Media
                            </p>
                            <p
                                class="font-notosans block w-[300px] text-justify font-normal text-xl"
                            >
                                Social media platforms make it easy to guide
                                your followers to take action, like the swipe up
                                option on Instagram stories
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-28">
            <div class="w-full text-center">
                <p class="font-notosans font-semibold text-5xl">Our Works</p>
            </div>
            <div
                class="w-full mt-16 grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch gap-12"
            >
                <div
                    class="min-h-fit shadow-shadow-number bg-white rounded-[15px]"
                >
                    <img
                        src="./assets/wp.png"
                        alt="Wordpress"
                        class="w-full lg:w-[600px] mx-auto h-[200px] rounded-t-[15px]"
                    />
                    <p
                        class="font-notosans font-semibold text-2xl text-black p-4 text-justify"
                    >
                        Building Embedded Web Stories for WordPress
                    </p>
                    <p
                        class="font-notosans font-normal text-xl text-black px-4 text-justify pb-4"
                    >
                        rtCamp collaborated with Google to make the snackable
                        Web Stories format even easier to consume with flexible
                        WordPress blocks.
                    </p>
                </div>
                <div
                    class="min-h-fit shadow-shadow-number bg-white rounded-[15px]"
                >
                    <img
                        src="./assets/dt.png"
                        alt="Wordpress"
                        class="w-full lg:w-[600px] mx-auto h-[200px] rounded-t-[15px]"
                    />
                    <p
                        class="font-notosans font-semibold text-2xl text-black p-4 text-justify"
                    >
                        Migrating DealerTrack from AEM to WordPress
                    </p>
                    <p
                        class="font-notosans font-normal text-xl text-black px-4 text-justify pb-4"
                    >
                        rtCamp replat formed DealerTrack USA from Adobe
                        Experience Manager to WordPress while reducing go-live
                        timeframes by over 50%.
                    </p>
                </div>
            </div>
            <div class="mx-auto mt-16 flex justify-center items-center">
                <button class="bg-black rounded-[15px]">
                    <p
                        class="py-[15px] px-[30px] text-white font-notosans text-2xl"
                    >
                        View More
                    </p>
                </button>
            </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-28">
            <div class="w-full text-center">
                <p class="font-notosans font-semibold text-5xl">
                    What Our Clients Says ?
                </p>
            </div>
            <div class="max-w-screen-xl mx-auto mt-16 py-12">
                <carousel
                    :items-to-show="3"
                    :breakpoints="{
                        '300': { itemsToShow: 1 },
                        '1024': { itemsToShow: 3 },
                    }"
                >
                    <slide v-for="client in comments" :key="client">
                        <div class="w-[320px] h-[600px] rounded-[15px]">
                            <div
                                class="w-[100px] h-[100px] rounded-full bg-white z-10 flex justify-center items-center mx-auto"
                            >
                                <img :src="client.avatar" />
                            </div>
                            <div
                                class="w-[320px] h-[480px] rounded-[15px] -mt-12 bg-white shadow-shadow-number"
                            >
                                <p
                                    class="font-medium text-2xl font-notosans text-center w-[240px] py-24 mx-auto"
                                >
                                    {{ client.comment }}
                                </p>
                                <p
                                    class="font-notosans font-normal text-xl text-center w-[151px] mx-auto"
                                >
                                    {{ client.name }}
                                </p>
                                <img
                                    :src="client.company"
                                    class="mx-auto py-4"
                                />
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                        <navigation>
                            <template #next>
                                <div class="carousel__next">
                                    <Icon
                                        icon="material-symbols:arrow-forward-ios"
                                    />
                                </div>
                            </template>
                            <template #prev>
                                <div class="carousel__prev">
                                    <Icon
                                        icon="material-symbols:arrow-back-ios"
                                    />
                                </div>
                            </template>
                        </navigation>
                    </template>
                </carousel>
            </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-28">
            <div class="w-full text-center">
                <p class="font-notosans font-semibold text-5xl">Our Team</p>
            </div>
            <div class="w-full mt-16 flex justify-center items-center">
                <img src="./assets/ourteam.png" alt="Our Team" />
            </div>
            <div
                class="w-full mt-16 flex justify-center items-center space-x-12"
            >
                <button
                    class="flex justify-center items-center bg-black rounded-[15px]"
                >
                    <p
                        class="px-[30px] py-[15px] font-notosans text-2xl font-medium text-center text-white"
                    >
                        Our Story
                    </p>
                </button>
                <button
                    class="flex justify-center items-center bg-white rounded-[15px] text-black border-2 border-black hover:bg-black hover:text-white"
                >
                    <p
                        class="px-[30px] py-[15px] font-notosans text-2xl font-medium text-center"
                    >
                        Join Us
                    </p>
                </button>
            </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-28">
            <div class="w-full text-center">
                <p class="font-notosans font-semibold text-5xl">Contact Us</p>
            </div>
            <div
                class="w-full mt-16 flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0"
            >
                <div
                    class="flex flex-col w-1/2 min-h-fit bg-white rounded-[15px] shadow-shadow-number px-4"
                >
                    <p
                        class="text-center pt-[40px] pb-[61px] font-notosans font-semibold text-3xl"
                    >
                        Business Inquiry
                    </p>
                    <p
                        class="text-justify pb-[116px] mx-auto font-notosans font-normal text-2xl max-w-[440px]"
                    >
                        We are known for our expertise in providing end-to-end
                        WordPress solutions for global enterprises from
                        different industries.
                    </p>
                    <button
                        class="mx-auto rounded-[15px] bg-black text-white mb-[48px] w-32 md:w-52 h-16"
                    >
                        <p
                            class="font-notosans font-medium text-center xl:text-2xl text-md"
                        >
                            Get In Touch
                        </p>
                    </button>
                </div>
                <div
                    class="flex flex-col min-h-fit items-center w-1/2 bg-white rounded-[15px] shadow-shadow-number px-4"
                >
                    <p
                        class="text-center py-[40px] font-notosans font-semibold text-3xl"
                    >
                        Have a Question?
                    </p>
                    <input
                        placeholder="Email"
                        type="email"
                        class="w-full max-w-md rounded-[15px] shadow-shadow-number px-6 py-4 border border-black font-notosans mx-auto mb-8"
                    />
                    <textarea
                        placeholder="Query"
                        rows="4"
                        class="w-full max-w-md rounded-[15px] shadow-shadow-number px-6 py-4 border border-black font-notosans mx-auto mb-12"
                    />
                    <button
                        class="mx-auto rounded-[15px] bg-white text-black mb-[48px] w-32 md:w-52 h-16 border-2 border-black hover:bg-black hover:text-white"
                    >
                        <p
                            class="font-notosans font-medium text-center text-md xl:text-2xl"
                        >
                            Submit
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped>
.carousel__prev,
.carousel__next {
    border-radius: 50%;
    margin: 0 -120px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff !important;
    filter: drop-shadow(0px 15px 30px rgba(51, 51, 51, 0.2));
    box-shadow: 0px 15px 30px rgba(51, 51, 51, 0.2);
}

@media (max-width: 1500px) {
    .carousel__prev,
    .carousel__next {
        margin: 0 0;
    }
}
</style>
