<template>
    <div class="bg-[#111111] text-[#e2e8f0] text-base/6 scroll-smooth">
    
    <!-- Hero Section -->
    <PageHero :gradient="false"
        description="จากความหลงใหลในดนตรี สู่แพลตฟอร์มการทำงานร่วมกันระดับโลก"
    >
        เรื่องราวของเรา: <span class="text-[#fff600] text-glow-subtle">เส้นทางของ Fuzik</span>
    </PageHero>

    <!-- About Us Content Section -->
    <section class="section-padding bg-[#1a1a1a]">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">เราคือใครและอะไรคือแรงผลักดันของเรา</h2>
                <p class="text-lg text-gray-300 mb-6">
                    Fuzik Collaborate ถือกำเนิดขึ้นจากแนวคิดง่ายๆ: ดนตรีจะดีที่สุดเมื่อได้แบ่งปัน ผู้ก่อตั้งทั้งสามของเรา ซึ่งเป็นนักดนตรีผู้หลงใหล ได้สัมผัสกับความท้าทายของการทำงานร่วมกันระยะไกลด้วยตัวเอง ไม่ว่าจะเป็นปัญหาความหน่วง ซอฟต์แวร์ที่ซับซ้อน และความยากลำบากในการค้นหานักดนตรีที่มีแนวคิดเดียวกันในระยะไกล พวกเขาจินตนาการถึงแพลตฟอร์มที่จะขจัดอุปสรรคเหล่านี้ ทำให้การแจมดนตรีระดับโลกเป็นเรื่องง่ายและใช้งานง่ายเหมือนกับการเล่นในห้องเดียวกัน
                </p>
                <p class="text-lg text-gray-300 mb-6">
                    พันธกิจของเราคือการเสริมสร้างศักยภาพให้นักดนตรีทุกคน ตั้งแต่มือสมัครเล่นไปจนถึงมืออาชีพที่มีประสบการณ์ เพื่อเชื่อมต่อ สร้างสรรค์ และแบ่งปันผลงานศิลปะของพวกเขาโดยไม่มีข้อจำกัดทางภูมิศาสตร์หรือทางเทคนิค เราเชื่อในการส่งเสริมคอมมูนิตี้ที่มีชีวิตชีวาและให้การสนับสนุน ซึ่งความคิดสร้างสรรค์ไม่มีขอบเขต
                </p>
                <p class="text-lg text-gray-300">
                    เราพัฒนานวัตกรรมอย่างต่อเนื่อง โดยได้รับแรงผลักดันจากข้อเสนอแนะของคอมมูนิตี้ที่กำลังเติบโตของเรา ความมุ่งมั่นของเราคือการมอบประสบการณ์การทำงานร่วมกันทางดนตรีออนไลน์ที่ราบรื่นและมีคุณภาพสูงสุดเท่าที่จะเป็นไปได้
                </p>
            </div>
        </div>
    </section>

    <!-- Our Team Section (Thai Version) -->
    <section class="section-padding bg-black">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-12 text-white">พบกับ <span class="text-[#fff600]">ทีมงาน</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-stretch">
                
                <!-- Team Member 1 -->
                <div class="bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover flex flex-col h-full">
                    <img src="/images/people/win.jpeg" alt="ผู้ก่อตั้ง 1" class="rounded-full w-32 h-32 mx-auto mb-6 object-cover border-4 border-[#fff600]">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">ภาวิน</h3>
                    <p class="text-gray-300 text-lg mb-2">CEO และผู้ร่วมก่อตั้ง</p>
                    <p class="text-gray-400 text-sm flex-grow">ผู้นำที่มีวิสัยทัศน์และนักดนตรีผู้หลงใหล ทำให้มั่นใจว่าแพลตฟอร์มของเราจะเสริมสร้างศักยภาพศิลปินทั่วโลก ความทุ่มเทในการสร้างสรรค์นวัตกรรมของเขาเป็นตัวกำหนดพันธกิจของเราในการเชื่อมโยงนักดนตรีทั่วโลก</p>
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
                    <img src="/images/people/Ing.jpeg" alt="ผู้ก่อตั้ง 2" class="rounded-full w-32 h-32 mx-auto mb-6 object-cover border-4 border-[#fff600]">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">บุษราคัม</h3>
                    <p class="text-gray-300 text-lg mb-2">CMO และผู้ร่วมก่อตั้ง</p>
                    <p class="text-gray-400 text-sm flex-grow">ด้วยความเข้าใจอย่างลึกซึ้งในคอมมูนิตี้ดนตรี เธอทุ่มเทเพื่อส่งเสริมสภาพแวดล้อมที่สดใสและให้การสนับสนุน ซึ่งนักดนตรีสามารถเติบโตและทำงานร่วมกันได้อย่างอิสระ</p>
                    <!-- LinkedIn Icon -->
                    <div class="mt-6">
                        <a href="https://www.linkedin.com/in/butsarakham-klowuthiwat-2419821a1" target="_blank" class="inline-block text-gray-500 hover:text-[#fff600] transition">
                            <svg class="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <!-- Team Member 3-->
                <div class="bg-[#2a2a2a] p-8 rounded-xl shadow-lg card-hover flex flex-col h-full">
                    <img src="/images/people/Ohm.jpg" alt="ผู้ก่อตั้ง 3" class="rounded-full w-32 h-32 mx-auto mb-6 object-cover border-4 border-[#fff600]">
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">ธีรชาติ</h3>
                    <p class="text-gray-300 text-lg mb-2">CTO และผู้ร่วมก่อตั้ง</p>
                    <p class="text-gray-400 text-sm flex-grow">สถาปนิกด้านเทคนิคเบื้องหลังประสบการณ์ที่ราบรื่นของ Fuzik Collaborate ความเชี่ยวชาญของเขาในการซิงโครไนซ์เสียงและวิดีโอทำให้มั่นใจว่าแพลตฟอร์มของเรามอบการทำงานร่วมกันคุณภาพสูง ไร้ความหน่วงสำหรับผู้ใช้ทุกคน</p>
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
            <h2 class="text-4xl font-bold mb-12">ค่านิยม <span class="text-[#fff600] ">หลักของเรา</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                <div class="text-left bg-[#2a2a2a]  p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600]  mb-3">คอมมูนิตี้ต้องมาก่อน</h3>
                    <p class="text-gray-300">เราเชื่อในการส่งเสริมคอมมูนิตี้ระดับโลกที่ให้การสนับสนุนและเปิดกว้าง ซึ่งนักดนตรีทุกคนยินดีที่จะแบ่งปัน เรียนรู้ และเติบโต</p>
                </div>
                <div class="text-left bg-[#2a2a2a]  p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600]  mb-3">นวัตกรรมและความเป็นเลิศ</h3>
                    <p class="text-gray-300">เรามุ่งมั่นที่จะสร้างสรรค์นวัตกรรมอย่างต่อเนื่อง ผลักดันขีดจำกัดของการทำงานร่วมกันทางดนตรีออนไลน์เพื่อมอบประสบการณ์ที่ดีที่สุดเท่าที่จะเป็นไปได้</p>
                </div>
                <div class="text-left bg-[#2a2a2a]  p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600]  mb-3">การเข้าถึง</h3>
                    <p class="text-gray-300">ดนตรีควรเข้าถึงได้สำหรับทุกคน เรามุ่งมั่นที่จะทำให้ Fuzik Collaborate ใช้งานง่าย ไม่ว่าจะมีทักษะทางเทคนิคหรือสถานที่ใดก็ตาม</p>
                </div>
                <div class="text-left bg-[#2a2a2a]  p-8 rounded-xl shadow-lg card-hover">
                    <h3 class="text-2xl font-bold text-[#fff600]  mb-3">อิสระในการสร้างสรรค์</h3>
                    <p class="text-gray-300">เราสนับสนุนการแสดงออกทางศิลปะและจัดหาแพลตฟอร์มที่นักดนตรีสามารถสำรวจความคิดสร้างสรรค์ของตนเองได้โดยไม่มีข้อจำกัดที่ไม่จำเป็น</p>
                </div>
            </div>
        </div>
    </section>

    <GlobalJamBanner locale="th" />
    </div>

    <!-- footer -->
    <WebsiteFooter locale="th" home-href="/index" :social-circles="false" :optional-cookies="false" />
</template>

<script setup lang="ts">

useHead({
  title: 'เกี่ยวกับ Fuzik Collaborate - เรื่องราวและพันธกิจของเรา',
  meta: [
    { name: 'description', content: 'ค้นพบเรื่องราว พันธกิจ และทีมงานเบื้องหลัง Fuzik Collaborate แพลตฟอร์มที่เชื่อมโยงนักดนตรีทั่วโลก' },
  ],
})

definePageMeta({
  layout: "front-th"
});

useSeoMeta({
        title: 'Fuzik Collaborate - การรวมวงดนตรีระดับโลกของคุณเริ่มต้นขึ้นแล้ว!',
        ogTitle: 'Fuzik Collaborate - การรวมวงดนตรีระดับโลกของคุณเริ่มต้นขึ้นแล้ว!',
        description: 'เชื่อมต่อกับนักดนตรีทั่วโลก สร้างวิดีโอแจมที่ซิงค์กัน และยกระดับดนตรีของคุณไปพร้อมกับ Fuzik Collaborate การทำงานร่วมกันทางดนตรีออนไลน์ที่ราบรื่นสำหรับทุกระดับทักษะ',
        ogDescription: 'เชื่อมต่อกับนักดนตรีทั่วโลก สร้างวิดีโอแจมที่ซิงค์กัน และยกระดับดนตรีของคุณไปพร้อมกับ Fuzik Collaborate การทำงานร่วมกันทางดนตรีออนไลน์ที่ราบรื่นสำหรับทุกระดับทักษะ',
        ogImage: 'https://fuzikapp.com/images/logo/FuzikLogo.png',
    });


</script>

<style scoped>
.section-padding {
        padding: 100px 0;
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