<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <style>
        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Lexend', sans-serif;
        }
    </style>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="text-xl font-bold text-primary">
                    <?php bloginfo('name'); ?>
                </a>
                <div class="hidden md:flex space-x-6">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => '',
                        'items_wrap' => '%3$s',
                        'fallback_cb' => false,
                    ));
                    ?>
                </div>
                <a href="https://spondea.thinkific.com/courses/jakmluvitsdetmi"
                    class="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
                    Naučte se mluvit s dětmi
                </a>
            </div>
        </div>
    </nav>