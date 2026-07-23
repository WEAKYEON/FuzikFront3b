<template>
    <div class="bg-[#111111] text-[#e2e8f0] text-base/6 scroll-smooth">
        <section id="home" class="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-6xl md:text-8xl font-black mb-6 animate-float-headline">
                    <span class="text-[#fff600] text-glow-subtle">FUZIK <br />Collaborate:</span><br>
                    <span class="text-4xl md:text-5xl font-light">Your Jam Session Starts Now!</span>
                </h1>
                
                <p class="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                    Connect with musicians worldwide, create synchronized video jams, and elevate your music together. Seamless collaboration, no matter the distance.
                </p>
                
                <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a href="https://www.fuzikapp.com" class="btn-primary pulse-yellow">
                        <div class="flex items-center gap-x-2">
                        <span><img src="/images/icons/play_circle_black.png" class="w-6 h-6" ></span><span>Your Global Jam</span>
                        </div>
                    </a>
                    <a href="/feature" class="btn-secondary">
                        <div class="flex items-center gap-x-2">
                        <span><img src="/images/icons/help_yellow.png" class="w-6 h-6" ></span><span>See How It Works</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>


    </section>

    <section id="what-we-do" class="section-padding bg-[#1a1a1a]">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-12">Unleash Your <span class="text-[#fff600]">Musical Potential</span></h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
                Fuzik Collaborate is designed to break down musical barriers and amplify your creative journey. Discover how our core functionalities empower you to connect, create, and share like never before.
            </p>
            
            <div class="grid md:grid-cols-3 gap-8 items-stretch">
                <!-- Card 1: Connect Globally -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab02.png" alt="Connect Globally" class="w-full h-48 object-cover rounded-lg mb-6 border border-gray-700 shadow-md" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Connect Globally</h3>
                    <p class="text-gray-400 flex-grow">Find your jam partners worldwide. Connect with a diverse community, discover new talents, and expand your musical network effortlessly.</p>
                </div>
                
                <!-- Card 2: Create Seamlessly -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab03.png" alt="Create Seamlessly" class="w-full h-48 object-cover rounded-lg mb-6 border border-gray-700 shadow-md" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Create Seamlessly</h3>
                    <p class="text-gray-400 flex-grow">Synchronize video performances with precision. Our tech makes multi-track collaboration feel like magic, eliminating complex editing.</p>
                </div>
                
                <!-- Card 3: Express Freely -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab05.png" alt="Express Freely" class="w-full h-48 object-cover rounded-lg mb-6 border border-gray-700 shadow-md" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Express Freely</h3>
                    <p class="text-gray-400 flex-grow">Jam on original riffs or public domain music without limitations. Unleash your ideas and collaborate on unique, copyright-friendly projects.</p>
                </div>
            </div>
        </div>
    </section>

    
    
    <section id="features-highlight" class="section-padding bg-black">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="container mx-auto h-full ">
                    <div class="w-full h-fullitems-center ">
                        <div class="w-full bg-black rounded-xl overflow-hidden shadow-2xl ">
                        
                            <!-- Video Container -->
                            <div class="relative aspect-video ">
                                <iframe
                                class="absolute inset-0 w-full h-full"
                                :src="`https://www.youtube.com/embed/${videoIds[currentIndex]}`"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                ></iframe>
                            </div>

                            <!-- Controls -->
                            <div class="flex items-center justify-between p-6 bg-gray-800">
                                <button 
                                @click="prevVideo"
                                class="px-6 py-2 bg-yellow-300 hover:bg-[#fff600] text-[#111111] transition rounded-full font-semibold"
                                >
                                Previous
                                </button>

                                <div class="text-sm font-mono">
                                Video {{ currentIndex + 1 }} of {{ videoIds.length }}
                                </div>

                                <button 
                                @click="nextVideo"
                                class="px-6 py-2 bg-yellow-300 hover:bg-[#fff600] text-[#111111] transition rounded-full font-semibold"
                                >
                                Next
                                </button>
                            </div>
                        
                            <!-- Navigation Dots -->
                            <div class="flex justify-center gap-2 mt-6">
                                <button 
                                    v-for="(id, index) in videoIds" 
                                    :key="id"
                                    @click="currentIndex = index"
                                    :class="[
                                    'w-3 h-3 rounded-full transition-all',
                                    currentIndex === index ? 'bg-[#fff600] scale-125' : 'bg-gray-600'
                                    ]"
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-5xl font-bold mb-6">Unleash Your Creativity with <span class="text-[#fff600]">Powerful Features</span></h2>
                    <ul class="space-y-6 text-xl text-gray-300">
                        <li class="flex items-start">
                            <img src="/images/icons/featured_video_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">Multi-Screen Video Sync:</span> Create synchronized video performances with up to 4 screens, where audio and video come together seamlessly.
                            </div>
                        </li>
                        <li class="flex items-start">
                            <img src="/images/icons/crowdsource_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">Global Community:</span> Discover and collaborate with musicians across genres and borders.
                            </div>
                        </li>
                        <li class="flex items-start">
                            <img src="/images/icons/view_timeline_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">Intuitive Video Timeline:</span> Simple interface for video timeline syncing, making collaboration effortless.
                            </div>
                        </li>
                        <li class="flex items-start">
                            <img src="/images/icons/cloud_upload_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">Cloud Storage:</span> All your projects are securely stored and accessible anywhere, anytime.
                            </div>
                        </li>
                    </ul>
                    <div class="mt-10">
                        <a href="/feature" class="btn-primary"> Explore All Features <i class="fas fa-arrow-right ml-3"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" class="section-padding bg-fuzik-dark">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-12">What Our <span class="text-[#fff600]">Users Say</span></h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
                Hear directly from the Fuzik Collaborate community about how our platform has transformed their musical journey.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div class="bg-[#2a2a2a] p-8 rounded-xl card-hover flex flex-col justify-between">
                    <p class="text-lg italic text-gray-200 mb-6">
                        "Fuzik is a game-changer! I finally found people to jam with on my favorite tunes. The video sync is spot on, making it feel like we're in the same room. So much fun!"
                    </p>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-[#fff600]">- Sarah M.</p>
                        <p class="text-sm text-gray-400">Guitarist, USA</p>
                    </div>
                </div>
                <div class="bg-[#2a2a2a] p-8 rounded-xl card-hover flex flex-col justify-between">
                    <p class="text-lg italic text-gray-200 mb-6">
                        "As a busy professional, Fuzik allows me to keep my passion for music alive. I can collaborate with talented musicians globally on my own schedule. The ease of use is incredible."
                    </p>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-[#fff600]">- David L.</p>
                        <p class="text-sm text-gray-400">Drummer, UK</p>
                    </div>
                </div>
                <div class="bg-[#2a2a2a] p-8 rounded-xl card-hover flex flex-col justify-between">
                    <p class="text-lg italic text-gray-200 mb-6">
                        "I've always wanted to be in a band, but finding members locally was hard. Fuzik connected me with amazing artists, and now we're creating original music together. Highly recommend!"
                    </p>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-[#fff600]">- Emily R.</p>
                        <p class="text-sm text-gray-400">Vocalist, Australia</p>
                        </div>
                </div>
            </div>
        </div>
    </section>

    
    <section id="built-by-musicians" class="section-padding gradient-bg">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-6">Built By <span class="text-[#fff600]">Musicians</span>, For Musicians</h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Fuzik's story began with three founders who understood the joy of playing together and the challenge of finding your musical crew. We built Fuzik Collaborate to make jamming accessible and fun for everyone, everywhere.
            </p>
            <a href="/aboutus" class="btn-secondary"> Learn More About Us <i class="fas fa-arrow-right ml-3"></i>
            </a>
        </div>
    </section>

    <section class="section-padding bg-[#fff600] text-black text-center">
        <div class="container mx-auto px-6">
            <h2 class="text-5xl font-bold mb-6 text-[#111111]" >Ready to Start Your <span class="text-[#1a1a1a]">Global Jam?</span></h2>
            <p class="text-xl mb-8 opacity-90">
                Join thousands of hobbyist musicians already connecting, playing, and creating on Fuzik Collaborate. Your next musical adventure is just a click away!
            </p>
            <a href="/webapp" target="_blank" class="btn-primary btn-final-cta pulse-yellow">
                <img src="/images/icons/rocket_launch_256.png" class="w-16 px-4"  />Launch Fuzik App Now!
            </a>
        </div>
    </section>
    </div>

    <!-- footer -->
    <div class="bg-black py-16">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
                <div class="col-span-1 md:col-span-2 lg:col-span-1">
                    <a href="/index" class="flex items-center space-x-2 mb-4">
                        <img src="/images/logo/FuzikLogo.png" alt="Fuzik Collaborate Logo" class="h-10 w-auto">
                        <span class="text-2xl font-bold text-[#f8f9fa]">Fuzik Collaborate</span>
                    </a>
                    <p class="text-gray-400 text-sm mb-6">
                        Empowering musicians worldwide to connect, create, and jam together through 
                        innovative video synchronization technology.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://discord.gg/US2hz9FvsV" target="_blank" class="footer-social-icon">
                            <img src="/images/icons/Discord-Symbol-White.png" class="w-12 px-2 py-4"  />
                        </a>
                        <a href="https://www.facebook.com/fuzikcollaboration" target="_blank" class="footer-social-icon">
                            <img src="/images/icons/Facebook_Logo_Primary.png" class="w-12 px-2 py-4"  />
                        </a>
                        <a href="https://www.instagram.com/fuzikmusiccollaboration/?fbclid=IwY2xjawLQ4BlleHRuA2FlbQIxMQBicmlkETFFSWFvdmFUWHBoWDZKSUUzAR4gMnSxq6J0Et494YOLIXkFBcFRXuzNzUzUA9IOjXjgx35lKgKVSUWqPgfW3ALQ_aem_sQYkD7FbPk-RJEMRy7VyWQ" target="_blank" class="footer-social-icon">
                            <img src="/images/icons/Instagram_icon.png" class="w-12 px-2 py-4"  />
                        </a>
                        <a href="https://www.youtube.com/@fuzikapplication" target="_blank" class="footer-social-icon">
                            <img src="/images/icons/yt_icon_red_digital.png" class="w-20 px-2 py-2"  />
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">The Platform</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="/feature" class="nav-link-hover-effect">Features</a></li>
                        <li><a href="/pricing" class="nav-link-hover-effect">Pricing</a></li>
                        <li><a href="/webapp" target="_blank" class="nav-link-hover-effect">Web App</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">Resources</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="/contact" class="nav-link-hover-effect">Contact Us</a></li>
                        <li><a href="/faq" class="nav-link-hover-effect">FAQ</a></li>
                        <li><a href="/blog" class="nav-link-hover-effect">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">Legal</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="/privacy_policy" class="nav-link-hover-effect">Privacy Policy</a></li>
                        <li><a href="/terms" class="nav-link-hover-effect">Terms of Service</a></li>
                        <li><a href="/cookie" class="nav-link-hover-effect">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-[#aaaaaa] pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>
                    © 2024 Fuzik Collaborate by Fuzik Connex Co., Ltd. All rights reserved.
                </p>
                <p class="mt-2 md:mt-0">
                    Connect. Play. Collaborate. Jam.
                </p>
            </div>
        </div>
    
        <div id="cookie-consent-modal" class="cookie-modal-overlay">
            <div class="cookie-modal-content">
                <h2 class="text-2xl font-bold mb-4 text-[#f8f9fa]">We Value Your Privacy</h2>
                <p class="text-gray-300 mb-6">
                    This website (<a href="https://fuzikapp.com" class="text-[#fff600] hover:underline">www.fuzik.co</a>) uses cookies to enhance your experience and analyze site traffic. By clicking "Accept All Cookies", you consent to the use of all cookies. For more information or to manage your preferences, click "Manage Preferences".
                </p>
                <div id="initial-buttons" class="flex justify-center space-x-4">
                    <button onclick="acceptAllCookies()" class="btn-primary px-6 py-3">Accept All Cookies</button>
                    <button onclick="showPreferenceManager()" class="btn-secondary px-6 py-3">Manage Preferences</button>
                </div>

                <div id="cookie-preferences" class="cookie-preferences-section hidden">
                    <h3 class="text-xl font-bold mb-4 text-[#f8f9fa]">Manage Your Cookie Preferences</h3>
                    
                    <div class="cookie-preference-item">
                        <input type="checkbox" id="essential-cookies" checked disabled>
                        <label for="essential-cookies">Essential Cookies</label>
                        <p class="text-gray-400">These cookies are necessary for the website to function and cannot be switched off.</p>
                    </div>

                   

                    <div class="flex justify-center mt-6">
                        <button onclick="saveCookiePreferences()" class="btn-primary px-6 py-3">Save Preferences</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Fuzik Collaborate - Your Global Jam Session Starts Now!',
  meta: [
    { name: 'description', content: 'Connect with musicians worldwide on Fuzik Collaborate! Our platform makes online jamming easy with synchronized video, letting you create music together from anywhere. Start your global jam session today.' },
  ],
})

useSeoMeta({
        title: 'Fuzik Collaborate - Your Global Jam Session Starts Now!',
        ogTitle: 'Fuzik Collaborate - Your Global Jam Session Starts Now!',
        description: 'Connect with musicians worldwide, create synchronized video jams, and elevate your music together with Fuzik Collaborate. Seamless online music collaboration for all skill levels.',
        ogDescription: 'Connect with musicians worldwide, create synchronized video jams, and elevate your music together with Fuzik Collaborate. Seamless online music collaboration for all skill levels.',
        ogImage: 'https://fuzikapp.com/images/logo/FuzikLogo.png',
    });

definePageMeta({
  layout: "front"
});

// Replace these IDs with your actual YouTube video IDs
const videoIds = ref([
        'KzYq0T5ur0s',
        'c1VWzb_o_-M',
        'DrILeGU-BEw',
        'WsnFdLQsnsM',
        'kbvhGo8kfFY',
        'tXvd3IUJ6oc',
        'jomFkAWR6zw'
])

const currentIndex = ref(0)

const nextVideo = () => {
  if (currentIndex.value < videoIds.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Loop back to start
  }
}

const prevVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = videoIds.value.length - 1 // Loop to end
  }
}

</script>

<style scoped>
    .section-padding {
        padding: 100px 0;
    }
        
    /* Custom button styles for consistency */
    .btn-primary {
        background-color: #fff600;
        color: #111111;
        padding: 1rem 2.5rem;
        border-radius: 9999px;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        text-decoration: none;
        box-shadow: 0 5px 15px rgba(255, 246, 0, 0.3);
    }

    .btn-primary:hover {
        background-color: #ffe000;
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 8px 20px rgba(255, 246, 0, 0.5);
    }

    .pulse-yellow {
        animation: pulse-yellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5);
    }

    @keyframes pulse-yellow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5); }
        50% { box-shadow: 0 0 0 25px rgba(255, 246, 0, 0); }
    }

    .btn-secondary {
        border: 2px solid #fff600;
        color: #fff600;
        background-color: transparent;
        padding: 1rem 2.5rem;
        border-radius: 9999px;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .btn-secondary:hover {
        background-color: #fff600;
        color: #111111;
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 8px 20px rgba(255, 246, 0, 0.2);
    }

    /* Visual Explainer Icons */
    .visual-explainer-icon {
        font-size: 6rem;
        color: #fff600;
        margin-bottom: 1rem;
        text-shadow: 0 0 20px rgba(255, 246, 0, 0.6);
    }
    .visual-explainer-card {
        background-color: #2a2a2a;
        padding: 2.5rem;
        border-radius: 1rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), inset 0 0 0 0 rgba(255, 246, 0, 0);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 246, 0, 0.05);
    }
    .visual-explainer-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(255, 246, 0, 0.25), inset 0 0 20px rgba(255, 246, 0, 0.1);
    }

    /* Video Carousel Specific Styles */
    .video-carousel-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /* 16:9 Aspect Ratio (height / width * 100%) */
        background-color: #2a2a2a;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        border: 2px solid #fff600;
    }

    .video-carousel-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }

    .carousel-controls {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.75rem;
        z-index: 10;
    }

    .carousel-dot {
        width: 12px;
        height: 12px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .carousel-dot.active {
        background-color: #fff600;
        transform: scale(1.2);
        box-shadow: 0 0 8px rgba(255, 246, 0, 0.6);
    }

    .carousel-nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff600;
        border: none;
        padding: 0.75rem 1rem;
        cursor: pointer;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s ease, transform 0.2s ease;
        z-index: 10;
    }

    .carousel-nav-button:hover {
        background-color: rgba(0, 0, 0, 0.7);
        transform: translateY(-50%) scale(1.1);
    }

    .carousel-nav-button.prev {
        left: 1rem;
    }

    .carousel-nav-button.next {
        right: 1rem;
    }

    /* Specific styles for the "Launch Fuzik App Now!" button in the final CTA */
    .btn-final-cta {
        background-color: #111111 !important;
        color: #fff600 !important;
        font-weight: 800;
        text-shadow: 0 0 3px rgba(255, 246, 0, 0.2);
        border: 2px solid #fff600 !important;
    }

    .btn-final-cta:hover {
        background-color: #fff600 !important;
        color: #111111!important;
        text-shadow: none !important;
        transform: translateY(-3px) scale(1.03);
    }

    /* --- Hover Underline and Color for Nav/Footer Links --- */
    .nav-link-hover-effect {
        position: relative;
        display: inline-block;
        text-decoration: none;
        transition: color 0.3s ease-out;
        color: #e2e8f0; /* Default text color for links */
    }

    .nav-link-hover-effect::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #fff600;
        transform-origin: bottom center;
        transition: transform 0.3s ease-out;
    }

    .nav-link-hover-effect:hover {
        color: #fff600; /* Change color on hover */
    }

    .nav-link-hover-effect:hover::after {
        transform: scaleX(1); /* Expand on hover */
    }

    /* Active link state for current page */
    .nav-link-active {
        color: #fff600;
        font-weight: 600;
    }
    .nav-link-active::after {
        transform: scaleX(1);
    }

    /* Back to Top Button Styling */
    #back-to-top-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: #fff600;
        color: #111111;
        padding: 1rem;
        border-radius: 50%;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(255, 246, 0, 0.4);
        cursor: pointer;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
        border: none;
    }

    #back-to-top-btn.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    #back-to-top-btn:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 6px 15px rgba(255, 246, 0, 0.6);
    }

    /* Cookie Consent Modal Specific Styles (Fuzik Theme) */
    .cookie-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .cookie-modal-overlay.show {
        opacity: 1;
        visibility: visible;
    }

    .cookie-modal-content {
        background-color: #2a2a2a;
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        max-width: 500px;
        width: 90%;
        text-align: center;
        position: relative;
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        color: #e2e8f0;
    }

    .cookie-modal-overlay.show .cookie-modal-content {
        transform: translateY(0);
        opacity: 1;
    }

    .cookie-preferences-section {
        text-align: left;
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .cookie-preference-item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .cookie-preference-item input[type="checkbox"] {
        margin-right: 0.75rem;
        width: 1.25rem;
        height: 1.25rem;
        accent-color: #fff600; /* Sets checkbox color to fuzik-yellow */
    }
    
    .cookie-preference-item label {
        flex-grow: 1;
        font-weight: 500;
        color: #e2e8f0;
    }

    .cookie-preference-item p {
        font-size: 0.875rem;
        color: #b0b0b0;
        margin-top: 0.25rem;
        margin-left: calc(1.25rem + 0.75rem); /* Align with label text */
    }




</style>