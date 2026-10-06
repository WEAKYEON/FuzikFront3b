<template>
    <div>
        <!-- Hero Section -->
        <PageHero
        description="We&#x27;d love to hear from you! Reach out with any questions, feedback, or collaboration ideas."
    >
        Get In <span class="text-[#fff600] text-glow-subtle">Touch</span>
    </PageHero>

        <!-- Contact Information Section -->
        <section class="section-padding bg-[#1a1a1a]">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                    <div class="flex flex-col space-y-8">
                        
                        <!-- Contact Details -->
                        <div class="bg-[#2a2a2a] rounded-xl shadow-lg p-8 card-hover flex-grow">
                            <h3 class="text-3xl font-bold mb-6 text-[#f8f9fa]">Contact Details</h3>
                            <div class="space-y-6 text-gray-300">
                                <div class="flex items-start">
                                    <i class="fas fa-map-marker-alt text-[#fff600] text-2xl mr-4 mt-1"></i>
                                    <div>
                                        <p class="font-semibold text-lg text-white">Our Office</p>
                                        <p>2/35 Soi Rama9 43 (Seri4 rd.) Suanluang Suanluang BKK 10250 Thailand</p>
                                    </div>
                                </div>
                                
                                <!-- Registration Info -->
                                <div class="flex items-start">
                                    <i class="fas fa-id-card text-[#fff600] text-2xl mr-4 mt-1"></i>
                                    <div>
                                        <p class="font-semibold text-lg text-white">Registration Info</p>
                                        <p>Fuzik Connex Co., Ltd.</p>
                                        <p>DBD No.: <span class="text-[#fff600]">0105566025012</span></p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <i class="fas fa-envelope text-[#fff600] text-2xl mr-4 mt-1"></i>
                                    <div>
                                        <p class="font-semibold text-lg text-white">Email Us</p>
                                        <p><a href="mailto:admin@fuzikapp.com" class="text-[#fff600] hover:underline">admin@fuzikapp.com</a></p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <i class="fas fa-phone-alt text-[#fff600] text-2xl mr-4 mt-1"></i>
                                    <div>
                                        <p class="font-semibold text-lg text-white">Call Us</p>
                                        <p>(Thailand) <a href="tel:0878220006" class="text-[#fff600] hover:underline">061-919-9456</a></p>
                                        <p>(Global) <a href="tel:+66878220006" class="text-[#fff600] hover:underline">+66 61 919 9456</a></p>
                                    </div>
                                </div>

                                <div class="flex items-start">
                                    <i class="fab fa-discord text-[#fff600] text-2xl mr-4 mt-1"></i>
                                    <div>
                                        <p class="font-semibold text-lg text-white">Join our Discord</p>
                                        <p><a href="https://discord.gg/sm2x7mRAHb" target="_blank" class="text-[#fff600] hover:underline">https://discord.gg/sm2x7mRAHb</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Social Network Services -->
                        <div class="bg-[#2a2a2a] rounded-xl shadow-lg p-8 card-hover">
                            <h3 class="text-2xl font-bold mb-6 text-white">Social network services</h3>
                            
                            <div class="flex flex-wrap justify-evenly items-center w-full text-center gap-y-4">
                                
                                <a href="https://discord.gg/US2hz9FvsV" target="_blank" class="group flex flex-col items-center">
                                    <div class="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-[#fff600] group-hover:border-[#fff600] transition mb-2">
                                        <svg class="w-6 h-6 text-white group-hover:text-black transition" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-400 group-hover:text-white transition">Discord</span>
                                </a>

                                <a href="https://www.facebook.com/fuzikcollaboration" target="_blank" class="group flex flex-col items-center">
                                    <div class="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-[#fff600] group-hover:border-[#fff600] transition mb-2">
                                        <svg class="w-6 h-6 text-white group-hover:text-black transition" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03.8-1.5 2-1.5h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-400 group-hover:text-white transition">Facebook</span>
                                </a>

                                <a href="https://www.instagram.com/fuzikmusiccollaboration" target="_blank" class="group flex flex-col items-center">
                                    <div class="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-[#fff600] group-hover:border-[#fff600] transition mb-2">
                                        <svg class="w-6 h-6 text-white group-hover:text-black transition" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-400 group-hover:text-white transition">Instagram</span>
                                </a>

                                <a href="https://www.youtube.com/@fuzikapplication" target="_blank" class="group flex flex-col items-center">
                                    <div class="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-[#fff600] group-hover:border-[#fff600] transition mb-2">
                                        <svg class="w-6 h-6 text-white group-hover:text-black transition" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                    </div>
                                    <span class="text-sm text-gray-400 group-hover:text-white transition">Youtube</span>
                                </a>

                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="bg-[#2a2a2a] rounded-xl shadow-lg p-8 card-hover">
                        <form class="space-y-5" @submit.prevent="">
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input type="text" class="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-[#fff600] transition" placeholder="Your Name">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" class="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-[#fff600] transition" placeholder="your@email.com">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                                <input type="text" class="w-full bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-[#fff600] transition" placeholder="How can we help?">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea class="w-full h-40 bg-[#1a1a1a] border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-[#fff600] transition resize-none" placeholder="Write your message here..."></textarea>
                            </div>
                            <div class="pt-4">
                                <button type="submit" class="bg-[#fff600] text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>

        <GlobalJamBanner />
    </div>
    <!-- footer -->
    <WebsiteFooter :contained="false" />
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

    /* Styles for the detailed How It Works steps */
    .how-it-works-step {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 3rem;
        background-color: #2a2a2a;
        padding: 2.5rem;
        border-radius: 1rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        border: 1px solid rgba(255, 246, 0, 0.05);
    }

    .how-it-works-step:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(255, 246, 0, 0.25), inset 0 0 20px rgba(255, 246, 0, 0.1);
    }

    .how-it-works-step-icon {
        font-size: 4rem;
        color: #fff600;
        flex-shrink: 0;
        text-shadow: 0 0 15px rgba(255, 246, 0, 0.5);
    }

    .how-it-works-step-number {
        font-size: 3rem;
        font-weight: 800;
        color: #fff600;
        line-height: 1;
        margin-right: 1rem;
        text-shadow: 0 0 10px rgba(255, 246, 0, 0.4);
    }

    /* Alternate layout for steps on larger screens */
    .how-it-works-step:nth-child(even) {
        flex-direction: row-reverse;
    }
    .how-it-works-step:nth-child(even) .how-it-works-step-number {
        margin-left: 1rem;
        margin-right: 0;
    }

    /* Pricing Card Specific Styles */
    .pricing-card {
        background-color: #2a2a2a;
        padding: 2.5rem;
        border-radius: 1rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid rgba(255, 246, 0, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 100%; /* Ensure cards are same height */
    }
    .pricing-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(255, 246, 0, 0.25), inset 0 0 20px rgba(255, 246, 0, 0.1);
    }
    .pricing-card-header {
        color: #fff600;
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }
    .pricing-card-coins {
        font-size: 4rem;
        font-weight: 900;
        color: #f8f9fa;
        line-height: 1;
        margin-bottom: 0.5rem;
    }
    .pricing-card-price {
        font-size: 1.875rem; /* text-3xl */
        font-weight: 700;
        color: #fff600;
        margin-bottom: 1.5rem;
    }
    .pricing-card ul {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
        text-align: left;
        width: 100%;
        max-width: 250px;
    }
    .pricing-card ul li {
        display: flex;
        align-items: flex-start; /* Align icon to top of text */
        margin-bottom: 0.75rem;
        color: #e2e8f0;
    }
    .pricing-card ul li i {
        color: #fff600;
        margin-right: 0.75rem;
        font-size: 1.25rem;
        flex-shrink: 0; /* Prevent icon from shrinking */
        margin-top: 0.2rem; /* Adjust icon vertical alignment */
    }
    .pricing-card .btn-primary {
        width: 100%;
        margin-top: auto; /* Push button to bottom */
    }

    /* FAQ Accordion Styles */
    .faq-header {
        background-color: #2a2a2a;
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 0.5rem;
        transition: background-color 0.3s ease;
    }
    .faq-header:hover {
        background-color: #1a1a1a;
    }
    .faq-header.active {
        background-color: #1a1a1a;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .faq-header.active .faq-icon {
        transform: rotate(180deg);
    }
    .faq-icon {
        transition: transform 0.3s ease;
        color: #fff600;
    }
    .faq-content {
        background-color: #2a2a2a;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        overflow: hidden;
        transition: max-height 0.5s ease-out;
        max-height: 0;
    }

    .faq-content p {
        padding: 1.5rem;
        padding-top: 0;
        color: #e2e8f0;
    }
</style>