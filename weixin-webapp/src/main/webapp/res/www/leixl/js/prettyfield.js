(function(){var e=".submenu .selected",c=".submenu .menu",d='<div class="submenu"><div class="selected">{SELECTED}<span>+</span></div><div class="menu hide"><ul>{LIST}</ul></div></div>',a=function(r,s){var h=[];var g=r.find("select");var t=function(y,x,z,u){var i=u.length*12+20;y.parent().width(i);x.width(z-i+4)};if(!g[0]){return}var o=g[0].options[g[0].selectedIndex].text;var q;for(var m=0,n=g[0].options.length;m<n;m++){q=g[0].options[m];if(o===q.text){h.push('<li class="hide"><a href="#'+m+'">'+q.text+"</a></li>")}else{h.push('<li><a href="#'+m+'">'+q.text+"</a></li>")}}g.parent().after(d.replace("{SELECTED}",o).replace("{LIST}",h.join("")));var k=r.find(c);var j=r.find(e);var p=$(r.find("input")[0]);var l=p.width();t(j,p,l,o);j.click(function(v){var u=$(v.currentTarget),i=u.hasClass("open");if(i){u.removeClass("open");k.addClass("hide")}else{u.addClass("open");k.removeClass("hide")}v.stopPropagation()}).mouseover(function(u){var i=$(u.currentTarget);i.parent().css("background-color","#f2f2f2")}).mouseout(function(u){var i=$(u.currentTarget);i.parent().css("background-color","#fff")});k.click(function(A){var z=A.target,y,u,x;if(z.tagName.toLowerCase()==="a"){y=parseInt(z.href.split("#")[1]);x=$(z).html();g[0].options[y].selected=true;j.html(x+"<span>+</span>");k.find(".hide").removeClass("hide");$(z).parent().addClass("hide");p[0].focus();A.preventDefault();t(j,p,l,x);if(s){s(y,g[0],r)}}});$(document.body).click(function(i){j.removeClass("open");k.addClass("hide")})},b=function(h){var g=h.find("input[type=text]");if(g[0].value===""||g[0].value===g.attr("title")){g[0].value=g.attr("title");g.css("color","#d4d4d4")}g.data("label",g.attr("title")).attr("title","");g.focus(function(){if(this.value===$(this).data("label")){this.value="";$(this).css("color","#000")}}).blur(function(){if(this.value===""){this.value=$(this).data("label");$(this).css("color","#d4d4d4")}})},f=function(h,g){b(h);a(h,g);h.submit(function(j){var i=$(this).find("input")[0];if(i.value===i.rel){i.value=""}})};$.fn.prettyField=function(g){f($(this),g)}})();