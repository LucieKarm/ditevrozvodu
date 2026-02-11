// ========================================
// ditevrozvodu.cz - Interactive Features
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // ----------------------------------------
    // Article Fetching & Rendering Logic
    // ----------------------------------------
    // TODO: Replace this URL with your actual WordPress API endpoint
    // Example: const API_URL = 'https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&categories=YOUR_CATEGORY_ID';
    const API_URL = null; // Set to null to use local mock data

    // Mock data to simulate WordPress response
    const mockArticles = [
        {
            id: 0,
            title: "Věty, které děti potřebují slyšet",
            excerpt: "Mluvit s dětmi o rozchodu bývá těžké. Objevte věty, které mohou dětem pomoct se v situaci zorientovat a cítit se bezpečně.",
            link: "vety-ktere-deti-potrebuji-slyset.html",
            category: "Komunikace",
            image: "images/1.png",
            bgGradient: "from-blue-50 to-indigo-50"
        },
        {
            id: 1,
            title: "Jak mluvit s dětmi o rozvodu",
            excerpt: "Praktické tipy, jak dětem sdělit, co se děje, a jak jim pomoci situaci zpracovat bez zbytečných traumat.",
            link: "#",
            category: "Komunikace",
            image: "images/1.png",
            bgGradient: "from-blue-50 to-indigo-50"
        },
        {
            id: 2,
            title: "OSPOD krok za krokem",
            excerpt: "Co je OSPOD, kdy zasahuje a co od něj očekávat. Jasné, přehledně a bez zbytečného strachu.",
            link: "#",
            category: "Právo",
            image: "images/2.png",
            bgGradient: "from-pink-50 to-rose-50"
        },
        {
            id: 3,
            title: "Domluva s druhým rodičem",
            excerpt: "Tipy na komunikaci a nastavení pravidel i v případě, že vztah s bývalým partnerem není ideální.",
            link: "#",
            category: "Dohoda",
            image: "images/ne_1.png",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            id: 4,
            title: "Střídavá péče v praxi",
            excerpt: "Jak střídavka funguje, pro koho je vhodná a jak ji nastavit tak, aby fungovala pro všechny strany.",
            link: "#",
            category: "Péče",
            image: "images/1.png",
            bgGradient: "from-purple-50 to-violet-50"
        }
    ];

    async function fetchArticles(categoryIdentifier = null) {
        const grid = document.getElementById('articles-grid');
        if (!grid) return;

        // Clear existing content if we are fetching real data
        // grid.innerHTML = ''; 

        let articles = mockArticles;

        // Filter Mock Data
        if (categoryIdentifier) {
            articles = articles.filter(article =>
                article.category.toLowerCase() === categoryIdentifier.toLowerCase() ||
                article.id == categoryIdentifier
            );
        }

        if (API_URL) {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                // Transform WordPress data to our format
                articles = data.map(post => ({
                    id: post.id,
                    title: post.title.rendered,
                    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
                    link: post.link,
                    category: "Článek", // You can fetch category name here if needed
                    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'images/1.png',
                    bgGradient: "from-blue-50 to-indigo-50" // Default gradient
                }));
            } catch (error) {
                console.error("Failed to fetch articles:", error);
                // Fallback to mock data is already set
            }
        }

        renderArticles(articles, grid);
    }

    function renderArticles(articles, container) {
        // We only replace content if we fetched new data, otherwise we rely on static HTML for SEO/init load
        // But for this demo, let's keep the static HTML as is, but this function demonstrates valid rendering

        // Duplicate articles to show at least 5 cards for better grid visualization
        while (articles.length > 0 && articles.length < 5) {
            articles = articles.concat(articles.slice(0, Math.min(5 - articles.length, articles.length)));
        }

        // Uncomment to enable dynamic rendering replacing static HTML:
        container.innerHTML = articles.map(article => `
            <a href="${article.link}" class="block group">
                <article class="flex flex-col border-2 border-primary bg-white rounded-3xl gumroad-shadow-hover-magenta transition-all overflow-hidden h-full">
                    <div class="h-48 border-b-2 border-primary bg-secondary/10 flex items-center justify-center p-6 grayscale group-hover:grayscale-0 transition-all">
                        <img src="${article.image}" alt="${article.title}" class="h-full object-contain">
                    </div>
                    <div class="p-6 flex-grow flex flex-col">
                        <span class="font-heading text-xs font-black uppercase mb-2 text-secondary">${article.category}</span>
                        <h3 class="font-heading text-xl font-extrabold leading-tight mb-4 group-hover:text-secondary transition-colors">${article.title}</h3>
                        <p class="text-sm font-bold mb-6 flex-grow">${article.excerpt}</p>
                        <span class="mt-auto px-6 py-3 bg-white text-primary font-heading text-sm font-black uppercase italic border-2 border-primary rounded-2xl group-hover:shadow-[4px_4px_0px_0px_#2b2d72] transition-all text-center">
                            Číst více
                        </span>
                    </div>
                </article>
            </a>
        `).join('');

        // Re-trigger animations after render
        observeElements();
    }

    // ----------------------------------------
    // Initialize Logic
    // ----------------------------------------
    // Check if the current page has a specific category assigned via data attribute
    const articleContainer = document.getElementById('articles-grid');
    const pageCategory = articleContainer?.dataset.category;

    // Call fetch on load with potential category
    fetchArticles(pageCategory);

    // ----------------------------------------
    // Mobile Menu Logic
    // ----------------------------------------
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const spans = btn?.querySelectorAll('span');
    const links = menu?.querySelectorAll('a');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isOpen = menu.classList.contains('opacity-0');

            if (isOpen) {
                // Open menu
                menu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden'; // Prevent scrolling

                // Animate hamburger to X
                spans[0].classList.add('rotate-45', 'translate-y-2');
                spans[1].classList.add('opacity-0');
                spans[2].classList.add('-rotate-45', '-translate-y-2');
            } else {
                // Close menu
                menu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';

                // Reset hamburger
                spans[0].classList.remove('rotate-45', 'translate-y-2');
                spans[1].classList.remove('opacity-0');
                spans[2].classList.remove('-rotate-45', '-translate-y-2');
            }
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
                spans[0].classList.remove('rotate-45', 'translate-y-2');
                spans[1].classList.remove('opacity-0');
                spans[2].classList.remove('-rotate-45', '-translate-y-2');
            });
        });
    }

    // ----------------------------------------
    // Header Scroll Effect
    // ----------------------------------------
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'bg-white/95');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // ----------------------------------------
    // Intersection Observer for Animations
    // ----------------------------------------
    function observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Select elements to animate
        const elements = document.querySelectorAll('article, .bg-white.rounded-xl, .bg-white.border, section > div > div.grid > a');

        elements.forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });
    }

    observeElements();
});
