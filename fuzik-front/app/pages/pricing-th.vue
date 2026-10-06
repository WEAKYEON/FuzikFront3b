<template>
    <div>

    <!-- Hero Section -->
    <PageHero title-class="text-6xl md:text-7xl font-black text-white mb-6 text-[#f8f9fa]"
        description="ทำความเข้าใจวิธีการทำงานของโมเดล Freemium ของ Fuzik Collaborate"
    >
        ราคา & <span class="text-[#fff600] text-glow-subtle">โมเดลเหรียญ</span>
    </PageHero>

    <!-- Pricing Section -->
    <section class="section-padding bg-[#1a1a1a]">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <!-- Free Tier Card -->
                <div class="bg-[#2a2a2a] rounded-xl shadow-lg p-8 card-hover flex flex-col justify-between">
                    <div>
                        <h3 class="text-3xl font-bold mb-4 text-[#f8f9fa] ">แพ็กเกจฟรี</h3>
                        <p class="text-gray-300 text-lg mb-6">
                            เหมาะสำหรับนักดนตรีทั่วไปและการทำงานร่วมกันแบบส่วนตัว
                        </p>
                        <ul class="text-gray-300 space-y-3 mb-8 text-left">
                            <li class="flex items-center"><span><img src="/images/icons/check_circle_white_128.png" class="w-10 p-2" alt="check" /></span>สูงสุด 3 โปรเจกต์ส่วนตัว</li>
                            <li class="flex items-center"><span><img src="/images/icons/check_circle_white_128.png" class="w-10 p-2" alt="check" /></span>สูงสุด 4 ผู้ร่วมงานต่อโปรเจกต์</li>
                            <li class="flex items-center"><span><img src="/images/icons/check_circle_white_128.png" class="w-10 p-2" alt="check" /></span>แชร์โปรเจกต์สาธารณะ</li>
                            <li class="flex items-center"><span><img src="/images/icons/cancel_white_128.png" class="w-10 p-2" alt="check" /></span>ไม่รองรับการดาวน์โหลดคุณภาพสูง</li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <p class="text-5xl font-black text-[#fff600] mb-4">ฟรี</p>
                        <a href="https://fuzikapp.com/login" target="_blank" class="btn-primary w-full">เริ่มแจมฟรี!</a>
                    </div>
                </div>

                <!-- Coin Model / Premium Features Card -->
                <div class="bg-fuzik-gray rounded-xl shadow-lg p-8 card-hover flex flex-col justify-between border-2 border-[#fff600]">
                    <div>
                        <h3 class="text-3xl font-bold mb-4 text-[#fff600]">โมเดลเหรียญ</h3>
                        <p class="text-gray-300 text-lg mb-6">
                            ปลดล็อกฟีเจอร์ขั้นสูงและแชร์เพลงของคุณกับคนทั่วโลก
                        </p>
                        <ul class="text-gray-300 space-y-3 mb-8 text-left">
                            <li class="flex items-center"><span><img src="/images/icons/check_circle_white_128.png" class="w-10 p-2" alt="check" /></span>ฟีเจอร์ทั้งหมดของแพ็กเกจฟรี</li>
                            <li class="flex items-center"><span><img src="/images/icons/toll_128.png" class="w-10 p-2" alt="check" /></span>รับหรือซื้อเหรียญ</li>
                            <li class="flex items-center"><span><img src="/images/icons/file_save_128.png" class="w-10 p-2" alt="check" /></span>ดาวน์โหลดวิดีโอและเสียงคุณภาพสูง</li>
                            <li class="flex items-center"><span><img src="/images/icons/account_balance_wallet_128.png" class="w-10 p-2" alt="check" /></span>ใช้เท่าไหร่จ่ายเท่านั้น</li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <p class="text-5xl font-black text-[#fff600] mb-4">เหรียญ</p>
                        <a href="https://www.fuzikapp.com" target="_blank" class="btn-primary w-full">เรียนรู้เกี่ยวกับเหรียญ</a>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16 max-w-7xl mx-auto">
                <h2 class="text-4xl font-bold mb-6 text-[#f8f9fa] ">วิธีการทำงานของโมเดลเหรียญ</h2>
                <p class="text-lg text-gray-300 mb-8">
                    Fuzik Collaborate ใช้ระบบเหรียญที่ไม่เหมือนใครสำหรับฟีเจอร์พรีเมียม คุณสามารถรับเหรียญได้จากการเข้าร่วมกิจกรรมในคอมมูนิตี้ ทำภารกิจ หรือซื้อโดยตรงในแอป
                </p>

                <h3 class="text-3xl font-bold mb-4 text-[#f8f9fa]">การใช้เหรียญและค่าธรรมเนียม</h3>
                <div class="overflow-x-auto rounded-lg shadow-md">
                    <table class="min-w-full w-full bg-[#1a1a1a] rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-[#fff600] text-black uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Action</th>
                                <th class="py-3 px-6 text-center">Quality / Benefit</th>
                                <th class="py-3 px-6 text-center">Coins</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-300 text-sm font-light">
                            <!-- Solo Uploads - NOW FREE -->
                            <tr class="border-b border-gray-700 hover:bg-[#2a2a2a] category-divider">
                                <td class="py-3 px-6 text-left flex items-center"><span><img src="/images/icons/upload_file.png" class="w-10 p-2" alt="check" /></span>Upload Solo Video</td>
                                <td class="py-3 px-6 text-center">All Qualities (&lt;300MB)</td>
                                <td class="py-3 px-6 text-center font-bold text-fuzik-yellow">FREE</td>
                            </tr>
                            <!-- Post Collaboration -->
                            <tr class="border-b border-gray-700 hover:bg-[#2a2a2a]">
                                <td class="py-3 px-6 text-left flex items-center"><span><img src="/images/icons/share_128.png" class="w-10 p-2" alt="check" /></span>Post on Fuzik (Publicly)</td>
                                <td class="py-3 px-6 text-center">Standard (720p)</td>
                                <td class="py-3 px-6 text-center font-bold text-[#fff600]">20</td>
                            </tr>
                            <tr class="border-b border-gray-700 hover:bg-[#2a2a2a] category-divider">
                                <td class="py-3 px-6 text-left flex items-center"><span><img src="/images/icons/share_128.png" class="w-10 p-2" alt="check" /></span>Post on Fuzik (Publicly)</td>
                                <td class="py-3 px-6 text-center">High (1080p)</td>
                                <td class="py-3 px-6 text-center font-bold text-[#fff600]">30</td>
                            </tr>
                            <tr class="border-b border-gray-700 hover:bg-[#2a2a2a]">
                                <td class="py-3 px-6 text-left flex items-center"><span><img src="/images/icons/file_save_128.png" class="w-10 p-2" alt="check" /></span>Just Download</td>
                                <td class="py-3 px-6 text-center">Standard (720p)</td>
                                <td class="py-3 px-6 text-center font-bold text-[#fff600]">20</td>
                            </tr>
                            <tr class="border-b border-gray-700 hover:bg-[#2a2a2a] category-divider">
                                <td class="py-3 px-6 text-left flex items-center"><span><img src="/images/icons/file_save_128.png" class="w-10 p-2" alt="check" /></span>Just Download</td>
                                <td class="py-3 px-6 text-center">High (1080p)</td>
                                <td class="py-3 px-6 text-center font-bold text-[#fff600]">30</td>
                            </tr>
                            <tr class="border-b border-gray-700 hover:bg-[#2a2a2a]">
                                <td class="py-3 px-6 text-left flex items-center"><span><img src="/images/icons/language_white.png" class="w-10 p-2" alt="check" /></span>Post & Download (Bundle)</td>
                                <td class="py-3 px-6 text-center">Standard (720p)</td>
                                <td class="py-3 px-6 text-center font-bold text-[#fff600]">35</td>
                            </tr>
                            <tr class="hover:bg-fuzik-gray category-divider">
                                <td class="py-3 px-6 text-left flex items-center"><span><img src="/images/icons/language_white.png" class="w-10 p-2" alt="check" /></span>Post & Download (Bundle)</td>
                                <td class="py-3 px-6 text-center">High (1080p)</td>
                                <td class="py-3 px-6 text-center font-bold text-[#fff600]">50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="text-3xl font-bold mb-4 text-[#f8f9fa]">การฟื้นฟูเหรียญอัตโนมัติ</h3>
                <p class="text-lg text-gray-300 mb-8">
                    เพื่อให้ทุกคนสามารถร่วมงานและสนุกสนานได้ บัญชีของคุณจะสร้างเหรียญขึ้นมาใหม่โดยอัตโนมัติ <strong>1 เหรียญทุกๆ 10 นาที</strong> ซึ่งหมายความว่าคุณจะมีเหรียญพร้อมสำหรับการสร้างสรรค์ผลงานอยู่เสมอ!
                </p>

                <h2 class="text-5xl font-bold mb-12 text-white"><span class="text-[#fff600]">ต้องการเหรียญเพิ่มใช่ไหม?</span></h2>
                <p class="text-xl text-gray-300 mb-12">
                    ซื้อแพ็กเกจเหรียญเพื่อเพิ่มยอดคงเหลือของคุณทันที และให้เสียงดนตรีไหลลื่นต่อไป!
                </p>

                <!-- Coin Packages -->
                <div class="w-full  mx-auto px-6"> <!-- Adjusted container width -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Small Pack (Adagio) -->
                        <div class="pricing-card">
                            <div class="pricing-card-header">แพ็ก Adagio</div>
                            <div class="pricing-card-coins">50 <span class="">Coins</span></div>
                            <div class="pricing-card-price">$2.99 <span class="text-gray-400 text-base font-normal">USD</span></div>
                            <ul>
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> Instant Top-Up</li>
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> Perfect for Getting Started</li>
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> Great Value</li>
                            </ul>
                            <a href="https://www.fuzikapp.com" target="_blank" class="btn-primary">ซื้อ<span class="text-[#fff600]">_</span>Adagio</a>
                        </div>

                        <!-- Medium Pack (Allegro) -->
                        <div class="pricing-card">
                            <div class="pricing-card-header">แพ็ก Allegro</div>
                            <div class="pricing-card-coins">90 + 10 <span class="">Coins</span></div> <!-- Updated to show bonus -->
                            <div class="pricing-card-price">$4.99 <span class="text-gray-400 text-base font-normal">USD</span></div>
                            <ul>                               
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> **10 Bonus Coins Included!**</li> <!-- Emphasize bonus -->
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> Enhanced Value for Regular Use</li>
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" />Ideal for Multiple Actions</li>
                            </ul>
                            <a href="https://www.fuzikapp.com" target="_blank" class="btn-primary">ซื้อ<span class="text-[#fff600]">_</span>Allegro</a>
                        </div>

                        <!-- Large Pack (Presto) -->
                        <div class="pricing-card">
                            <div class="pricing-card-header">แพ็ก Presto </div>
                            <div class="pricing-card-coins">170 + 30 <span class="">Coins</span></div> <!-- Updated to show bonus -->
                            <div class="pricing-card-price">$7.99 <span class="text-gray-400 text-base font-normal">USD</span></div>
                            <ul>
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> **30 Bonus Coins Included!**</li> <!-- Emphasize bonus -->
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> Best Value Per Coin</li>
                                <li><img src="/images/icons/check_circle_128.png" class="w-12 p-2" alt="check" /> Maximize Your Balance to 200</li>
                            </ul>
                            <a href="https://www.fuzikapp.com" target="_blank" class="btn-primary">ซื้อ<span class="text-[#fff600]">_</span>Presto</a>
                        </div>
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
        title: 'Fuzik Collaborate - ราคาและโมเดลเหรียญ',
        ogTitle: 'Fuzik Collaborate - ราคาและโมเดลเหรียญ',
        description: 'ทำความเข้าใจโมเดลเหรียญ Freemium ของ Fuzik Collaborate สร้างสรรค์ ทำงานร่วมกัน และจัดเก็บส่วนตัวได้ฟรี ชำระเงินสำหรับการแชร์สาธารณะและการดาวน์โหลด',
        ogDescription: 'ทำความเข้าใจโมเดลเหรียญ Freemium ของ Fuzik Collaborate สร้างสรรค์ ทำงานร่วมกัน และจัดเก็บส่วนตัวได้ฟรี ชำระเงินสำหรับการแชร์สาธารณะและการดาวน์โหลด',
        ogImage: 'https://fuzikapp.com/images/logo/FuzikLogo.png',
    });

</script>

<style scoped src="~/assets/css/buttons.css"></style>

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
</style>