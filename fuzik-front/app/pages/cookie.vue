<template>
    <div>
        <!-- Hero Section for Cookie Policy -->
        <PageHero legal id="hero-cookie" container-class="container mx-auto px-6 relative z-10 text-center" title-class="text-6xl md:text-7xl text-white mb-4 text-glow-subtle"
        description="Understanding how we use cookies to improve your experience."
    >
        Our <span class="text-[#fff600]">Cookie Policy</span>
    </PageHero>

        <!-- Cookie Policy Content Section -->
        <section id="cookie-content" class="section-padding bg-[#1a1a1a] ">
            <div class="container mx-auto px-6 max-w-4xl text-white">
                <div class="policy-content">
                    <p class="text-lg">Last updated: 2025-12-26</p>
                    
                    <p>This Cookie Policy explains how Fuzik Collaborate ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our marketing website at <a href="https://www.fuzik.co" class="text-fuzik-yellow hover:underline">https://www.fuzik.co</a> ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

                    <h3>What are cookies?</h3>
                    <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

                    <h3>Why do we use cookies?</h3>
                    <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.</p>

                    <h3>Types of cookies we use</h3>
                    <ul>
                        <li><strong>Essential Website Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
                        <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you. We primarily use Google Analytics for this purpose.</li>
                        <li><strong>Marketing Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.</li>
                    </ul>

                    <h3>How can you control cookies?</h3>
                    <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by using our Cookie Consent manager on the Website. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>

                    <h3>Changes to This Cookie Policy</h3>
                    <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>

                    <h3>Contact Us</h3>
                    <p>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:admin@fuzikapp.com" class="text-[#fff600] hover:text-[#fff600] hover:underline ">admin@fuzikapp.com</a>.</p>
                </div>
            </div>
        </section>

        <GlobalJamBanner />

    </div>
    <!-- footer -->
    <WebsiteFooter :contained="false" :columns="legalFooterColumns" />
</template>

<script setup lang="ts">
import { legalFooterColumns } from '~/components/website_components/legacyFooterLinks'

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

    /* Policy content styling */
        .policy-content {
            background-color: var(--fuzik-gray);
            padding: 3rem;
            border-radius: 1rem;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 246, 0, 0.05);
        }

        .policy-content h2, .policy-content h3 {
            color: var(--fuzik-yellow);
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .policy-content h2 {
            font-size: 2.5rem;
        }

        .policy-content h3 {
            font-size: 1.75rem;
        }

        .policy-content p {
            margin-bottom: 1.5rem;
            line-height: 1.7;
            color: var(--text-default-gray);
        }

        .policy-content ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
            color: var(--text-default-gray);
        }

        .policy-content ol {
            list-style-type: decimal;
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
            color: var(--text-default-gray);
        }

        .policy-content li {
            margin-bottom: 0.75rem;
        }

        .policy-content a {
            color: var(--fuzik-yellow);
            text-decoration: underline;
            transition: color 0.2s ease;
        }

        .policy-content a:hover {
            color: #ffe000;
        }
</style>