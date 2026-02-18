<?php get_header(); ?>

<?php if (have_posts()):
    while (have_posts()):
        the_post(); ?>

        <?php
        // Get page slug to determine template type
        $page_slug = get_post_field('post_name', get_post());
        ?>

        <?php if ($page_slug === 'kontakt'): ?>
            <!-- Kontakt Page -->
            <!-- Hero Section -->
            <header class="bg-gradient-to-r from-primary to-accent text-white py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p class="text-sm uppercase tracking-wider mb-4 opacity-90">KONTAKT</p>
                    <h1 class="text-4xl md:text-6xl font-bold mb-6">
                        <?php the_title(); ?>
                    </h1>
                    <p class="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                        Tento web je určen rodičům, kteří procházejí rozvodem nebo rozchodem a hledají informace, orientaci a oporu
                        online, vlastním tempem a bez nutnosti osobního kontaktu.
                    </p>
                </div>
            </header>

            <!-- Contact Form Section -->
            <section class="py-16 bg-gray-50">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-2 gap-12">
                        <!-- Left: Info -->
                        <div>
                            <h2 class="text-3xl font-bold text-primary mb-6">Chcete nám napsat?</h2>
                            <p class="text-gray-700 mb-6">
                                Kontaktujte nás, pokud něco na webu nefunguje, máte dotaz k obsahu nebo struktuře webu nebo nám
                                chcete dát zpětnou vazbu k online materiálům.
                            </p>
                            <div class="border-l-4 border-gray-400 pl-4 py-2">
                                <p class="text-sm text-gray-600 mb-2">
                                    Většina odpovědí, které rodiče v této situaci potřebují, je obsažena přímo v textech, nástrojích
                                    a materiálech na webu.
                                </p>
                                <p class="text-sm text-gray-600">
                                    <strong>Tento kontakt neslouží k individuálnímu poradenství</strong> k rozvodu, péči o děti,
                                    komunikaci s druhým rodičem ani k řešení soudních nebo opatrovnických sporů.
                                </p>
                            </div>
                        </div>

                        <!-- Right: Form -->
                        <div class="bg-white p-8 rounded-xl shadow-md">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About SPONDEA Section -->
            <section class="py-16 bg-white">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-4xl font-bold text-primary text-center mb-12">Kdo jsme</h2>

                    <div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-12">
                        <div class="flex flex-col md:flex-row gap-8 items-center mb-8">
                            <div class="flex-1">
                                <h3 class="text-3xl font-bold text-primary mb-4">SPONDEA</h3>
                                <p class="text-lg mb-4">
                                    Jsme nezisková organizace s téměř <strong class="text-accent">29 lety zkušeností</strong> v
                                    oblasti pomoci rodinám a dětem v náročných životních situacích.
                                </p>
                                <p class="text-gray-700 mb-4">
                                    Od roku 1997 poskytujeme odbornou psychologickou, terapeutickou a sociální podporu rodinám
                                    procházejícím krizí, rozvodem nebo rozchodem. Naše práce je založena na důkladné znalosti
                                    potřeb dětí i rodičů a na respektu k jedinečnosti každé rodiny.
                                </p>
                                <p class="text-gray-700">
                                    Tento web a online kurz vznikly z naší každodenní práce s rodinami. Vše, co zde najdete,
                                    vychází z reálných zkušeností našich psychologů, terapeutů a sociálních pracovníků.
                                </p>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="bg-white rounded-xl p-6 shadow-md text-center min-w-[180px]">
                                    <div class="text-5xl font-bold text-primary mb-2">29</div>
                                    <div class="text-sm font-semibold text-gray-600 uppercase tracking-wide">let zkušeností</div>
                                </div>
                                <div class="bg-white rounded-xl p-6 shadow-md text-center min-w-[180px]">
                                    <div class="text-5xl font-bold text-accent mb-2">2000+</div>
                                    <div class="text-sm font-semibold text-gray-600 uppercase tracking-wide">klientů a klientek
                                        ročně</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <a href="http://www.spondea.cz" target="_blank"
                            class="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition shadow-lg">
                            Zjistěte více o naší práci →
                        </a>
                    </div>
                </div>
            </section>

        <?php else: ?>
            <!-- Regular Page -->
            <div class="py-12 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-4xl font-bold text-primary mb-8">
                        <?php the_title(); ?>
                    </h1>
                    <div class="prose prose-lg max-w-none">
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>

    <?php endwhile; endif; ?>

<?php get_footer(); ?>