/*
	Striped by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/****按照时间，显示日历****/
var d = new Date();
var months = 
[
"January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"
];
var year = d.getFullYear();
document.getElementById("MYdate").innerText = months[d.getMonth()] + " " + year;

//1号
var oneDay = new Date();
oneDay.setDate(1);
var col = oneDay.getDay(); // 1号在星期几
var hang = 5;       //日历行数
var next = 7 - col; //获得该月第一周第一行有几天


monthbody = document.getElementById("monthday");
//一个月有几天
var daylen = new Date(d.getFullYear(),d.getMonth(),0);
//判断日历行数是5行还是4行
if(daylen.getDate() <= 31 && col == 0){
	hang = 4;
}

//创建日历
var  len = 0;
for(var i = 0; i < hang;i++){
	var tr = document.createElement("tr");
	//第一行
	if(i === 0){
		var td = document.createElement("td");
		td.setAttribute("class","pad");
		td.setAttribute("colspan",col);
		td.innerHTML = "<span>&nbsp;</span>";
		tr.appendChild(td);
		for(var j = 0; j < next;j++){
			var td1 = document.createElement("td");
			td1.innerHTML = "<span>"+(j+1)+"</span>";
			tr.appendChild(td1);
			len++;
			if(len+1 == d.getDate()){
				td1.setAttribute("class","today");
				td1.innerHTML = "<a>"+(len+1)+"</a>"	
			}
		}
	}else{
	//剩下行数
		for(var j = 0;j<7;j++){
			if(len <= daylen.getDate()){
				
				var td1 = document.createElement("td");
				td1.innerHTML = "<span>"+(len+1)+"</span>";
				if(len+1 == d.getDate()){
					td1.setAttribute("class","today");
					td1.innerHTML = "<a>"+(len+1)+"</a>"	
				}
				tr.appendChild(td1);
				len++;
			}
		}
	}
	monthbody.appendChild(tr);
}


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$document = $(document);

	// Breakpoints.
		breakpoints({
			desktop:   [ '737px',   null     ],
			wide:      [ '1201px',  null     ],
			narrow:    [ '737px',   '1200px' ],
			narrower:  [ '737px',   '1000px' ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.

		// Height hack.
		/*
			var $sc = $('#sidebar, #content'), tid;

			$window
				.on('resize', function() {
					window.clearTimeout(tid);
					tid = window.setTimeout(function() {
						$sc.css('min-height', $document.height());
					}, 100);
				})
				.on('load', function() {
					$window.trigger('resize');
				})
				.trigger('resize');
		*/

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#sidebar" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Sidebar
			$('#sidebar')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'sidebar-visible'
				});

})(jQuery);


