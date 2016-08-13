<div class="installation-heading">
	<div class="section-title"><?php the_field('installation_title')?></div>
	<div class="section-subtitle"><?php the_field('installation_sub_title')?></div>
</div>
<?php 
	$images = get_field('installation_gallery');
	if( $images ): ?>
	    <div class="installation_gallery">
	        <?php foreach( $images as $image ): ?>
	         	<div class="slide" 
		         	style="background-image: url(<?php echo $image['sizes']['large']; ?>);"></div>
	        <?php endforeach; ?>
	    </div>
	<?php endif; ?>