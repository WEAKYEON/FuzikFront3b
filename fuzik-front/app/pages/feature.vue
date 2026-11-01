<template>
    <div class="features-page">
        <!-- Hero Section -->
    <PageHero
        title-class="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-[#f8f9fa] leading-tight"
        description="Discover the powerful tools and simple steps to create music together."
    >
        Features & <br class="sm:hidden" /><span class="text-[#fff600] text-glow-subtle">How It Works</span>
    </PageHero>

    <!-- Features Section -->
    <section class="section-padding bg-[#1a1a1a]">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-white">Key <span class="text-[#fff600]">Features</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- Feature 1: Precision Video Sync -->
                <div class="visual-explainer-card text-center bg-[#2a2a2a] p-6 rounded-xl card-hover flex flex-col">
                    <img src="/images/collab03.png" alt="Precision Video Sync" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#f8f9fa] mb-3">Precision Video Sync</h3>
                    <p class="text-gray-300 text-sm flex-grow">
                        Our advanced technology ensures your audio and video are perfectly synchronized, 
                        eliminating latency and making remote jams feel like you're in the same room.
                    </p>
                </div>
                
                <!-- Feature 2: Multi-User Collaboration -->
                <div class="visual-explainer-card text-center bg-[#2a2a2a] p-6 rounded-xl card-hover flex flex-col">
                    <img src="/images/collab02.png" alt="Multi-User Collaboration" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#f8f9fa] mb-3">Multi-User Collaboration</h3>
                    <p class="text-gray-300 text-sm flex-grow">
                        Invite multiple bandmates or new collaborators to your projects. 
                        Work together in real-time, share ideas, and build tracks seamlessly.
                    </p>
                </div>
                
                <!-- Feature 3: Intuitive Interface -->
                <div class="visual-explainer-card text-center bg-[#2a2a2a] p-6 rounded-xl card-hover flex flex-col">
                    <img src="/images/collab01.png" alt="Intuitive Interface" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#f8f9fa] mb-3">Intuitive Interface</h3>
                    <p class="text-gray-300 text-sm flex-grow">
                        Designed for musicians, not tech experts. Our user-friendly interface 
                        makes creating and collaborating simple and enjoyable.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="section-padding bg-black">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-white">How It <span class="text-[#fff600]">Works</span></h2>
            <div class="max-w-5xl mx-auto space-y-8">
                
                <!-- Step 1 -->
                <div class="how-it-works-step flex min-w-0 flex-col items-center rounded-xl border border-gray-800 bg-[#1a1a1a] p-4 shadow-lg sm:p-6 md:flex-row">
                    <div class="mb-5 w-full min-w-0 md:mb-0 md:mr-8 md:w-2/5 md:flex-shrink-0">
                        <img src="/images/collab06.png" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div class="w-full min-w-0 text-left md:w-3/5">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">01</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">Record Your Track</h3>
                        </div>
                        <p class="pl-0 text-gray-300 sm:pl-14">
                            Start by recording your individual audio or video track directly within Fuzik, 
                            or upload an existing one. Our smart system prepares it for collaboration.
                        </p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="how-it-works-step flex min-w-0 flex-col items-center rounded-xl border border-gray-800 bg-[#1a1a1a] p-4 shadow-lg sm:p-6 md:flex-row">
                    <div class="mb-5 w-full min-w-0 md:mb-0 md:mr-8 md:w-2/5 md:flex-shrink-0">
                        <img src="/images/collab02.png" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div class="w-full min-w-0 text-left md:w-3/5">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">02</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">Invite Collaborators</h3>
                        </div>
                        <p class="pl-0 text-gray-300 sm:pl-14">
                            Share a unique project link with your bandmates or new friends. 
                            They can join instantly, no complex setup required.
                        </p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="how-it-works-step flex min-w-0 flex-col items-center rounded-xl border border-gray-800 bg-[#1a1a1a] p-4 shadow-lg sm:p-6 md:flex-row">
                    <div class="mb-5 w-full min-w-0 md:mb-0 md:mr-8 md:w-2/5 md:flex-shrink-0">
                        <img src="/images/collab03.png" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div class="w-full min-w-0 text-left md:w-3/5">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">03</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">Jam & Create</h3>
                        </div>
                        <p class="pl-0 text-gray-300 sm:pl-14">
                            Everyone records their parts, perfectly synchronized to the original track. 
                            Watch your collaborative masterpiece come to life in real-time.
                        </p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="how-it-works-step flex min-w-0 flex-col items-center rounded-xl border border-gray-800 bg-[#1a1a1a] p-4 shadow-lg sm:p-6 md:flex-row">
                    <div class="mb-5 w-full min-w-0 md:mb-0 md:mr-8 md:w-2/5 md:flex-shrink-0">
                        <!-- กล่อง Icon สำหรับ Export & Share -->
                        <div class="w-full h-48 bg-[#2a2a2a] rounded-lg border border-gray-700 shadow-md flex items-center justify-center group hover:border-[#fff600] transition duration-300">
                            <svg class="w-20 h-20 text-[#fff600] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="w-full min-w-0 text-left md:w-3/5">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">04</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">Export & Share</h3>
                        </div>
                        <p class="pl-0 text-gray-300 sm:pl-14">
                            Once your jam is complete, easily export the synchronized video and audio. 
                            Share it with the world or keep it private – it's your music!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <GlobalJamBanner />
    </div>
    <!-- footer -->
    <WebsiteFooter home-href="/index" />
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

    @media (max-width: 767px) {
        .visual-explainer-card {
            width: 100%;
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
            padding: 1rem;
        }

        .section-padding .grid,
        .section-padding .grid > * {
            min-width: 0;
            max-width: 100%;
        }

        .section-padding .grid {
            display: grid;
            width: 100%;
            max-width: 100%;
            grid-template-columns: minmax(0, 1fr);
        }

        .visual-explainer-card img {
            width: 100%;
            min-width: 0;
            height: auto;
            max-height: 13rem;
            aspect-ratio: 16 / 9;
            object-fit: cover;
        }

        .visual-explainer-card h3,
        .visual-explainer-card p {
            min-width: 0;
            overflow-wrap: anywhere;
        }

        .how-it-works-step,
        .how-it-works-step:nth-child(even) {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
            width: 100%;
            min-width: 0;
            margin-bottom: 1.5rem;
            padding: 1rem;
        }

        .how-it-works-step > div {
            width: 100%;
            min-width: 0;
            margin: 0;
        }

        .how-it-works-step img {
            display: block;
            width: 100%;
            height: auto;
            max-height: 15rem;
            aspect-ratio: 16 / 9;
            object-fit: cover;
        }

        .how-it-works-step h3 {
            min-width: 0;
            overflow-wrap: anywhere;
        }

        .how-it-works-step p {
            padding-left: 0;
            overflow-wrap: anywhere;
        }

        .how-it-works-step:hover {
            transform: none;
        }

        #back-to-top-btn {
            right: 1rem;
            bottom: max(1rem, env(safe-area-inset-bottom));
            padding: .75rem;
        }

        .section-padding {
            padding-block: 3.5rem;
        }

        .section-padding > .container {
            width: 100vw;
            max-width: 100vw;
            box-sizing: border-box;
            padding-inline: 1rem;
        }

        :deep(.hero-gradient) {
            max-width: 100%;
            overflow-x: clip;
        }

        :deep(.hero-gradient > div) {
            width: 100vw;
            max-width: 100vw;
            min-width: 0;
            padding-inline: 1rem;
        }

        .features-page,
        .features-page > section {
            width: 100%;
            max-width: 100vw;
            min-width: 0;
            overflow-x: clip;
        }

        .features-page :deep(.section-padding) {
            padding-block: 3.5rem;
        }

        .features-page :deep(.section-padding h2) {
            font-size: clamp(1.75rem, 8vw, 2.25rem);
            line-height: 1.15;
            overflow-wrap: anywhere;
        }

        .features-page :deep(.section-padding p) {
            font-size: 1rem;
            line-height: 1.5;
            overflow-wrap: anywhere;
        }

        :deep(.hero-gradient h1) {
            max-width: 100%;
            font-size: clamp(2rem, 9vw, 3rem);
            line-height: 1.1;
            overflow-wrap: anywhere;
        }

        :deep(.hero-gradient p) {
            max-width: 100%;
            font-size: 1rem;
            line-height: 1.5;
            overflow-wrap: anywhere;
        }

        .section-padding h2 {
            margin-bottom: 2rem;
            font-size: clamp(1.75rem, 8vw, 2.25rem);
            line-height: 1.15;
            overflow-wrap: anywhere;
        }
    }
</style>