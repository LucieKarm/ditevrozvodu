<!-- Footer -->
<footer class="bg-primary text-white py-12 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
                <h4 class="text-xl font-bold mb-4">
                    <?php bloginfo('name'); ?>
                </h4>
                <p class="opacity-75">
                    <?php bloginfo('description'); ?>
                </p>
            </div>
            <div>
                <h4 class="font-bold mb-4">Témata</h4>
                <ul class="space-y-2 opacity-75">
                    <?php
                    $categories = get_categories(array('hide_empty' => false));
                    foreach ($categories as $category) {
                        if ($category->slug != 'uncategorized') {
                            echo '<li><a href="' . get_category_link($category->term_id) . '" class="hover:text-light-blue transition">' . $category->name . '</a></li>';
                        }
                    }
                    ?>
                </ul>
            </div>
            <div>
                <h4 class="font-bold mb-4">Kontakt</h4>
                <p class="opacity-75">SPONDEA<br>Brno</p>
            </div>
        </div>
        <div class="border-t border-white/20 pt-8 text-center opacity-75 text-sm">
            <p>&copy;
                <?php echo date('Y'); ?> SPONDEA. Všechna práva vyhrazena.
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>