<?php
/**
 * Dítě v rozvodu Theme Functions
 */

// Theme setup
function ditevrozvodu_setup()
{
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    // Register navigation menu
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'ditevrozvodu'),
    ));
}
add_action('after_setup_theme', 'ditevrozvodu_setup');

// Enqueue scripts and styles
function ditevrozvodu_scripts()
{
    // Dequeue WordPress default styles that conflict
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-blocks-style');
    wp_dequeue_style('global-styles');

    // Tailwind CSS
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);

    // Tailwind config
    wp_add_inline_script('tailwind-cdn', "
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary': '#2b2d72',
                        'accent': '#e55297',
                        'light-blue': '#3bb6e6',
                    }
                }
            }
        }
    ");

    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap', array(), null);

    // Theme stylesheet (for custom overrides)
    wp_enqueue_style('ditevrozvodu-style', get_stylesheet_uri(), array(), '1.0');

    // Custom JavaScript
    wp_enqueue_script('ditevrozvodu-script', get_template_directory_uri() . '/script.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'ditevrozvodu_scripts');

// Remove WordPress default block styles on frontend
function ditevrozvodu_remove_block_styles()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-blocks-style');
    wp_dequeue_style('global-styles');
}
add_action('wp_enqueue_scripts', 'ditevrozvodu_remove_block_styles', 100);

// Add custom body classes
function ditevrozvodu_body_classes($classes)
{
    $classes[] = 'bg-gray-50';
    return $classes;
}
add_filter('body_class', 'ditevrozvodu_body_classes');

// Excerpt length
function ditevrozvodu_excerpt_length($length)
{
    return 30;
}
add_filter('excerpt_length', 'ditevrozvodu_excerpt_length');

// Custom excerpt more
function ditevrozvodu_excerpt_more($more)
{
    return '...';
}
add_filter('excerpt_more', 'ditevrozvodu_excerpt_more');
