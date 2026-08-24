<template>
    <div class="bg-[#111111]">
        <div v-if="post" class="max-w-4xl mx-auto">
            <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-xl font-medium text-white hover:text-[#fff600] mb-8 group transition-colors">
            <span class="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to articles
            </NuxtLink>

            <article class="">
            <div class="rounded-2xl overflow-hidden mb-8 shadow-sm aspect-video">
                <img :src="post.imageUrl" :alt="post.title" class="w-full h-full object-cover" />
            </div>

            <header class="mb-8 bg-[#1a1a1a]">
                <h1 class="text-3xl sm:text-4xl font-black text-[#fff600] tracking-tight leading-tight">
                {{ post.title }}
                </h1>
                
                <div class="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-100 border-b border-gray-200 pb-6">
                <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-[#fff600] text-black flex items-center justify-center font-bold text-xs">FZ</span>
                    <span class="font-semibold text-gray-200">{{ post.author }}</span>
                </div>
                <span>•</span>
                <span>Published on {{ post.date }}</span>
                </div>
            </header>

            <div class="flex flex-wrap gap-2 mb-8">
                <span 
                v-for="tag in post.tags" 
                :key="tag" 
                class="text-sm font-medium text-white bg-black border-3 border-yellow-300 px-3 py-1 rounded-full"
                >
                {{ tag }}
                </span>
            </div>

            

            <div v-html="cleanContent" class="text-gray-200 text-lg leading-relaxed space-y-6 prose prose-invert max-w-none 
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-[#fff600] [&_h2]:mt-6 [&_h2]:mb-2 
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-[#fff600] [&_h3]:mt-6 [&_h3]:mb-2 
                
                [&_strong]:font-bold [&_strong]:text-white">
            </div>
            </article>
        </div>

        <div v-else class="text-center py-24 bg-white rounded-2xl border border-gray-200 shadow-xs max-w-lg mx-auto mt-10">
            <span class="text-4xl">⚠️</span>
            <h2 class="text-2xl font-black text-gray-200 mt-4">Article Not Found</h2>
            <p class="text-gray-600 mt-2 px-6">We couldn't find the collaborative journal post matching that address link option.</p>
            <NuxtLink to="/" class="mt-6 inline-block px-5 py-2.5 bg-yellow-300 text-black rounded-xl font-medium hover:bg-yellow-700 transition-colors shadow-xs">
            Return to front page
            </NuxtLink>
        </div>
        <br /><br />
        <section class="section-padding bg-[#fff600] text-black text-center">
        <div class=" mx-auto px-6 ">
            <h2 class="text-5xl font-bold mb-6" >Ready to Start Your <span class="text-[#1a1a1a]">Global Jam?</span></h2>
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
        <div class=" mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
                <div class="col-span-1 md:col-span-2 lg:col-span-1">
                    <a href="/" class="flex items-center space-x-2 mb-4">
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
                        <li><a href="https://www.fuzikapp.com" target="_blank" class="nav-link-hover-effect">Web App</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">Resources</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="contact.html" class="nav-link-hover-effect">Contact Us</a></li>
                        <li><a href="faq.html" class="nav-link-hover-effect">FAQ</a></li>
                        <li><a href="faq.html" class="nav-link-hover-effect">Help Center</a></li>
                        <li><a href="community.html" class="nav-link-hover-effect">Community</a></li>
                        <li><a href="blog.html" class="nav-link-hover-effect">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">Legal</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="privacy policy.html" class="nav-link-hover-effect">Privacy Policy</a></li>
                        <li><a href="terms.html" class="nav-link-hover-effect">Terms of Service</a></li>
                        <li><a href="cookie.html" class="nav-link-hover-effect">Cookie Policy</a></li>
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

                    <div class="cookie-preference-item">
                        <input type="checkbox" id="analytics-cookies" checked>
                        <label for="analytics-cookies">Analytics Cookies</label>
                        <p class="text-gray-400">These cookies help us understand how visitors interact with our website, enabling us to improve its performance.</p>
                    </div>

                    <div class="cookie-preference-item">
                        <input type="checkbox" id="marketing-cookies" checked>
                        <label for="marketing-cookies">Marketing Cookies</label>
                        <p class="text-gray-400">These cookies are used to track visitors across websites to display relevant advertisements.</p>
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

import blogData from '~/data/blogs.json';
import { marked } from 'marked'
import { ref, computed } from 'vue'

const route = useRoute();
const currentSlug = route.params.slug;

// Find matching article by its unique payload slug key identifier
const post = blogData.find(item => item.slug === currentSlug);

// Clean up markdown title header lines if they repeat inside the text content block
const cleanContent = computed(() => {
  if (!post) return '';
  // Removes any duplicating top structural titles formatting inside the content string block
  return marked.parse(post.content);
  //return post.content.replace(/^##\s+.*\n/, '');
  
});

</script>

<style scoped>
/* Inline styling parsing helpers to render your standard markdown blocks correctly */
/*
:deep(h3) {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
  */
:deep(ul) {
  list-style-type: disk;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}
:deep(li) {
  margin-bottom: 0.5rem;
}
/*
:deep(strong) {
  color: #111827;
  font-weight: 700;
}
*/
    :root {
        --fuzik-yellow: #FFF600;
        --fuzik-dark: #1a1a1a;
        --fuzik-gray: #2a2a2a;
        --fuzik-light-gray: #f8f9fa;
        --fuzik-black: #000000;
        --text-default-gray: #e2e8f0; /* Default text color for body, links */
    }
    
    /* Apply Inter font globally and enable smoother font rendering (Copied from index.html) */
    * {
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    /* Base body styling (Copied from index.html) */
    body {
        line-height: 1.6;
        color: #e2e8f0;
        /*
        background-color: #111111;
        
        
        background-image: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.05"/></svg>');
        
        background-repeat: repeat;
        background-size: auto;*/
    }

    /* Headings default color (Copied from index.html) */
    h3, h4, h5, h6 {
        color: #f8f9fa;
    }
    
    h2 {
        color: #1a1a1a;

    }
    
    /* Gradient background for sections (Copied from index.html) */
    .gradient-bg {
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    }
    
    /* Hero section specific gradient and dynamic background (Copied from index.html) */
    .hero-gradient {
        background: linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #2a2a2a 100%);
        position: relative;
        overflow: hidden;
    }

    /* Dynamic background elements for Hero (abstract sound waves/particles) (Copied from index.html) */
    .hero-wave-element {
        position: absolute;
        
        background: radial-gradient(circle, rgba(255,246,0,0.15) 0%, rgba(255,246,0,0) 70%);
        
        border-radius: 50%;
        animation: wave-pulse 15s ease-in-out infinite;
        filter: blur(12px);
        z-index: 0;
    }

    @keyframes wave-pulse {
        0% { transform: scale(0.5) translateY(0px) translateX(0px); opacity: 0.15; }
        25% { transform: scale(1.1) translateY(-20px) translateX(10px); opacity: 0.25; }
        50% { transform: scale(0.8) translateY(10px) translateX(-15px); opacity: 0.18; }
        75% { transform: scale(1.2) translateY(-10px) translateX(5px); opacity: 0.22; }
        100% { transform: scale(0.5) translateY(0px) translateX(0px); opacity: 0.15; }
    }
    
    /* Less glowing text, only for main headline (Copied from index.html) */
    .text-glow-subtle {
        text-shadow: 0 0 10px rgba(255, 246, 0, 0.3);
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
    
    /* Custom button styles for consistency (Copied from index.html) */
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

    /* Specific styles for the "Launch Fuzik App Now!" button in the final CTA (Copied from index.html) */
    .btn-final-cta {
        background-color: #111111 !important;
        color: #fff600 !important;
        font-weight: 800;
        text-shadow: 0 0 3px rgba(255, 246, 0, 0.2);
        border: 2px solid #fff600 !important;
    }

    .btn-final-cta:hover {
        background-color: #fff600 !important;
        color: #111111 !important;
        text-shadow: none !important;
        transform: translateY(-3px) scale(1.03);
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

    /* Custom pulse animation for CTA button (Copied from index.html) */
    .pulse-yellow {
        animation: pulse-yellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5);
    }

    @keyframes pulse-yellow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5); }
        50% { box-shadow: 0 0 0 25px rgba(255, 246, 0, 0); }
    }

    /* Footer social icon styling (Copied from index.html) */
    .footer-social-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transition: all 0.3s ease;
        color: #f8f9fa;
    }

    .footer-social-icon:hover {
        background-color: #fff600;
        color: #111111;
        transform: translateY(-3px);
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

    /* Specific styles for blog post cards */
    .blog-card {
        background-color: #2a2a2a;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid rgba(255, 246, 0, 0.05);
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .blog-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 30px rgba(255, 246, 0, 0.25), inset 0 0 20px rgba(255, 246, 0, 0.1);
    }
    .blog-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .blog-card-content {
        padding: 1.5rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .blog-card-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #f8f9fa;
        margin-bottom: 0.5rem;
    }
    .blog-card-meta {
        font-size: 0.875rem;
        color: #b0b0b0;
        margin-bottom: 1rem;
    }
    .blog-card-excerpt {
        font-size: 1rem;
        color: #e2e8f0;
        margin-bottom: 1.5rem;
        flex-grow: 1;
    }
    .blog-card-link {
        display: inline-block;
        background-color: #fff600;
        color: #111111;
        padding: 0.75rem 1.5rem;
        border-radius: 9999px;
        font-weight: 600;
        transition: all 0.3s ease;
        text-decoration: none;
        align-self: flex-start;
    }
    .blog-card-link:hover {
        background-color: #ffe000;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(255, 246, 0, 0.3);
    }
    
    /* NEW PAGINATION STYLES */
    .pagination-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem; /* 12px */
        margin-top: 4rem; /* 64px */
    }
    .pagination-btn {
        background-color: #2a2a2a;
        color: #e2e8f0;
        border: 1px solid rgba(255, 246, 0, 0.2);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .pagination-btn:hover:not(:disabled) {
        background-color: #fff600;
        color: #111111;
    }
    .pagination-btn.active {
        background-color: #fff600;
        color: #111111;
        font-weight: 700;
    }
    .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
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

    /* Language Dropdown Specific Styles (Copied from index.html) */
    .language-dropdown {
        position: relative;
        display: inline-block;
    }

    .language-dropdown-content {
        display: none;
        position: absolute;
        background-color: #2a2a2a;
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
        color: #e2e8f0;
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