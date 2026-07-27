<template>
    <div class="bg-[#111111] text-[#e2e8f0] text-base/6 scroll-smooth">
    
    <!-- Hero Section -->
    <section class="hero-gradient py-20 md:py-32">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-6xl md:text-7xl font-black mb-6 text-[#f8f9fa]">
                เรื่องราวของเรา: <span class="text-[#fff600] text-glow-subtle">เส้นทางของ Fuzik</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                จากความหลงใหลในดนตรี สู่แพลตฟอร์มการทำงานร่วมกันระดับโลก
            </p>
        </div>
    </section>

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


// Replace these IDs with your actual YouTube video IDs
const videoIds = ref([
        'KzYq0T5ur0s',
        'c1VWzb_o_-M',
        'DrILeGU-BEw',
        'WsnFdLQsnsM',
        'kbvhGo8kfFY',
        'tXvd3IUJ6oc',
        'jomFkAWR6zw'
])

const currentIndex = ref(0)

const nextVideo = () => {
  if (currentIndex.value < videoIds.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Loop back to start
  }
}

const prevVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = videoIds.value.length - 1 // Loop to end
  }
}

</script>

<style scoped>
    .section-padding {
        padding: 100px 0;
    }
        
    /* Custom button styles for consistency */
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

    .pulse-yellow {
        animation: pulse-yellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5);
    }

    @keyframes pulse-yellow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255, 246, 0, 0.5); }
        50% { box-shadow: 0 0 0 25px rgba(255, 246, 0, 0); }
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

    /* Specific styles for the "Launch Fuzik App Now!" button in the final CTA */
    .btn-final-cta {
        background-color: #111111 !important;
        color: #fff600 !important;
        font-weight: 800;
        text-shadow: 0 0 3px rgba(255, 246, 0, 0.2);
        border: 2px solid #fff600 !important;
    }

    .btn-final-cta:hover {
        background-color: #fff600 !important;
        color: #111111!important;
        text-shadow: none !important;
        transform: translateY(-3px) scale(1.03);
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




</style>