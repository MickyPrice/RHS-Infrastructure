



// var click = new Audio('sounds/click.wav');
// document.getElementsByName('body').click(function functionName() {
//   click.play();
// });




// Example: "var foo = getParameterByName('foo');"

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function () {
  $( ".body" ).fadeIn();

  $('.homebutton').html("← Back");
  $('a').prop('draggable', false);
  $('img').prop('draggable', false);

  // $('h1').click(function(e) {
  //   new Audio("sounds/click.wav").play();
  // });


}




function homepage() {
    $( ".homepage" ).animate({
      opacity: 0
    }, 1000, function() {
      window.location = "openview.html";
    });
}




// Open View
function powersupply() {
  $( ".openview-powersupply" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/powersupply.html";
  });
}
function motherboard() {
  $( ".openview-motherboard" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/motherboard.html";
  });
}
function ram() {
  $( ".openview-ram" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/ram.html";
  });
}
function harddrive() {
  $( ".openview-harddrive" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/harddrive.html";
  });
}
function cpu() {
  $( ".openview-cpu" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/cpu.html";
  });
}
function expansioncard() {
  $( ".openview-expansioncard" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/expansioncard.html";
  });
}
function mousekeyboard() {
  $( ".openview-mousekeyboard" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/mousekeyboard.html";
  });
}
function monitor() {
  $( ".openview-monitor" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/monitor.html";
  });
}
function graphicscard() {
  $( ".openview-graphicscard" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/graphicscard.html";
  });
}
function modem() {
  $( ".openview-modem" ).animate({
    opacity: 0
  }, 1000, function() {
    window.location = "more/modem.html";
  });
}






// more
function moreinfo() {
  if ($(".more-info-img").attr('src') == "../images/info.png") {
    $('.more-info-img').attr('src','../images/cross.png');
    $(".more-info-info").fadeToggle();
  }else {
    $('.more-info-img').attr('src','../images/info.png');
    $( ".more-info-info" ).fadeToggle();

  }
}




      //
      //
			// var images = new Array()
			// function preload() {
			// 	for (i = 0; i < preload.arguments.length; i++) {
			// 		images[i] = new Image()
			// 		images[i].src = preload.arguments[i]
			// 	}
			// }
			// preload(
			// 	"images/cpu.png",
			// 	"images/cross.png",
      //   "images/desktop.png",
      //   "images/expansioncard.png",
      //   "images/graphicscard.png",
      //   "images/harddrive.png",
      //   "images/info.png",
      //   "images/monitor.png",
      //   "images/motherboard.png",
      //   "images/mousekeyboard.png",
      //   "images/powersupply.png",
      //   "images/ram.png"
			// )






document.addEventListener('contextmenu', event => event.preventDefault());
