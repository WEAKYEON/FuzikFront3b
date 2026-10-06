<template>
    <div class="bg-[#111111] text-[#e2e8f0] text-base/6 scroll-smooth">
        <section id="home" class="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-4xl mx-auto">
                <h1 class="text-6xl md:text-8xl font-black mb-6 animate-float-headline">
                    <span class="text-[#fff600] text-glow-subtle">FUZIK <br />Collaborate:</span><br>
                    <span class="text-4xl md:text-5xl font-light">การรวมวงดนตรีของคุณเริ่มต้นขึ้นแล้ว!</span>
                </h1>
                
                <p class="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                    เชื่อมต่อกับนักดนตรีทั่วโลก สร้างวิดีโอแจมที่ซิงค์กัน และยกระดับดนตรีของคุณไปพร้อมกัน การทำงานร่วมกันที่ราบรื่น ไม่ว่าจะอยู่ห่างไกลแค่ไหน
                </p>
                
                <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a href="/webapp" class="btn-primary pulse-yellow">
                        <div class="flex items-center gap-x-2">
                        <span><img src="/images/icons/play_circle_black.png" class="w-6 h-6" ></span><span>เริ่มการแจมระดับโลกของคุณ</span>
                        </div>
                    </a>
                    <a href="/feature" class="btn-secondary">
                        <div class="flex items-center gap-x-2">
                        <span><img src="/images/icons/help_yellow.png" class="w-6 h-6" ></span><span>ดูวิธีการทำงาน</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>


    </section>

    <section id="what-we-do" class="section-padding bg-[#1a1a1a]">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-12">ปลดปล่อย<span class="text-[#fff600]">ศักยภาพทางดนตรี</span>ของคุณ</h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
                Fuzik Collaborate ได้รับการออกแบบมาเพื่อทำลายกำแพงทางดนตรีและขยายการเดินทางสร้างสรรค์ของคุณ ค้นพบว่าฟังก์ชันหลักของเราช่วยให้คุณเชื่อมต่อ สร้างสรรค์ และแบ่งปันได้อย่างไรอย่างที่ไม่เคยมีมาก่อน
            </p>
            
            <div class="grid md:grid-cols-3 gap-8 items-stretch">
                <!-- Card 1: เชื่อมต่อทั่วโลก -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab02.png" alt="เชื่อมต่อทั่วโลก" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">เชื่อมต่อทั่วโลก</h3>
                    <p class="text-gray-400 flex-grow">ค้นหาเพื่อนร่วมแจมทั่วโลก เชื่อมต่อกับคอมมูนิตี้ที่หลากหลาย ค้นพบพรสวรรค์ใหม่ๆ และขยายเครือข่ายดนตรีของคุณได้อย่างง่ายดาย</p>
                </div>
                
                <!-- Card 2: สร้างสรรค์ได้อย่างราบรื่น -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab03.png" alt="สร้างสรรค์ได้อย่างราบรื่น" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-bold text-[#fff600] mb-2">สร้างสรรค์ได้อย่างราบรื่น</h3>
                    <p class="text-gray-400 flex-grow">ซิงโครไนซ์การแสดงวิดีโอได้อย่างแม่นยำ เทคโนโลยีของเราทำให้การทำงานร่วมกันแบบหลายแทร็กเป็นเรื่องง่าย เหมือนมีเวทมนตร์ โดยไม่ต้องแก้ไขที่ซับซ้อน</p>
                </div>
                
                <!-- Card 3: แสดงออกอย่างอิสระ -->
                <div class="visual-explainer-card flex flex-col items-center bg-[#2a2a2a] p-6 rounded-xl card-hover h-full">
                    <img src="/images/collab05.png" alt="แสดงออกอย่างอิสระ" class="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-600 hover:border-[#fff600] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                    <h3 class="text-2xl font-semibold text-[#fff600] mb-2">แสดงออกอย่างอิสระ</h3>
                    <p class="text-gray-400 flex-grow">แจมเพลงที่แต่งเองหรือเพลงสาธารณะได้อย่างไร้ขีดจำกัด ปลดปล่อยความคิดของคุณและทำงานร่วมกันในโปรเจกต์ที่ไม่ซ้ำใคร และเป็นมิตรกับลิขสิทธิ์</p>
                </div>
            </div>
        </div>
    </section>

    
    
    <section id="features-highlight" class="section-padding bg-black">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <VideoCarousel locale="th" />

                <div>
                    <h2 class="text-5xl font-bold mb-6">ปลดปล่อยความคิดสร้างสรรค์ของคุณด้วย <span class="text-[#fff600]">ฟีเจอร์อันทรงพลัง</span></h2>
                    <ul class="space-y-6 text-xl text-gray-300">
                        <li class="flex items-start">
                            <img src="/images/icons/featured_video_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">การซิงค์วิดีโอหลายหน้าจอ:</span> สร้างการแสดงวิดีโอที่ซิงโครไนซ์กันได้สูงสุด 4 หน้าจอ โดยที่เสียงและวิดีโอรวมเข้าด้วยกันอย่างราบรื่น
                            </div>
                        </li>
                        <li class="flex items-start">
                            <img src="/images/icons/crowdsource_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">คอมมูนิตี้ระดับโลก:</span> ค้นพบและทำงานร่วมกับนักดนตรีจากหลากหลายแนวเพลงและประเทศ
                            </div>
                        </li>
                        <li class="flex items-start">
                            <img src="/images/icons/view_timeline_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">ไทม์ไลน์วิดีโอที่ใช้งานง่าย:</span> อินเทอร์เฟซที่เรียบง่ายสำหรับการซิงค์ไทม์ไลน์วิดีโอ ทำให้การทำงานร่วมกันเป็นเรื่องง่าย
                            </div>
                        </li>
                        <li class="flex items-start">
                            <img src="/images/icons/cloud_upload_256.png" class="w-28 px-4"  />
                            <div>
                                <span class="font-semibold text-white">ที่เก็บข้อมูลบนคลาวด์:</span> โปรเจกต์ทั้งหมดของคุณถูกจัดเก็บอย่างปลอดภัยและเข้าถึงได้ทุกที่ทุกเวลา
                            </div>
                        </li>
                    </ul>
                    <div class="mt-10">
                        <a href="/feature-th" class="btn-primary"> สำรวจฟีเจอร์ทั้งหมด <i class="fas fa-arrow-right ml-3"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" class="section-padding bg-fuzik-dark">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-12">สิ่งที่  <span class="text-[#fff600]">ผู้ใช้ของเราพูดถึง</span></h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
                ฟังจากคอมมูนิตี้ Fuzik Collaborate ว่าแพลตฟอร์มของเราได้เปลี่ยนเส้นทางดนตรีของพวกเขาไปอย่างไร
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div class="bg-[#2a2a2a] p-8 rounded-xl card-hover flex flex-col justify-between">
                    <p class="text-lg italic text-gray-200 mb-6">
                        "Fuzik เปลี่ยนเกมไปเลย! ในที่สุดฉันก็เจอคนมาแจมเพลงโปรดด้วยกัน การซิงค์วิดีโอแม่นยำมาก ทำให้รู้สึกเหมือนอยู่ในห้องเดียวกัน สนุกสุดๆ!"
                    </p>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-[#fff600]">- ซาร่าห์ เอ็ม.</p>
                        <p class="text-sm text-gray-400">นักกีตาร์, สหรัฐอเมริกา</p>
                    </div>
                </div>
                <div class="bg-[#2a2a2a] p-8 rounded-xl card-hover flex flex-col justify-between">
                    <p class="text-lg italic text-gray-200 mb-6">
                        "ในฐานะมืออาชีพ Fuzik ช่วยให้ฉันยังคงหลงใหลในดนตรีต่อไปได้ ฉันสามารถทำงานร่วมกับนักดนตรีมากความสามารถทั่วโลกตามตารางเวลาของฉันเอง ใช้งานง่ายอย่างเหลือเชื่อ"
                    </p>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-[#fff600]">- เดวิด แอล.</p>
                        <p class="text-sm text-gray-400">มือกลอง, สหราชอาณาจักร</p>
                    </div>
                </div>
                <div class="bg-[#2a2a2a] p-8 rounded-xl card-hover flex flex-col justify-between">
                    <p class="text-lg italic text-gray-200 mb-6">
                        "ฉันอยากมีวงดนตรีมาตลอด แต่การหาสมาชิกในท้องถิ่นเป็นเรื่องยาก Fuzik ทำให้ฉันได้เชื่อมต่อกับศิลปินที่ยอดเยี่ยม และตอนนี้เรากำลังสร้างสรรค์เพลงต้นฉบับด้วยกัน ขอแนะนำอย่างแรง!"
                    </p>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-[#fff600]">- เอมิลี่ อาร์.</p>
                        <p class="text-sm text-gray-400">นักร้องนำ, ออสเตรเลีย</p>
                        </div>
                </div>
            </div>
        </div>
    </section>

    
    <section id="built-by-musicians" class="section-padding gradient-bg">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-6">สร้างโดย <span class="text-[#fff600]">นักดนตรี</span>เพื่อนักดนตรี</h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                เรื่องราวของ Fuzik เริ่มต้นจากผู้ก่อตั้งสามคนที่เข้าใจถึงความสุขของการเล่นดนตรีร่วมกันและความท้าทายในการค้นหากลุ่มนักดนตรีของคุณ เราสร้าง Fuzik Collaborate เพื่อให้การแจมดนตรีเข้าถึงได้ง่ายและสนุกสำหรับทุกที่ทุกคน
            </p>
            <a href="/aboutus" class="btn-secondary"> เรียนรู้เพิ่มเติมเกี่ยวกับเรา <i class="fas fa-arrow-right ml-3"></i>
            </a>
        </div>
    </section>

    <GlobalJamBanner locale="th" />
    </div>

    <!-- footer -->
    <WebsiteFooter locale="th" home-href="/index" :social-circles="false" :optional-cookies="false" />
</template>

<script setup lang="ts">

useHead({
  title: 'Fuzik Collaborate - การรวมวงดนตรีระดับโลกของคุณเริ่มต้นขึ้นแล้ว!',
  meta: [
    { name: 'description', content: 'Connect with musicians worldwide on Fuzik Collaborate! Our platform makes online jamming easy with synchronized video, letting you create music together from anywhere. Start your global jam session today.' },
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