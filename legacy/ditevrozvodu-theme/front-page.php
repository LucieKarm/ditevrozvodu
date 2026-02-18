<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-accent to-primary text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="text-left">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">Rozvádíte se?<br>Vaše děti taky</h1>
                    <p class="text-xl mb-4 opacity-90">Rozvod nebo rozchod patří mezi nejnáročnější situace, jakými
                        můžeme během života projít.</p>
                    <p class="text-lg mb-8 opacity-80">Na děti má rozpad rodiny vždy vliv. Jako rodiče ale máte možnost
                        pomoct jim tento těžký čas dobře zvládnout.</p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#articles"
                            class="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-center">
                            Začněte tady
                        </a>
                    </div>
                    <p class="mt-6 text-sm opacity-75">✓ Více než 500 rodičů prošlo našimi kurzy</p>
                </div>
                <div class="flex justify-center">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/deti.png" alt="Děti"
                        class="max-w-md w-full">
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Article - Law Changes -->
    <section class="bg-primary text-white py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="inline-block bg-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">NOVÉ OD LEDNA 2026
            </div>
            <h2 class="text-3xl font-bold mb-4">Co se změnilo v zákonech o rozvodu</h2>
            <p class="text-lg mb-6 opacity-90">Od 1. ledna 2026 platí nová pravidla. Už neexistuje "výlučná" nebo
                "střídavá" péče. Zjistěte, co to pro vás znamená.</p>
            <a href="#"
                class="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition">
                Přečíst článek →
            </a>
        </div>
    </section>

    <!-- Topic Cards -->
    <section id="articles" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <p class="text-sm uppercase tracking-wider text-accent font-semibold mb-2">TÉMATA</p>
                <h2 class="text-4xl font-bold text-primary mb-4">Provedeme vás změnami ve vaší rodině</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">Vyberte si oblast, která vás zajímá, a získejte
                    praktické rady pro vaši situaci.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php
                $topics = array(
                    array(
                        'name' => 'Potřeby dětí',
                        'slug' => 'potreby-deti',
                        'icon' => 'deti.png',
                        'description' => 'Ať je jim pět nebo patnáct, většinou poznají, že se něco děje.'
                    ),
                    array(
                        'name' => 'Domluva s rodičem',
                        'slug' => 'domluva-s-rodicem',
                        'icon' => '1_A.png',
                        'description' => 'Nejvíc dětem ubližuje dlouhodobý konflikt, ne samotný rozvod.'
                    ),
                    array(
                        'name' => 'OSPOD a soud',
                        'slug' => 'ospod-a-soud',
                        'icon' => '2_A.png',
                        'description' => 'Jak jim neublížit víc, než je nutné? Pomůžeme vám se zorientovat.'
                    ),
                    array(
                        'name' => 'Jak pomoct sobě',
                        'slug' => 'jak-pomoct-sobe',
                        'icon' => 'yourself.png',
                        'description' => 'Nejste v tom sami. Pečujte o sebe, abyste mohli být oporou dětem.'
                    )
                );

                foreach ($topics as $topic) {
                    $category = get_category_by_slug($topic['slug']);
                    $link = $category ? get_category_link($category->term_id) : '#';
                    ?>
                    <a href="<?php echo esc_url($link); ?>"
                        class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col h-full group">
                        <div class="p-6">
                            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/<?php echo $topic['icon']; ?>"
                                alt="<?php echo esc_attr($topic['name']); ?>" class="w-full h-48 object-contain mb-4">
                        </div>
                        <div class="bg-primary text-white p-6 flex-grow group-hover:bg-primary/95 transition">
                            <h3 class="text-xl font-bold mb-3"><?php echo $topic['name']; ?></h3>
                            <p class="text-sm opacity-90"><?php echo $topic['description']; ?></p>
                            <span class="inline-block mt-4 text-accent font-semibold text-sm">Zobrazit více →</span>
                        </div>
                    </a>
                <?php } ?>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-gray-50 border-t border-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-primary mb-4">Dostávejte tipy přímo do emailu</h2>
            <p class="text-lg text-gray-600 mb-8">Přihlaste se k newsletteru a získejte praktické rady, jak pomoci dětem
                i sobě.</p>
            <form class="max-w-md mx-auto flex gap-4">
                <input type="email" placeholder="Váš email"
                    class="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
                    required>
                <button type="submit"
                    class="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition">Odebírat</button>
            </form>
        </div>
    </section>
</main>

<?php get_footer(); ?>