/**
 * Copyright (c) 2018-present Triple AI Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// Closes the responsive menu on toggler click.
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggler:visible').click();
});

// Change nav menu background on toggler click.
$('.navbar-toggler').click(function() {
  $('.navbar').toggleClass('bg-light');
});

// Change navbar when it reaches the intro text.
$(function() {
  const docElem = document.documentElement;
  const navbar = $('.navbar');
  const changeNavbarOn = $('header .intro-lead-in').offset().top - navbar.height();

  let didScroll = false;

  function init() {
    window.addEventListener('scroll', function(event) {
      if(!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }, false);
  }

  function scrollPage() {
    var sy = window.pageYOffset || docElem.scrollTop;
    if (sy >= changeNavbarOn) {
      navbar.addClass('navbar-onscroll');
    } else {
      navbar.removeClass('navbar-onscroll');
    }
    didScroll = false;
  }

  init();
});
