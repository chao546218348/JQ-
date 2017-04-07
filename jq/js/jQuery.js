//封装轮播
$.fn.extend({
	a: function(n,times=1000) {
		var $ban = $(this).find("ul:eq(0)").children("li");//查找第一个ul下的li
		var $btn = $(this).find("ul:eq(1)").children("li");//查找第二个ul下的li
		var _left = $(this).find("a:eq(0)");//查找第一个a
		var _right = $(this).find("a:eq(1)");//查找第二个a
		var _index = 0;//默认下标为1
		var timer = null;
		$ban.hide().eq(0).show();//第一个ul下的li全部隐藏并显示第一个
		
		function fade(){
			$ban.eq(_index).fadeIn().siblings("li").fadeOut();//一个淡出 下一个淡入
			$btn.eq(_index).addClass("active").siblings("li").removeClass("active");
		}

		function move() {
			_index++;
			if(_index == n) {//n为图片的数量
				_index = 0;
			}
			fade();
		}
		$btn.click(function() {
			_index = $(this).index();
			fade();
		})
		var timer = setInterval(move, times);
		_right.click(function() {
			move();
		})
		_left.click(function() {
			if(_index == 0) {
				_index = n;
			}
			_index--;
			fade();
		})
		$(this).mousemove(function() {
			$(this).children("a").show();
			clearInterval(timer);
		})
		$(this).mouseout(function() {
			timer = setInterval(move, times);
			$(this).children("a").show();
		})
	}
});
//封装放大镜
//$.fn.extend({
//	b: function() {
//		var SmBox=$(this).children("div:eq(0)");//小盒子
//		var SmBtn=$(this).children("div:eq(0)").children("div");//Btn按钮
//		var SmImg=$(this).children("div:eq(0)").children("img");//小盒子图片
//		var BgBox=$(this).children("div:eq(1)");//大盒子
//		var Bgimg=$(this).children("div:eq(1)").children("img");//大盒子图片
//		SmBox.mouseover(function() {
//			BgBox.show();
//			SmBtn.show();
//		})
//		SmBox.mouseout(function() {
//			BgBox.hide();
//			SmBtn.hide();
//		})
//
//		SmBox.mousemove(function(e) {
//			var e = e || event;
//			var _w = SmBtn.width();
//			var _h = SmBtn.height();
//			var _left = e.clientX - _w;
//			var _top = e.clientY - _h;
//			var wid = SmBox.width() - SmBtn.width();
//			var hei = SmBox.height() - SmBtn.height();
//			if(_left < 0) {
//				_left = 0;
//			} else if(_left > wid) {
//				_left = wid;
//			}
//			if(_top < 0) {
//				_top = 0;
//			} else if(_top > hei) {
//				_top = hei;
//			}
//			var bg = Bgimg.width() / SmImg.width();
//			Bgimg.css({ "left": _left * -bg, "top": _top * -bg });
//			SmBtn.css({ "left": _left, "top": _top })
//		})
//	}
//});