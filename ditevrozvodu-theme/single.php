<?php get_header(); ?>

<?php if (have_posts()):
    while (have_posts()):
        the_post(); ?>

        <!-- Hero Section -->
        <header class="bg-gradient-to-r from-primary to-accent text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <?php
                $categories = get_the_category();
                if (!empty($categories)) {
                    echo '<p class="text-sm uppercase tracking-wider mb-4 opacity-90">' . esc_html($categories[0]->name) . '</p>';
                }
                ?>
                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    <?php the_title(); ?>
                </h1>
                <?php if (has_excerpt()): ?>
                    <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                        <?php the_excerpt(); ?>
                    </p>
                <?php endif; ?>
            </div>
        </header>

        <!-- Article Content -->
        <article class="py-12 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="prose prose-lg max-w-none">
                    <?php the_content(); ?>
                </div>
            </div>
        </article>

        <!-- Course CTA Section -->
        <section class="py-16 bg-gradient-to-r from-accent to-primary text-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">Chcete se dozvědět víc?</h2>
                        <p class="text-xl mb-6 opacity-90">
                            Online kurz "Jak mluvit s dětmi o rozvodu" vám pomůže:
                        </p>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-start gap-3">
                                <span class="text-2xl">✓</span>
                                <span>Naučit se mluvit s dětmi o rozvodu citlivě a věku přiměřeně</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-2xl">✓</span>
                                <span>Pochopit, co děti v této situaci potřebují</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="text-2xl">✓</span>
                                <span>Získat konkrétní nástroje a fráze pro komunikaci</span>
                            </li>
                        </ul>
                        <a href="https://spondea.thinkific.com/courses/jakmluvitsdetmi"
                            class="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
                            Zjistit více o kurzu →
                        </a>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <h3 class="text-2xl font-bold mb-4">Co kurz obsahuje:</h3>
                        <ul class="space-y-3">
                            <li>📚 5 video lekcí</li>
                            <li>📝 Pracovní listy a nástroje</li>
                            <li>🎯 Konkrétní příklady a fráze</li>
                            <li>⏰ Přístup kdykoliv, vlastním tempem</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl font-bold text-primary mb-4">Přihlaste se k odběru novinek</h2>
                <p class="text-lg text-gray-600 mb-8">
                    Dostávejte tipy, články a informace o nových materiálech přímo do e-mailu.
                </p>
                <form class="max-w-md mx-auto flex gap-4">
                    <input type="email" placeholder="Váš e-mail"
                        class="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent">
                    <button type="submit"
                        class="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition whitespace-nowrap">
                        Přihlásit se
                    </button>
                </form>
            </div>
        </section>

    <?php endwhile; endif; ?>

<?php get_footer(); ?>