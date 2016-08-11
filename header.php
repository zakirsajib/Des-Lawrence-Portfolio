<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Des_Lawrence
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'des-lawrence' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="site-branding">
						<?php
						if ( is_front_page() && is_home() ) : ?>
							<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
						<?php else : ?>
							<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
						<?php
						endif;?>
					</div><!-- .site-branding -->
				</div>
				
				<div class="col-md-4 section-update"></div>
				
				<div class="col-md-4">
					<ul class="nav navbar-nav navbar-right" id="menu">
				        <li class="dropdown">
				          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><em>Work</em> <span class="caret"></span></a>
				          <ul class="dropdown-menu">
				            <li data-menuanchor="paintings"><a href="#paintings">Paintings</a></li>
							<li data-menuanchor="drawings"><a href="#drawings">Drawings</a></li>
							<li data-menuanchor="installation"><a href="#installation">Installation views</a></li>
				          </ul>
				        </li>
				        <li data-menuanchor="information"><a class="info" href="#information">Information</a></li>
				    </ul>
				</div>
			</div>
		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
