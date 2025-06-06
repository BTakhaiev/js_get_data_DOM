'use strict';

const population = document.querySelectorAll('.population');
const populationNum = [];

for (let i = 0; i < population.length; i++) {
  populationNum.push(Number(population[i].textContent.replace(/,/g, '')));
}

const sum = populationNum.reduce((acc, value) => acc + value, 0);
const average = Math.round(sum / populationNum.length);
const total = document.querySelector('.total-population');
const aver = document.querySelector('.average-population');

total.textContent = `${sum.toLocaleString('en-US')}`;

aver.textContent = `${average.toLocaleString('en-US')}`;
