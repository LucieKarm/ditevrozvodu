<?php get_header(); ?>

<!-- Homepage -->
<main>
    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">Dítě v rozvodu</h1>
            <p class="text-2xl md:text-3xl opacity-90 max-w-3xl mx-auto mb-8">
                Praktický průvodce rozvodem pro rodiče
            </p>
            <a href="https://spondea.thinkific.com/courses/jakmluvitsdetmi"
                class="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
                Naučte se mluvit s dětmi →
            </a>
        </div>
    </header>

    <!-- Topic Cards -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php
                $topics = array(
                    array(
                        'name' => 'Potřeby dětí',
                        'slug' => 'potreby-deti',
                        'icon' => '👶',
                        'description' => 'Co děti potřebují během rozvodu a jak jim to poskytnout'
                    ),
                    array(
                        'name' => 'Domluva s druhým rodičem',
                        'slug' => 'domluva-s-rodicem',
                        'icon' => '🤝',
                        'description' => 'Jak spolupracovat pro dobro vašich dětí'
                    ),
                    array(
                        'name' => 'OSPOD a soud',
                        'slug' => 'ospod-a-soud',
                        'icon' => '⚖️',
                        'description' => 'Orientace v právních a úředních záležitostech'
                    ),
                    array(
                        'name' => 'Jak pomoct sobě',
                        'slug' => 'jak-pomoct-sobe',
                        'icon' => '💚',
                        'description' => 'Péče o sebe v náročném období'
                    )
                );

                foreach ($topics as $topic) {
                    $category = get_category_by_slug($topic['slug']);
                    if ($category) {
                        $link = get_category_link($category->term_id);
                    } else {
                        $link = '#';
                    }
                    ?>
                    <a href="<?php echo esc_url($link); ?>"
                        class="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition group">
                        <div class="text-5xl mb-4">
                            <?php echo $topic['icon']; ?>
                        </div>
                        <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-accent transition">
                            <?php echo $topic['name']; ?>
                        </h3>
                        <p class="text-gray-600">
                            <?php echo $topic['description']; ?>
                        </p>
                    </a>
                    <?php
                }
                ?>
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
</main>

<?php get_footer(); ?>