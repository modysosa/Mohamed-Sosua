$(function(){$(".toggle-sidebar").on("click",function(){$(".content-area, .sidebar").toggleClass("no-sidebar")}),$(".toggle-submenu").on("click",function(){$(this).find(".fa-angle-right").toggleClass("down"),$(this).next(".child-links").slideToggle()}),$(document).ready(function(){$("#notifications").on("click",function(){var e="true"===$(this).attr("aria-expanded");$(this).attr("aria-expanded",!e),$(this).next(".dropdown-menu").toggleClass("show")})}),$(document).ready(function(){$("#usermenu").on("click",function(){var e="true"===$(this).attr("aria-expanded");$(this).attr("aria-expanded",!e),$(this).next(".dropdown-menu").toggleClass("show")})}),$(".toggle-fullscreen").on("click",function(){$(this).toggleClass("full-screen"),($(this).hasClass("full-screen")?openFullscreen:closeFullscreen)()}),$(".toggle-settings").on("click",function(){$(this).find("i").toggleClass("fa-spin"),$(this).parent().toggleClass("hide-settings")});var e=[],n=($(".color-otpions li").each(function(){e.push($(this).data("theme"))}),$(".color-otpions li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$("body").removeClass(e.join(" ")).addClass($(this).data("theme"))}),[]);$(".font-options select option").each(function(){n.push($(this).val())}),$(".font-options select").on("change",function(){console.log($(this).find("option:selected").val()),$("body").removeClass(n.join(" ")).addClass($(this).find("option:selected").val())})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}
//# sourceMappingURL=main.js.map
