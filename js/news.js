var MONTH_FORMAT=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Seb","Oct","Nov","Dec"];!function(e){e.fn.hoverTimeout=function(t,n,i,a){return this.each(function(){var o=null,s=e(this);s.hover(function(){clearTimeout(o),o=setTimeout(function(){n.call(s)},t)},function(){clearTimeout(o),o=setTimeout(function(){a.call(s)},i)})})}}(jQuery),function(e){e.fn.replaceText=function(t,n,i){return this.each(function(){var a,o,s=this.firstChild,r=[];if(s)do{3===s.nodeType&&(o=(a=s.nodeValue).replace(t,n))!==a&&(!i&&/</.test(o)?(e(s).before(o),r.push(s)):s.nodeValue=o)}while(s=s.nextSibling);r.length&&e(r).remove()})}}(jQuery),window.selectnav=function(){"use strict";return function(e,t){!function(e,t){function n(e){var t;e||(e=window.event),e.target?t=e.target:e.srcElement&&(t=e.srcElement),3===t.nodeType&&(t=t.parentNode),t.value&&(window.location.href=t.value)}function i(e){var t=e.nodeName.toLowerCase();return"ul"===t||"ol"===t}function a(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}if((e=document.getElementById(e))&&i(e)&&"insertAdjacentHTML"in window.document.documentElement){document.documentElement.className+=" js";var o=t||{},s=o.activeclass||"active",r="boolean"!=typeof o.autoselect||o.autoselect,c="boolean"!=typeof o.nested||o.nested,d=o.indent||"→",l=o.label||"Menu",u=0,h=" selected ";e.insertAdjacentHTML("afterend",function e(t){u++;var n=t.children.length,o="",f="",p=u-1;if(n){if(p){for(;p--;)f+=d;f+=" "}for(var v=0;v<n;v++){var m=t.children[v].children[0];if(void 0!==m){var $=m.innerText||m.textContent,w="";if(s&&(w=-1!==m.className.search(s)||-1!==m.parentNode.className.search(s)?h:""),r&&!w&&(w=m.href===document.URL?h:""),o+='<option value="'+m.href+'" '+w+">"+f+$+"</option>",c){var b=t.children[v].children[1];b&&i(b)&&(o+=e(b))}}}return 1===u&&l&&(o='<option value="">'+l+"</option>"+o),1===u&&(o='<select class="selectnav" id="'+a(!0)+'">'+o+"</select>"),u--,o}}(e));var f=document.getElementById(a());f.addEventListener&&f.addEventListener("change",n),f.attachEvent&&f.attachEvent("onchange",n)}}(e,t)}}(),$(document).ready(function(){selectnav("nav"),selectnav("nav1")}),function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:!1,autorotate:!1,pauseonhover:!0,delay:2e3,active:1,controls:{prev:".prev",next:".next"}},options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent,options.attribute=$this.data("attribute")||options.attribute,options.animation=$this.data("animation")||options.animation,options.autorotate=$this.data("autorotate")||options.autorotate,options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover,options.delay=$this.data("delay")||options.delay,options.active=$this.data("active")||options.active,$this.find("> div").hide(),$this.find("> div").eq(options.active-1).show(),$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before"),$this.find("> ul li").removeClass("active"),$(this).addClass("active"),$this.find("> div").hide();var e=$(this).find("a").attr(options.attribute);return options.animation?$this.find(e).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")}):($this.find(e).show(),$(this).trigger("_after")),!1}),init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)"),elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length,"hover"==options.mouseevent?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var e=setTimeout(forward,options.delay);$this.mouseover(function(){options.pauseonhover&&clearTimeout(e)})}function move(e){"forward"==e&&(i=++i%elements.length),"backward"==e&&(i=--i%elements.length),elements.eq(i).click()}options.autorotate&&(setTimeout(forward,0),options.pauseonhover&&$this.on("mouseleave",function(){setTimeout(forward,1e3)})),$this.find(options.controls.next).click(function(){move("forward")}),$this.find(options.controls.prev).click(function(){move("backward")}),$this.on("destroy",function(){$(this).removeData()})})},$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})}(jQuery),function(e){e.fn.simplyTab=function(t){return t=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},t),this.each(function(){var n=e(this),i=n.children("[data-tab]"),a=t.active-1;n.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>'),i.addClass("content-tab").each(function(){e(this).hide(),n.find(".wrap-tab").append('<li><a title="simple-tab" href="#">'+e(this).data("tab")+"</a></li>")}).eq(a).show(),n.find(".wrap-tab a").on("click",function(){var a=e(this).parent().index();return e(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab"),e(this).addClass("activeTab"),"slide"==t.fx?i.eq(a).is(":hidden")&&i.slideUp(t.hideSpeed,t.hideEasing,function(){t.hide.call(n)}).eq(a).slideDown(t.showSpeed,t.showEasing,function(){t.show.call(n)}):"fade"==t.fx?i.eq(a).is(":hidden")&&i.hide().eq(a).fadeIn(t.showSpeed,t.showEasing,function(){t.show.call(n)}):"fancyslide"==t.fx?i.eq(a).is(":hidden")&&i.slideUp(t.hideSpeed,t.hideEasing,function(){t.hide.call(n)}).eq(a).delay(t.hideSpeed).slideDown(t.showSpeed,t.showEasing,function(){t.show.call(n)}):i.eq(a).is(":hidden")&&i.hide().eq(a).show(),t.change.call(n),!1}).eq(a).addClass("activeTab")})}}(jQuery),$(document).ready(function(){$(".cmm-tabs").simplyTab({active:1,fx:"fade",showSpeed:400,hideSpeed:400}),$(".blogger-tab").append($("#comments")),$(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>"),$(".cmm-tabs-header").prepend("<h3><h8>Post </h8>Comment<h9>s</h9></h3>")}),$(document).ready(function(){$("ul#sub-menu").parent("li").addClass("hasSub"),jQuery}),$(document).ready(function(){$('a[name="ads-post-in"]').before($("#ads-post10").html()),$("#ads-post10").html("")}),$(document).ready(function(){$(".sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>"),$(".footer-sections .widget h2").wrap("<div class='widget-title'/>"),$(".index .post-outer,.archive .post-outer").each(function(){$(this).find(".block-image .thumb a").attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}),$(window).scroll(function(){$(this).scrollTop()>200?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()}),$("#back-to-top").hide().click(function(){return $("html, body").animate({scrollTop:0},1e3),!1});var e,t,n,i=$(".search");i.click(function(e){e.preventDefault(),i.is(".active")&&$(e.target).is(i)?i.removeClass("active"):(i.addClass("active"),i.find("input").focus())}),$("body").click(function(e){i.is(".active")&&!$(e.target).is(".search, .search form, .search input")&&i.removeClass("active")}),e=jQuery,t=e("a.newer-link"),n=e("a.older-link"),e.get(t.attr("href"),function(n){t.html("<strong>Next</strong><span>"+e(n).find(".post h1.post-title").text()+"</span>")},"html"),e.get(n.attr("href"),function(t){n.html("<strong>Previous</strong><span>"+e(t).find(".post h1.post-title").text()+"</span>")},"html")});
