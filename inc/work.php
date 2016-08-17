<?php
// create shortcode for my work
add_shortcode( 'des-lawrence-work', 'des_lawrence_work' );
function des_lawrence_work( $atts ) {
    ob_start();?>

<?php

// check if the repeater field has rows of data
if( have_rows('work_information') ):?>

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
 	<?php // loop through the rows of data
	 	$i=1;
	 	while ( have_rows('work_information') ) : the_row();?>
			<div class="panel panel-default">
			    <div class="panel-heading" role="tab" id="heading<?php echo $i?>">
			      <h4 class="panel-title">
			        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse<?php echo $i?>" aria-expanded="true" aria-controls="collapse<?php echo $i?>">
			          <i class="fa fa-long-arrow-right" aria-hidden="true"></i> <?php the_sub_field('title_information');?>
			        </a>
			      </h4>
			    </div>
			    <div id="collapse<?php echo $i?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading<?php echo $i?>">
			      <div class="panel-body">
				    	<?php if( have_rows('contents_info') ):
					    	while ( have_rows('contents_info') ) : the_row();?>
								<div class="media">
									<div class="media-left">
										<strong><em><?php the_sub_field('year_info');?></em></strong>
									</div>
									<div class="media-body"><?php the_sub_field('work_details');?></div>
								</div>
						<?php endwhile;
							else:?>
							<div class="alert alert-warning" role="alert">Warning! Better check yourself, you're not looking too good.</div> 
						<?php endif;?> 
			      </div>
			    </div>
			  </div>
  		
		  	<?php $i++;?>	
		    <?php endwhile;
		else :?>
		    <div class="alert alert-warning" role="alert">Warning! Better check yourself, you're not looking too good.</div>
		<?php endif;
		?>  
</div>   
    <?php $myvariable = ob_get_clean();
    return $myvariable;
}
?>