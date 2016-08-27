$j = jQuery.noConflict();
$j(document).ready(function() {	
   
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
		anchors:['home', 'paintings', 'drawings', 'installation', 'information'],
		//navigation: true,
		//navigationPosition: 'right',
		//responsiveWidth: 960,
		responsiveHeight: 2000,
		//fitToSection: true,
		//css3: true,
		//scrollBar: true,
		//scrollingSpeed: 1000,
		//paddingTop:'40px',
		//paddingBottom: '40px',
		//autoScrolling: false,
		//verticalCentered: true,
		afterLoad: function(anchorLink, index){
            var loadedSection = $j(this);
            //$j('header').css('display', 'none');
            if(anchorLink == 'home'){
                $j('.section-update').text("");
                $j('header#masthead').css('display', 'none');
                $j('header#masthead-home-only').css('display','block');
            }
            if(anchorLink == 'paintings'){
                $j('.section-update').text("Paintings");
                $j('header#masthead').css('display', 'block');
                $j('header#masthead-home-only').css('display','none');
            }
            if(anchorLink == 'drawings'){
                $j('.section-update').text("Drawings");
                $j('header#masthead').css('display', 'block');
                $j('header#masthead-home-only').css('display','none');
            }
            if(anchorLink == 'installation'){
                $j('.section-update').text("Installation views");
                $j('header#masthead').css('display', 'block');
                $j('header#masthead-home-only').css('display','none');
            }
            if(anchorLink == 'information'){
                $j('.section-update').text("Information");
                $j('header#masthead').css('display', 'block');
                $j('header#masthead-home-only').css('display','none');
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
		var $grid1 = $j('.grid').imagesLoaded( function() {
		$grid1.isotope({
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
	
	
	// init Isotope
/*
	var $grid = $j('.drawings grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-sizer',
	    gutter: 50
	  }
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});  
*/

	
	
	
	   	
	/*-------------------------------------------------------------------*/
	/*  5. display 'Information section' when the menu is clicked.
	/*-------------------------------------------------------------------*/	
		
		var clone = $j("#fullpage #section4").clone(); // making information' clones!
		$j("#fullpage #section4").remove();            // original is gone
		
		
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
	/*-------------------------------------------------------------------*/
	/*  6. Image hover
	/*-------------------------------------------------------------------*/	
	$j(".grid .paintings .grid-item, .grid .drawings .grid-item").hover(function() { // Mouse over
	  $j(this).siblings().stop().fadeTo(300, 0.3);
	  $j(this).parent().siblings().stop().fadeTo(300, 0.3); 
	  
	}, function() { // Mouse out
	  $j(this).siblings().stop().fadeTo(300, 1);
	  $j(this).parent().siblings().stop().fadeTo(300, 1);
	});
	
	/*-------------------------------------------------------------------*/
	/*  7. Preloader. Requires jQuery jpreloader plugin.
	/*-------------------------------------------------------------------*/

	$j(window).load(function() { // makes sure the whole site is loaded
	  $j('#status').fadeOut(); // will first fade out the loading animation
	  $j('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	  $j('body').delay(350).css({
	    'overflow': 'visible'
	  });
	})
	
	/*-------------------------------------------------------------------*/
	/*  8. Get Image title and put on header specific location
	/*-------------------------------------------------------------------*/
	
	$j(".grid .paintings .grid-item a, .grid .drawings .grid-item a").hover(function() {
		var img_title = $j('img', this).attr('title');
		$j('.img-title-update').text(img_title);
	}, function() { // Mouse out
		$j('.img-title-update').text('');
	});
		
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

