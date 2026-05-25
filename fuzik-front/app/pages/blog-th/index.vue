<template>
<div>

     <!-- Hero Section -->
    <section class="hero-gradient py-20 md:py-32">
        <div class="bg-[#1a1a1a] mx-auto px-6 text-center">
            <h1 class="text-6xl md:text-7xl font-black mb-6 text-white">
                บล็อก<span class="text-[#fff600] text-glow-subtle">ของเรา</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                ข้อมูลเชิงลึก เคล็ดลับ และเรื่องราวจากโลกของการทำงานร่วมกันทางดนตรีออนไลน์
            </p>
        </div>
    </section>
    
    <div class="grid gap-12 md:grid-cols-3 bg-[#111111] p-12 ">
        <article 
            v-for="post in randomizedPosts" 
            :key="post.id" 
            class="flex flex-col bg-[#2a2a2a] rounded-2xl border-2 border-[#fff600] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group"
        >
            <div class="overflow-hidden aspect-video bg-gray-100">
            <img 
                :src="post.imageUrl" 
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
                <div class="flex items-center gap-3 text-sm text-gray-100 mb-3">
                <span>By {{ post.author }}</span>
                <span>•</span>
                <time>{{ post.date }}</time>
                </div>

                <h2 class="text-2xl font-bold text-white group-hover:text-[#fff600] transition-colors line-clamp-2">
                <NuxtLink :to="`/blog-th/${post.slug}`">
                    {{ post.title }}
                </NuxtLink>
                </h2>

                <p class="mt-3 text-[#f8f9fa] line-clamp-3 text-sm leading-relaxed">
                {{ post.excerpt }}
                </p>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                <span 
                v-for="tag in post.tags.slice(0, 3)" 
                :key="tag"
                class="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md"
                >
                #{{ tag }}
                </span>
                <span v-if="post.tags.length > 3" class="text-xs text-gray-400 self-center">
                +{{ post.tags.length - 3 }} more
                </span>
            </div>
            
            </div>
        </article>
    </div>
    
    <section class="section-padding bg-[#fff600] text-black text-center">
        <div class="container mx-auto px-6">
            <h2 class="text-5xl font-bold mb-6 text-[#111111]" >พร้อมที่จะเริ่ม<span class="text-[#1a1a1a]">การแจมระดับโลกของคุณแล้วหรือยัง?</span></h2>
            <p class="text-xl mb-8 opacity-90">
                เข้าร่วมกับนักดนตรีมือสมัครเล่นหลายพันคนทั่วโลกที่กำลังเชื่อมต่อ เล่น และสร้างสรรค์บน Fuzik Collaborate การผจญภัยทางดนตรีครั้งต่อไปของคุณเพียงแค่คลิกเดียว!
            </p>
            <a href="/webapp" target="_blank" class="btn-primary btn-final-cta pulse-yellow">
                <img src="/images/icons/rocket_launch_256.png" class="w-16 px-4"  />เปิดแอป Fuzik เลย!
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
                        เสริมสร้างศักยภาพนักดนตรีทั่วโลกให้เชื่อมต่อ สร้างสรรค์ และแจมดนตรีร่วมกันผ่านเทคโนโลยีการซิงโครไนซ์วิดีโอที่เป็นนวัตกรรม
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
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">แพลตฟอร์ม</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="/feature-th" class="nav-link-hover-effect">ฟีเจอร์</a></li>
                        <li><a href="/pricing-th" class="nav-link-hover-effect">ราคา</a></li>
                        <li><a href="https://fuzikapp.com/webpapp" target="_blank" class="nav-link-hover-effect">เว็บแอป</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">แหล่งข้อมูล</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="/contact-th" class="nav-link-hover-effect">ติดต่อเรา</a></li>
                        <li><a href="/faq-th" class="nav-link-hover-effect">คำถามที่พบบ่อย</a></li>
                        <li><a href="/blog/index-th" class="nav-link-hover-effect">บล็อก</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-lg mb-5 text-[#fff600]">กฎหมาย</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="/privacy_policy-th" class="nav-link-hover-effect">นโยบายความเป็นส่วนตัว</a></li>
                        <li><a href="/terms-th" class="nav-link-hover-effect">ข้อกำหนดในการให้บริการ</a></li>
                        <li><a href="/cookie-th" class="nav-link-hover-effect">นโยบายคุกกี้</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-[#aaaaaa] pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>
                    © 2024 Fuzik Collaborate โดย Fuzik Connex Co., Ltd. สงวนลิขสิทธิ์
                </p>
                <p class="mt-2 md:mt-0">
                    เล่นดนตรีด้วยกัน
                </p>
            </div>
        </div>
    
        <div id="cookie-consent-modal" class="cookie-modal-overlay">
            <div class="cookie-modal-content">
                <h2 class="text-2xl font-bold mb-4 text-[#f8f9fa]">เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ</h2>
                <p class="text-gray-300 mb-6">
                    เว็บไซต์นี้ (<a href="https://fuzikapp.com" class="text-[#fff600] hover:underline">www.fuzik.co</a>) ใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณและวิเคราะห์ปริมาณการเข้าชมเว็บไซต์ การคลิก "ยอมรับคุกกี้ทั้งหมด" แสดงว่าคุณยินยอมให้ใช้คุกกี้ทั้งหมด สำหรับข้อมูลเพิ่มเติมหรือจัดการการตั้งค่าของคุณ โปรดคลิก "จัดการการตั้งค่า".
                </p>
                <div id="initial-buttons" class="flex justify-center space-x-4">
                    <button onclick="acceptAllCookies()" class="btn-primary px-6 py-3">ยอมรับคุกกี้ทั้งหมด</button>
                    <button onclick="showPreferenceManager()" class="btn-secondary px-6 py-3">จัดการการตั้งค่า</button>
                </div>

                <div id="cookie-preferences" class="cookie-preferences-section hidden">
                    <h3 class="text-xl font-bold mb-4 text-[#f8f9fa]">จัดการการตั้งค่าคุกกี้ของคุณ</h3>
                    
                    <div class="cookie-preference-item">
                        <input type="checkbox" id="essential-cookies" checked disabled>
                        <label for="essential-cookies">คุกกี้ที่จำเป็น</label>
                        <p class="text-gray-400">คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์และไม่สามารถปิดได้</p>
                    </div>

                  

                    <div class="flex justify-center mt-6">
                        <button onclick="saveCookiePreferences()" class="btn-primary px-6 py-3">บันทึกการตั้งค่า</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    definePageMeta({
        layout: "front-th"
    });

    useSeoMeta({
        title: 'Fuzik Collaborate - บล็อกของเรา',
        ogTitle: 'Fuzik Collaborate - บล็อกของเรา',
        description: 'ติดตามข่าวสารล่าสุด เคล็ดลับ และข้อมูลเชิงลึกจาก Fuzik Collaborate สำรวจบทความเกี่ยวกับการทำงานร่วมกันทางดนตรีออนไลน์ เซสชันแจมเสมือนจริง และการผลิตเพลง',
        ogDescription: 'ติดตามข่าวสารล่าสุด เคล็ดลับ และข้อมูลเชิงลึกจาก Fuzik Collaborate สำรวจบทความเกี่ยวกับการทำงานร่วมกันทางดนตรีออนไลน์ เซสชันแจมเสมือนจริง และการผลิตเพลง',
        ogImage: 'https://fuzikapp.com/images/logo/FuzikLogo.png',
    });

import blogData from '~/data/blogs-th.json';

// Create a reactive reference for the posts array
const randomizedPosts = ref([...blogData]);

onMounted(() => {
  // Fisher-Yates (Knuth) Shuffle algorithm for an unbiased random sort
  const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  randomizedPosts.value = shuffle([...blogData]);
});

</script>

<style scoped>
/* CSS Variables for Fuzik Brand Colors (Copied from index.html) */
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
        background-color: #111111;
        background-image: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.05"/></svg>');
        background-repeat: repeat;
        background-size: auto;
    }

    /* Headings default color (Copied from index.html) */
    h1, h3, h4, h5, h6 {
        color: #f8f9fa;
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
        border: 2px solid var(--fuzik-yellow) !important;
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