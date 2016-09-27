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
        },
        callbacks: {
            beforeOpen: function(){
                var mfp = $j.magnificPopup.instance;
                mfp.items.unshift({
				    src: "http://localhost/des-lawrence/wp-content/uploads/2016/08/paintings-cover.jpg"
				});
				mfp.updateItemHTML();
            },
        } //callbacks
    });
    $j('.drawings').magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true,
          tCounter: '<span class="mfp-counter">Drawings %curr% of %total%</span>' // markup of counter
        },
        callbacks: {
            beforeOpen: function(){
                var mfp = $j.magnificPopup.instance;
                mfp.items.unshift({
				    src: "http://localhost/des-lawrence/wp-content/uploads/2016/08/drawings-cover.jpg"
				});
				mfp.updateItemHTML();
            },
        } //callbacks
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
		paddingTop:'50px',
		paddingBottom: '0',
		//autoScrolling: false,
		//bigSectionsDestination: 'top',
		//verticalCentered: true,
		afterLoad: function(anchorLink, index){
            var loadedSection = $j(this);
            if(anchorLink == 'home'){
                $j('.section-update').text("");
                $j('header#masthead').fadeOut('fast');
                $j('header#masthead-home-only').fadeIn('slow');
            }
            if(anchorLink == 'paintings'){
                $j('.section-update').text("Paintings");
                $j('header#masthead-home-only').fadeOut('fast');
                $j('header#masthead').fadeIn('slow');
                
            }
            if(anchorLink == 'drawings'){
                $j('.section-update').text("Drawings");
                $j('header#masthead').fadeIn('slow');
                $j('header#masthead-home-only').fadeOut('fast');
            }
            if(anchorLink == 'installation'){
                $j('.section-update').text("Installation views");
                $j('header#masthead').fadeIn('slow');
                $j('header#masthead-home-only').fadeOut('fast');
            }
            if(anchorLink == 'information'){
                $j('.section-update').text("Information");
                $j('header#masthead').fadeIn('slow');
                $j('header#masthead-home-only').fadeOut('fast');
            }
        }
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
		
	   	
	/*-------------------------------------------------------------------*/
	/*  5. display 'Information section' when the menu is clicked.
	/*-------------------------------------------------------------------*/	
		
		var clone = $j("#fullpage #section4").clone(); // making information' clones!
		$j("#fullpage #section4").remove();            // original is gone
		
		
		$j('.nav li .info').click(function(){
			$j("#fullpage").append(clone);                // appears to have returned
		});

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