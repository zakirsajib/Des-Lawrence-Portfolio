<div class="container">
	<div class="row">
		<div class="grid paintings-grid">
			
				<?php 
				$images = get_field('paintings_gallery');
				if( $images ): ?>
				    <div class="paintings"><div class="grid-sizer"></div>
				        <?php foreach( $images as $image ): ?>
				            <div class="grid-item">
				                <a href="<?php echo $image['url']; ?>" title="<?php echo $image['title']; ?>">
				                     <img src="<?php echo $image['sizes']['large']; ?>" title="<?php echo $image['title']; ?>" alt="<?php echo $image['alt']; ?>" />
				                </a>
				            </div>
				        <?php endforeach; ?>
				    </div>
				<?php endif; ?>
		</div>
	</div>
</div>
