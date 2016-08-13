<div class="container">
	<div class="row">
		<div class="section-title"><?php the_field('drawings_title')?></div>
		<div class="section-subtitle"><?php the_field('drawings_sub_title')?></div>

		<div class="grid drawings-grid">
		  	<?php 
				$images = get_field('drawings_gallery');
				if( $images ): ?>
				    <div class="drawings"><div class="grid-sizer"></div>
				        <?php foreach( $images as $image ): ?>
				            <div class="grid-item">
				                <a href="<?php echo $image['url']; ?>" title="<?php echo $image['caption']; ?>">
				                     <img src="<?php echo $image['sizes']['large']; ?>" alt="<?php echo $image['alt']; ?>"/>
				                </a>
				            </div>
				        <?php endforeach; ?>
				    </div>
				<?php endif; ?>
		</div>
	</div>
</div>
