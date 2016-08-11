<?php
	/*Template Name: Home*/
get_header();?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="container">
				<div class="row">
					<?php
					while ( have_posts() ) : the_post();?>
						<div id="fullpage">
						    <div class="section" id="section0">
							    <?php get_template_part( 'template-parts/content', 'paintings' );?>
						    </div>
						    <div class="section" id="section1">
							    <?php get_template_part( 'template-parts/content', 'drawings' );?>
						    </div>
						    <div class="section" id="section2">
							    <?php get_template_part( 'template-parts/content', 'installation' );?>
							</div>
						    <div class="section" id="section3">
							    <?php get_template_part( 'template-parts/content', 'information' );?>
							</div>
						</div>
					<?php endwhile; // End of the loop.?>
				</div>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer()?>