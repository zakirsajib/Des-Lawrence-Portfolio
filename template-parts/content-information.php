<div class="container">
	<div class="row">
		<div class="information-section">
			<div class="center-block">
				<?php $descriptions_information = get_field('descriptions_information');
					if($descriptions_information):
						the_field('descriptions_information');
					else:?>
						<div class="alert alert-warning" role="alert">Warning! Better check yourself, you're not looking too good.</div>
					<?php endif;?>
			</div>
		</div>
	</div>
</div>