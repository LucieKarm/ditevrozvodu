<?php get_header(); ?>

<!-- Default index/archive -->
<div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-primary mb-8">
            <?php
            if (is_category()) {
                single_cat_title();
            } elseif (is_archive()) {
                the_archive_title();
            } else {
                bloginfo('name');
            }
            ?>
        </h1>

        <div class="grid md:grid-cols-3 gap-8">
            <?php if (have_posts()):
                while (have_posts()):
                    the_post(); ?>
                    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                        <?php if (has_post_thumbnail()): ?>
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('medium', array('class' => 'w-full h-48 object-cover')); ?>
                            </a>
                        <?php endif; ?>
                        <div class="p-6">
                            <h2 class="text-xl font-bold text-primary mb-3">
                                <a href="<?php the_permalink(); ?>" class="hover:text-accent transition">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            <p class="text-gray-600 mb-4">
                                <?php the_excerpt(); ?>
                            </p>
                            <a href="<?php the_permalink(); ?>" class="text-accent font-semibold hover:underline">
                                Číst více →
                            </a>
                        </div>
                    </article>
                <?php endwhile; else: ?>
                <p class="text-gray-600">Žádné příspěvky nenalezeny.</p>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>