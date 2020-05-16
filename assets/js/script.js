
function myMove() {
	 var elem = document.getElementById("shootingstar");   
	 var pos = 0;
	 var id = setInterval(frame, 10);
	 function frame() {
	    if (pos == 550) {
	      	clearInterval(id);
	    } else {
	      	pos++; 
	      	elem.style.top = pos + 'px'; 
	      	elem.style.left = pos + 'px'; 
	    		}
	  		}
		}	
myMove();