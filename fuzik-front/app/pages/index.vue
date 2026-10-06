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
                    <a href="/webapp" class="btn-primary pulse-yellow">
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
                    <img src="/images/collab02.png" alt="Connect Globally" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Connect Globally</h3>
                    <p class="text-gray-400 flex-grow">Find your jam partners worldwide. Connect with a diverse community, discover new talents, and expand your musical network effortlessly.</p>
                </div>
                
                <!-- Card 2: Create Seamlessly -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab03.png" alt="Create Seamlessly" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Create Seamlessly</h3>
                    <p class="text-gray-400 flex-grow">Synchronize video performances with precision. Our tech makes multi-track collaboration feel like magic, eliminating complex editing.</p>
                </div>
                
                <!-- Card 3: Express Freely -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab05.png" alt="Express Freely" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Express Freely</h3>
                    <p class="text-gray-400 flex-grow">Jam on original riffs or public domain music without limitations. Unleash your ideas and collaborate on unique, copyright-friendly projects.</p>
                </div>
            </div>
        </div>
    </section>

    
    
    <section id="features-highlight" class="section-padding bg-black">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <VideoCarousel />

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

    <GlobalJamBanner />
    </div>

    <!-- footer -->
    <WebsiteFooter home-href="/index" :social-circles="false" :optional-cookies="false" />
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

</script>

<style scoped src="~/assets/css/buttons.css"></style>

<style scoped>
.section-padding {
        padding: 100px 0;
    }

    .pulse-yellow {
        animation: pulse-yellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5);
    }

    @keyframes pulse-yellow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5); }
        50% { box-shadow: 0 0 0 25px rgba(255, 246, 0, 0); }
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
</style>