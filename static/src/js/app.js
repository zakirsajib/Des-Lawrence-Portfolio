$j = jQuery.noConflict();
$j(document).ready(function() {	
	/*-------------------------------------------------------------------*/
	/*  1. Preloader. Requires jQuery jpreloader plugin.
	/*-------------------------------------------------------------------*/
     $j('body').jpreLoader({
        showPercentage: false,
        loaderVPos: '50%'
    });
    
    /*-------------------------------------------------------------------*/
	/*  2. magnificPopup plugin
	/*-------------------------------------------------------------------*/
	$j('.paintings').magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true,
          tCounter: '<span class="mfp-counter">Paintings %curr% of %total%</span>' // markup of counter
        }
    });
    $j('.drawings').magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true,
          tCounter: '<span class="mfp-counter">Drawings %curr% of %total%</span>' // markup of counter
        }
    });

 	
	
	/*-------------------------------------------------------------------*/
	/*  3. fullPage plugin
	/*-------------------------------------------------------------------*/

	$j('#fullpage').fullpage({
		menu: '#menu',
		anchors:['paintings', 'drawings', 'installation', 'information'],
		//navigation: true,
		//navigationPosition: 'right',
		//responsiveWidth: 960,
		responsiveHeight: 2000,
		//css3: true,
		//scrollBar: true,
		//scrollingSpeed: 1000,
		//paddingTop:'200px',
		//paddingBottom: '200px',
		//verticalCentered: true,
		afterLoad: function(anchorLink, index){
            var loadedSection = $j(this);
            if(anchorLink == 'paintings'){
                $j('.section-update').text("Paintings");
            }
            if(anchorLink == 'drawings'){
                $j('.section-update').text("Drawings");
            }
            if(anchorLink == 'installation'){
                $j('.section-update').text("Installation views");
            }
            if(anchorLink == 'information'){
                $j('.section-update').text("Information");
            }
        }
		
		
/*
		onLeave: function(index, nextIndex, direction){
            var leavingSection = $j(this);
			
			//after leaving section 1
			if(index == 1 && direction =='down'){
                $j('.section-update').text("Drawings");
            }
            //after leaving section 2
            else if(index == 2 && direction =='down'){
                $j('.section-update').text("Installation Views");
            }
            //after leaving section 3
            else if(index == 3 && direction =='down'){
                $j('.section-update').text("Information");
            }
			
            else if(index == 2 && direction == 'up'){
                $j('.section-update').text("Paintings");
            }
            else if(index == 3 && direction == 'up'){
                $j('.section-update').text("Drawings");
            }
            else if(index == 4 && direction == 'up'){
                $j('.section-update').text("Installation Views");
            }
        }
*/
	});

	
	/*-------------------------------------------------------------------*/
	/*  4. isotope.pkgd.js, imagesloaded.pkgd.js
	/*-------------------------------------------------------------------*/

	// init Isotope after all images have loaded
		var $grid = $j('.grid').imagesLoaded( function() {
		$grid.isotope({
	    	itemSelector: '.grid-item',
	    	layoutMode: 'cellsByRow',
			percentPosition: true,
			cellsByRow: {
				columnWidth: '.grid-sizer',
				rowHeight: '.grid-sizer',
				gutter: 50
				//isFitWidth: true
	    	}
	  	});
	});
	
	   	
	/*-------------------------------------------------------------------*/
	/*  5. display 'Information section' when the menu is clicked.
	/*-------------------------------------------------------------------*/	
		
		var clone = $j("#fullpage #section3").clone(); // making information' clones!
		$j("#fullpage #section3").remove();            // original is gone
		
		
		$j('.nav li .info').click(function(){
			$j("#fullpage").append(clone);                // appears to have returned
		});

/*
	$j(".paintings a").hover(function(){
 
        // Get the current title
        var title = $j(this).attr("title");
 
        // Store it in a temporary attribute
        $j(this).attr("tmp_title", title);
 
        // Set the title to nothing so we don't see the tooltips
        $j(this).attr("title","");
         
    });
 
  $j(".paintings a").click(function(){// Fired when we leave the element
 
        // Retrieve the title from the temporary attribute
        var title = $j(this).attr("tmp_title");
 
        // Return the title to what it was
        $j(this).attr("title", title);
         
    });
*/

	
		
});


/*
$j(window).load(function(){

    var $container = $j('.grid');
   
    // initialize Isotope
    $container.isotope({
      // options...
      resizable: false, // enable normal resizing
      // set columnWidth to a percentage of container width
	  masonry: { 
	     columnWidth: $container.width() / 4 
	  },
    });
    
    $j(window).on('resize', function(){ 
	    if ($j(window).width() < 768) { 
		    $container.isotope({ columns: 3 });
		} 
		if ($j(window).width() > 768) { 
			$container.isotope({ columns: 3 });
		}
		if ($j(window).width() <= 320) { 
		    $container.isotope({ columns: 2 });
		} 
	});
    
    
});
*/
