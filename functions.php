<?php
/**
 * Des Lawrence functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Des_Lawrence
 */

if ( ! function_exists( 'des_lawrence_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function des_lawrence_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Des Lawrence, use a find and replace
	 * to change 'des-lawrence' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'des-lawrence', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'des-lawrence' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'des_lawrence_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'des_lawrence_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function des_lawrence_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'des_lawrence_content_width', 640 );
}
add_action( 'after_setup_theme', 'des_lawrence_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function des_lawrence_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'des-lawrence' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'des-lawrence' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'des_lawrence_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function des_lawrence_scripts() {
	wp_enqueue_style( 'des-lawrence-style', get_stylesheet_uri() );	
	
	wp_enqueue_style( 'bootstrap3', get_template_directory_uri() . '/node_modules/bootstrap/dist/css/bootstrap.min.css'); 
	
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/node_modules/font-awesome/css/font-awesome.min.css'); 
	
	
	wp_enqueue_style( 'wpcore', get_template_directory_uri() . '/assets/wpcore/wpcore.css'); // wpcore css
	
	
	wp_enqueue_style( 'magnific-popup', get_template_directory_uri() . '/node_modules/magnific-popup/dist/magnific-popup.css'); // magnific-popup css
	
	wp_enqueue_style( 'fullPage', get_template_directory_uri() . '/node_modules/fullpage.js/jquery.fullPage.css'); // fullpage.js css
	
	wp_enqueue_style( 'main', get_template_directory_uri() . '/static/dist/css/main.css');
		
	wp_enqueue_script( 'twitter-bootstrap-script', get_template_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.min.js', array( 'jquery' ),'', true );
	
	
	
	
	wp_enqueue_script( 'isotope-layout', get_template_directory_uri() . '/node_modules/
	/isotope-layout/dist/isotope.pkgd.min.js', array( 'jquery' ),'', true ); // Isotope layout js
	
	wp_enqueue_script( 'imagesloaded', get_template_directory_uri() . '/node_modules/
	/imagesloaded/imagesloaded.pkgd.min.js', array( 'jquery' ),'', true ); // imagesloaded.pkgd.min.js
	
	
	wp_enqueue_script( 'isotope-cells-by-row', get_template_directory_uri() . '/node_modules/
	/isotope-cells-by-row/cells-by-row.js', array( 'jquery' ),'', true ); // isotope-cells-by-row js
	
	
	wp_enqueue_script( 'des-lawrence-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'des-lawrence-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	
	
	wp_enqueue_script( 'scrolloverflow', get_template_directory_uri() . '/node_modules/
	/fullpage.js/vendors/scrolloverflow.min.js', array( 'jquery' ),'', true ); // fullPage js

	
	wp_enqueue_script( 'fullPage', get_template_directory_uri() . '/node_modules/
	/fullpage.js/jquery.fullPage.js', array( 'jquery' ),'', true ); // fullPage js
	
	wp_enqueue_script( 'magnific-popup', get_template_directory_uri() . '/node_modules/
	/magnific-popup/dist/jquery.magnific-popup.min.js', array( 'jquery' ),'', true ); // magnific-popup js

	
	
	wp_enqueue_script( 'main', get_template_directory_uri() . '/static/dist/js/app.min.js', array('jquery'), '20151215', true );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'des_lawrence_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


require get_template_directory() . '/inc/work.php';
