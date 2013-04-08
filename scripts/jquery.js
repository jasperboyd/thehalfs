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
	
	var open = function ( to_open ) { 
		sel = to_open; 
		if (sel === 0) {
			$o_r_l.fadeToggle(500); 
		} else if (sel === 1) {
			$p_b_l.fadeToggle(500); 
		} else if (sel === 2) {
			$c_t_l.fadeToggle(500); 
		} else {//3
			$a_s_l.fadeToggle(500); 
		}
	}
	
	var open_lyrics = function (to_open) { 
		if (sel === -1) { 
			//do nothing
		} else if (sel === 0) {
			$o_r_l.fadeToggle(500); 
		} else if (sel === 1) {
			$p_b_l.fadeToggle(500); 
		} else if (sel === 2) {
			$c_t_l.fadeToggle(500); 
		} else {//3
			$a_s_l.fadeToggle(500); 
		}	
		open (to_open);
	}
	 
	//functions
	$o_r.click(function(){
		open_lyrics(0); 
	});
	
	$p_b.click(function(){
		open_lyrics(1); 
	});
	
	$c_t.click(function(){
		open_lyrics(2); 
	});
	
	$a_s.click(function(){
		open_lyrics(3);  
	});
	
});