"use strict";

$(".c-hamburger").click(function () {
  var mobileMenu = document.querySelectorAll('.nav-mob');
  var body = document.getElementsByTagName("body");
  this.classList.toggle('is-active');
  $(".nav-mob").toggleClass("showmenu");
  $(body).toggleClass("bodyleft");
});

$(".wrld").click(function () {
  $(".wrld-ls").toggleClass("wrld-expand");
  $(".wrld > a").toggleClass("rot-ico");
});

$(".search-icon").click(function () {
  $(".searchbox-main").toggleClass("showsearch");
  $(".box").toggleClass("showsearchbox");
});

var body = document.getElementsByTagName("body")[0];
console.log(body);