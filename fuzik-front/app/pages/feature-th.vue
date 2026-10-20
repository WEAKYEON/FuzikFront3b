<template>
    <div>
        <!-- Hero Section -->
    <PageHero
        description="ค้นพบเครื่องมืออันทรงพลังและขั้นตอนง่ายๆ ในการสร้างสรรค์ดนตรีร่วมกัน"
    >
        ฟีเจอร์ & <span class="text-[#fff600] text-glow-subtle">วิธีการทำงาน</span>
    </PageHero>

    <!-- Features Section -->
    <section class="section-padding bg-[#1a1a1a]">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-white">ฟีเจอร์หลัก<span class="text-[#fff600]">หลัก</span></h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <!-- Feature 1: Precision Video Sync -->
                <div class="visual-explainer-card text-center bg-[#2a2a2a] p-6 rounded-xl card-hover flex flex-col">
                    <img src="/images/collab03.png" alt="การซิงค์วิดีโอที่แม่นยำ" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#f8f9fa] mb-3">การซิงค์วิดีโอที่แม่นยำ</h3>
                    <p class="text-gray-300 text-sm flex-grow">
                        เทคโนโลยีขั้นสูงของเราช่วยให้มั่นใจได้ว่าเสียงและวิดีโอของคุณจะซิงโครไนซ์กันอย่างสมบูรณ์แบบ
                        ขจัดปัญหาความหน่วงและทำให้การแจมระยะไกลรู้สึกเหมือนอยู่ในห้องเดียวกัน
                    </p>
                </div>
                
                <!-- Feature 2: Multi-User Collaboration -->
                <div class="visual-explainer-card text-center bg-[#2a2a2a] p-6 rounded-xl card-hover flex flex-col">
                    <img src="/images/collab02.png" alt="การทำงานร่วมกันหลายผู้ใช้" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#f8f9fa] mb-3">การทำงานร่วมกันหลายผู้ใช้</h3>
                    <p class="text-gray-300 text-sm flex-grow">
                        เชิญเพื่อนร่วมวงหรือผู้ทำงานร่วมกันใหม่ๆ เข้ามาในโปรเจกต์ของคุณ
                        ทำงานร่วมกันแบบเรียลไทม์ แบ่งปันความคิด และสร้างสรรค์ผลงานเพลงได้อย่างราบรื่น
                    </p>
                </div>
                
                <!-- Feature 3: Intuitive Interface -->
                <div class="visual-explainer-card text-center bg-[#2a2a2a] p-6 rounded-xl card-hover flex flex-col">
                    <img src="/images/collab01.png" alt="อินเตอร์เฟซที่ใช้งานง่าย" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#f8f9fa] mb-3">อินเตอร์เฟซที่ใช้งานง่าย</h3>
                    <p class="text-gray-300 text-sm flex-grow">
                        ออกแบบมาสำหรับนักดนตรี ไม่ใช่ผู้เชี่ยวชาญด้านเทคโนโลยี อินเทอร์เฟซที่เป็นมิตรต่อผู้ใช้ของเรา
                        ทำให้การสร้างสรรค์และการทำงานร่วมกันเป็นเรื่องง่ายและสนุกสนาน
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="section-padding bg-black">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12 text-white">วิธีการ<span class="text-[#fff600]">ทำงาน</span></h2>
            <div class="max-w-5xl mx-auto space-y-8">
                
                <!-- Step 1 -->
                <div class="how-it-works-step flex flex-col md:flex-row items-center bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800">
                    <div class="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                        <img src="/images/collab06.png" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div class="w-full md:w-3/5 text-left">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">01</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">บันทึกแทร็กของคุณ</h3>
                        </div>
                        <p class="text-gray-300 pl-14">
                            เริ่มต้นด้วยการบันทึกแทร็กเสียงหรือวิดีโอของคุณโดยตรงภายใน Fuzik
                            หรืออัปโหลดไฟล์ที่มีอยู่ ระบบอัจฉริยะของเราจะเตรียมไฟล์ให้พร้อมสำหรับการทำงานร่วมกัน
                        </p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="how-it-works-step flex flex-col md:flex-row items-center bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800">
                    <div class="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                        <img src="/images/collab02.png" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div class="w-full md:w-3/5 text-left">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">02</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">เชิญผู้ทำงานร่วมกัน</h3>
                        </div>
                        <p class="text-gray-300 pl-14">
                            แชร์ลิงก์โปรเจกต์ที่ไม่ซ้ำใครกับเพื่อนร่วมวงหรือเพื่อนใหม่ของคุณ
                            พวกเขาสามารถเข้าร่วมได้ทันทีโดยไม่ต้องตั้งค่าที่ซับซ้อน
                        </p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="how-it-works-step flex flex-col md:flex-row items-center bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800">
                    <div class="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                        <img src="/images/collab03.png" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div class="w-full md:w-3/5 text-left">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">03</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">แจมและสร้างสรรค์</h3>
                        </div>
                        <p class="text-gray-300 pl-14">
                            ทุกคนบันทึกส่วนของตนเอง ซึ่งซิงโครไนซ์กับแทร็กต้นฉบับได้อย่างสมบูรณ์แบบ
                            ชมผลงานชิ้นเอกที่ทำงานร่วมกันของคุณมีชีวิตขึ้นมาแบบเรียลไทม์
                        </p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="how-it-works-step flex flex-col md:flex-row items-center bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800">
                    <div class="w-full md:w-2/5 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                        <div class="w-full h-48 bg-[#2a2a2a] rounded-lg border border-gray-700 shadow-md flex items-center justify-center group hover:border-[#fff600] transition duration-300">
                            <svg class="w-20 h-20 text-[#fff600] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="w-full md:w-3/5 text-left">
                        <div class="flex items-center mb-3">
                            <span class="text-[#fff600] text-4xl font-black mr-4">04</span>
                            <h3 class="text-2xl font-bold text-[#f8f9fa]">ส่งออกและแบ่งปัน</h3>
                        </div>
                        <p class="text-gray-300 pl-14">
                            เมื่อการแจมของคุณเสร็จสมบูรณ์แล้ว คุณสามารถส่งออกวิดีโอและเสียงที่ซิงโครไนซ์ได้อย่างง่ายดาย
                            แบ่งปันกับคนทั้งโลกหรือเก็บไว้เป็นส่วนตัว – มันคือดนตรีของคุณ!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
       
    <GlobalJamBanner locale="th" />

    </div>

    <!-- footer -->
    <WebsiteFooter locale="th" home-href="/index" :optional-cookies="false" />
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "front-th"
    });

    useSeoMeta({
        title: 'Fuzik Collaborate - ฟีเจอร์และวิธีการทำงาน',
        ogTitle: 'Fuzik Collaborate - ฟีเจอร์และวิธีการทำงาน',
        description: 'สำรวจฟีเจอร์อันทรงพลังของ Fuzik Collaborate รวมถึงการซิงค์วิดีโอที่แม่นยำ การทำงานร่วมกันหลายผู้ใช้ และคำแนะนำทีละขั้นตอนเกี่ยวกับวิธีการทำงาน',
        ogDescription: 'สำรวจฟีเจอร์อันทรงพลังของ Fuzik Collaborate รวมถึงการซิงค์วิดีโอที่แม่นยำ การทำงานร่วมกันหลายผู้ใช้ และคำแนะนำทีละขั้นตอนเกี่ยวกับวิธีการทำงาน',
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
</style>
