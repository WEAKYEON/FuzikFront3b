<template>
    <div>
     <PageHero
        description="From a shared passion for music to a global collaboration platform."
    >
        Our Story: <span class="text-[#fff600] text-glow-subtle">The Fuzik Journey</span>
    </PageHero>

    <!-- About Us Content Section -->
    <section class="section-padding bg-[#1a1a1a]">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8 text-white">Who We Are & What Drives Us</h2>
                <p class="text-lg text-gray-300 mb-6">
                    Fuzik Collaborate was born from a simple idea: music is best when shared. Our three founders, all passionate musicians, experienced firsthand the challenges of remote collaboration – latency issues, complex software, and the sheer difficulty of finding like-minded artists across distances. They envisioned a platform that would remove these barriers, making global jam sessions as easy and intuitive as playing in the same room.
                </p>
                <p class="text-lg text-gray-300 mb-6">
                    Our mission is to empower every musician, from hobbyists to seasoned professionals, to connect, create, and share their art without geographical or technical limitations. We believe in fostering a vibrant, supportive community where creativity knows no bounds.
                </p>
                <p class="text-lg text-gray-300">
                    We're constantly innovating, driven by the feedback of our growing community. Our commitment is to provide the most seamless, high-quality online music collaboration experience possible.
                </p>
            </div>
        </div>
    </section>

    <!-- Our Team Section -->
    <section class="section-padding bg-black">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-12 text-white">Meet the <span class="text-[#fff600]">Team</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-stretch">
                
                <!-- Team Member 1 -->
                <div class="bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover flex flex-col h-full">
                    <img src="/images/people/win.jpeg" alt="Win" class="rounded-full w-32 h-32 mx-auto mb-6 object-cover border-4 border-[#fff600]">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Pawin N.</h3>
                    <p class="text-gray-300 text-lg mb-2">CEO & Co-Founder</p>
                    <p class="text-gray-400 text-sm flex-grow">A visionary leader and passionate musician, ensuring our platform empowers artists worldwide. His dedication to innovation shapes our mission to connect musicians globally.</p>
                    <!-- LinkedIn Icon -->
                    <div class="mt-6">
                        <a href="https://www.linkedin.com/in/pawin-nuntachantoon-16715624a" target="_blank" class="inline-block text-gray-500 hover:text-[#fff600] transition">
                            <svg class="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Team Member 2 -->
                <div class="bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover flex flex-col h-full">
                    <img src="/images/people/Ing.jpeg" alt="Ing" class="rounded-full w-32 h-32 mx-auto mb-6 object-cover border-4 border-[#fff600]">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Butsarakham K.</h3>
                    <p class="text-gray-300 text-lg mb-2">CMO & Co-Founder</p>
                    <p class="text-gray-400 text-sm flex-grow">With a deep understanding of the music community, She is dedicated to fostering a vibrant and supportive environment where musicians can thrive and collaborate freely.</p>
                    <!-- LinkedIn Icon -->
                    <div class="mt-6">
                        <a href="https://www.linkedin.com/in/butsarakham-klowuthiwat-2419821a1" target="_blank" class="inline-block text-gray-500 hover:text-[#fff600] transition">
                            <svg class="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Team Member 3 -->
                <div class="bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover flex flex-col h-full">
                    <img src="/images/people/Ohm.jpg" alt="Ohm" class="rounded-full w-32 h-32 mx-auto mb-6 object-cover border-4 border-[#fff600]">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">Dhirachat C.</h3>
                    <p class="text-gray-300 text-lg mb-2">CTO & Co-Founder</p>
                    <p class="text-gray-400 text-sm flex-grow">Technical architect behind Fuzik Collaborate's seamless experience. His expertise in audio and video synchronization ensures our platform delivers high-quality, lag-free collaboration for every user.</p>
                    <!-- LinkedIn Icon -->
                    <div class="mt-6">
                        <a href="https://www.linkedin.com/in/dhirachat-chayaporn-0aa43570/" target="_blank" class="inline-block text-gray-500 hover:text-[#fff600] transition">
                            <svg class="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding gradient-bg">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-12 text-white">Our <span class="text-[#fff600]">Core Values</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                <div class="text-left bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-3">Community First</h3>
                    <p class="text-gray-300">We believe in fostering a supportive and inclusive global community where every musician feels welcome to share, learn, and grow.</p>
                </div>
                <div class="text-left bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-3">Innovation & Excellence</h3>
                    <p class="text-gray-300">We are committed to continuous innovation, pushing the boundaries of online music collaboration to deliver the best possible experience.</p>
                </div>
                <div class="text-left bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-3">Accessibility</h3>
                    <p class="text-gray-300">Music should be accessible to all. We strive to make Fuzik Collaborate easy to use, regardless of technical skill or location.</p>
                </div>
                <div class="text-left bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-3">Creative Freedom</h3>
                    <p class="text-gray-300">We champion artistic expression and provide a platform where musicians can explore their creativity without unnecessary limitations.</p>
                </div>
            </div>
        </div>
    </section>
    
    <GlobalJamBanner />

    </div>
    
    <!-- footer -->
    <WebsiteFooter />
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "front"
    });

    useSeoMeta({
        title: 'Fuzik Collaborate - Your Global Jam Session Starts Now!',
        ogTitle: 'Fuzik Collaborate - Your Global Jam Session Starts Now!',
        description: 'Connect with musicians worldwide, create synchronized video jams, and elevate your music together with Fuzik Collaborate. Seamless online music collaboration for all skill levels.',
        ogDescription: 'Connect with musicians worldwide, create synchronized video jams, and elevate your music together with Fuzik Collaborate. Seamless online music collaboration for all skill levels.',
        ogImage: 'https://fuzikapp.com/images/logo/FuzikLogo.png',
    });
</script>

<style scoped>
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

    /* Gradient background for sections (Copied from index.html) */
    .gradient-bg {
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    }
    
    /* Smooth scroll behavior for anchor links (Copied from index.html) */
    .scroll-smooth {
        scroll-behavior: smooth;
    }
    
    /* Floating animation for hero headline (Copied from index.html) */
    .animate-float-headline {
        animation: float-headline 6s ease-in-out infinite;
    }
    
    @keyframes float-headline {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    /* Card hover effects (Copied from index.html) */
    .card-hover {
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), inset 0 0 0 0 rgba(255, 246, 0, 0);
    }
    
    .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 25px rgba(255, 246, 0, 0.25), inset 0 0 20px rgba(255, 246, 0, 0.1);
    }
    
    /* Standard padding for content sections (Copied from index.html) */
    .section-padding {
        padding: 100px 0;
    }

    /* Mobile menu specific styles */
    #mobile-menu {
        transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
        max-height: 0; /* Start hidden */
        overflow: hidden;
        opacity: 0; /* Start invisible */
        background: rgba(0, 0, 0, 0.98);
        border-radius: 0.75rem;
        margin-top: 1rem;
        padding: 0 1.5rem; /* No padding when closed */
    }

    #mobile-menu.open {
        max-height: 500px; /* Adjust as needed for content */
        opacity: 1;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    /* Visual Explainer Icons (Copied from index.html) */
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

    /* Simple Flow Icons (Copied from index.html) */
    .simple-flow-icon {
        font-size: 5rem;
        color: #fff600;
        margin-bottom: 0.5rem;
        text-shadow: 0 0 15px rgba(255, 246, 0, 0.5);
    }
    .simple-flow-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        padding: 1rem;
    }
    .simple-flow-arrow {
        position: absolute;
        right: -3.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(255, 246, 0, 0.4);
        font-size: 2.5rem;
        z-index: 1;
    }
    @media (max-width: 767px) {
        .simple-flow-arrow {
            display: none;
        }
        .simple-flow-step:not(:last-child)::after {
            content: '';
            position: absolute;
            bottom: -2.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 3px;
            height: 4rem;
            background-color: rgba(255, 246, 0, 0.4);
        }
    }

    /* Back to Top Button Styling */
    #back-to-top-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: #fff600;
        color: #1a1a1a;
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

    /* Language Dropdown Specific Styles */
    .language-dropdown {
        position: relative;
        display: inline-block;
    }

    .language-dropdown-content {
        display: none;
        position: absolute;
        background-color: #f8f9fa;
        min-width: 120px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border-radius: 0.5rem;
        overflow: hidden;
        right: 0; /* Align dropdown to the right of the button */
        top: 100%; /* Position below the button */
        margin-top: 0.5rem; /* Space between button and dropdown */
    }

    .language-dropdown-content a {
        color: #f8f9fa;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        font-weight: 500;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .language-dropdown-content a:hover {
        background-color: #1a1a1a;
        color: #fff600;
    }

    .language-dropdown-content.show {
        display: block;
    }

    /* Mobile specific adjustments for language dropdown */
    #mobile-language-dropdown-content {
        position: static; /* Override absolute positioning for mobile */
        background-color: transparent; /* No background for mobile dropdown */
        box-shadow: none;
        min-width: unset;
        margin-top: 0;
        border-radius: 0;
        padding-left: 1.5rem; /* Indent mobile language options */
    }

    #mobile-language-dropdown-content a {
        padding: 8px 0; /* Adjust padding for mobile links */
    }

    /* Style for active language link */
    .active-lang {
        color: #fff600 !important;
        font-weight: 700 !important;
        text-decoration: underline !important;
    }
</style>