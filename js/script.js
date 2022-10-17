// Copyright (c) 2020 Parsa Tahavori All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  var base = parseInt(document.getElementById('base-of-triangle').value)
  var hight = parseInt(document.getElementById('hight-of-triangle').value)
  // process
  const area = hight * base
  const perimeter = (hight + base)
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area +' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter +' cm'
}
