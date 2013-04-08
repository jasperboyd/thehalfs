$(document).ready(function(){
	//variables
	var $o_r = $('#o_r'); 
	var $p_b = $("#p_b");
	var $c_t = $("#c_t"); 
	var $a_s = $("#a_s");
	var $o_r_l = $("#o_r_l"); 
	var $p_b_l = $("#p_b_l");
	var $c_t_l = $("#c_t_l"); 
	var $a_s_l = $("#a_s_l");
	var sel = -1; 
	
	var swap_text = function ( to_open ) { 
		
	} 
	
	var open = function ( to_open ) { 
		if (sel === to_open) { 
			sel = -1;
			$('html, body').animate({ scrollTop: 0 }, 300);
		} else { 
			sel = to_open; 
			if (sel === 0) {
				$o_r_l.fadeToggle(300); 
			} else if (sel === 1) {
				$p_b_l.fadeToggle(300); 
			} else if (sel === 2) {
				$c_t_l.fadeToggle(300); 
			} else {//3
				$a_s_l.fadeToggle(300); 
			}//if/else
			$('html, body').animate({ scrollTop: 500 }, 300);
		}//if/else 
	}
	
	var open_lyrics = function (to_open) { 
		if (sel === -1) { 
			//do nothing
		} else if (sel === 0) {
			$o_r_l.fadeToggle(300); 
		} else if (sel === 1) {
			$p_b_l.fadeToggle(300);  
		} else if (sel === 2) {
			$c_t_l.fadeToggle(300); 
		} else if (sel === 3) {//3
			$a_s_l.fadeToggle(300); 
		}
		open (to_open);
	}
	 
	//functions
	$o_r.click(function(){
		swap_text(0); 
		open_lyrics(0); 
	});
	
	$p_b.click(function(){
		swap_text(1); 
		open_lyrics(1); 
	});
	
	$c_t.click(function(){
		swap_text(2); 
		open_lyrics(2); 
	});
	
	$a_s.click(function(){
		swap_text(3); 
		open_lyrics(3);  
	});
	
});