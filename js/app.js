'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
let allLocations = [];
let hoursTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let container = document.getElementById('shops');
let table = document.createElement('table');
container.appendChild(table);

function Shops(name, minCustomers, maxCustomers, avgCookie){
  this.name=name;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCookie=avgCookie;
  this.totalPerhour=[];
  this.dailyTotal=0;
  allLocations.push(this);

}

function tableHeader() {
  
  let headerRow = document.createElement('tr');
  let th = document.createElement('th');
  headerRow.appendChild(th);
  th.textContent=' Table';

  for (var i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = hours[i] ;
    } 
    th = document.createElement('th');
    th.textContent = 'Daily Total' ;
    headerRow.appendChild(th);
    table.appendChild(headerRow);
  // th.textContent = 'Daily Total' ;
  // headerRow.appendChild(th);
  // table.appendChild(headerRow);
  }

  

Shops.prototype.calcTotalCookies = function(){
  for (let i = 0; i < hours.length; i++) {
    let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
    this.dailyTotal += totalCookiePerHour;
    this.totalPerhour.push(totalCookiePerHour)      
  }

}

Shops.prototype.render = function(){
  const container = document.getElementById('shops');
  const table = document.createElement('table');
  container.appendChild(table);
  const tr = document.createElement('tr');
  table.appendChild(tr);

  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.totalPerhour.length; i++){
    td = document.createElement('td');
    td.textContent = this.totalPerhour[i];
    tr.appendChild(td);

  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
    } 

    function tableFooter() {
  
      var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = 'total';
    tr.appendChild(td);
  
    var totalOfTotals = 0;
    for(var i=0; i < hours.length; i++){
      td = document.createElement('td');
      var hourTotal = 0;
      for(var j=0; j < allLocations.length; j++){
        hourTotal += allLocations[j].totalPerhour[i];
      }
      td.textContent = hourTotal;
      totalOfTotals += hourTotal;
      tr.appendChild(td);
    }
  
    td = document.createElement('td');
    td.textContent = totalOfTotals;
    tr.appendChild(td);
      }

const seattle= new Shops('Seatle', 23, 65, 6.3);
const tokyo= new Shops('Tokyo', 3, 24, 1.2);
const dubai= new Shops('Dubai', 11, 38, 3.7);
const paris= new Shops('Paris', 20, 38, 2.3);
const lima= new Shops('Lima', 2, 16, 4.6);
tableHeader();
seattle.calcTotalCookies();
seattle.render();

tokyo.calcTotalCookies();
tokyo.render();

dubai.calcTotalCookies();
dubai.render();

paris.calcTotalCookies();
paris.render();

lima.calcTotalCookies();
lima.render();
tableFooter();

// const seatle = {
//   name: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookie: 6.3,
//   totalPerhour: [],
//   dailyTotal: 0,
//   calcTotalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
//       this.dailyTotal += totalCookiePerHour;
//       this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)      
//     }
//   },
//   render: function () {
//     this.calcTotalCookies();
//     const container = document.getElementById('seatle');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for (let i = 0; i < hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent  = this.totalPerhour[i];
//     } 
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total: ${this.dailyTotal}`;

//   }
// }

// const tokyo = {
//   name: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookie: 1.2,
//   numofCustomers: 0,
//   totalPerhour: [],
//   dailyTotal: 0,
//   calcTotalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
//       this.dailyTotal += totalCookiePerHour;
//       this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)      
//     }
//   },
//   render: function () {
//     this.calcTotalCookies();
//     const container = document.getElementById('tokyo');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     let sum=0;
//     for (let i = 0; i < hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent  = this.totalPerhour[i];
//     } 
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total: ${this.dailyTotal}`;

//   }
// }

// const dubai = {
//   name: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookie: 3.7,
//   numofCustomers: 0,
//   totalPerhour: [],
//   dailyTotal: 0,
//   calcTotalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
//       this.dailyTotal += totalCookiePerHour;
//       this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)
//     }
//   },
//   render: function () {
//     this.calcTotalCookies();
//     const container = document.getElementById('dubai');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
    
//     for (let i = 0; i < hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent  = this.totalPerhour[i];
//     } 
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total: ${this.dailyTotal}`;

//   }
// }

// const paris = {
//   name: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookie: 2.3,
//   numofCustomers: 0,
//   totalPerhour: [],
//   dailyTotal: 0,
//   calcTotalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
//       this.dailyTotal += totalCookiePerHour;
//       this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)
//     }
//   },
//   render: function () {
//     this.calcTotalCookies();
//     const container = document.getElementById('paris');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
    
//     for (let i = 0; i < hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent  = this.totalPerhour[i];
//     } 
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total: ${this.dailyTotal}`;

//   }
// }

// const lima = {
//   name: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookie: 4.6,
//   numofCustomers: 0,
//   totalPerhour: [],
//   dailyTotal: 0,
//   calcTotalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
//       this.dailyTotal += totalCookiePerHour;
//       this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)
//     }
//   },
//   render: function () {
//     this.calcTotalCookies();
//     const container = document.getElementById('lima');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
    
//     for (let i = 0; i < hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent  = this.totalPerhour[i];
//     } 
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total: ${this.dailyTotal}`;

//   }
// }


// seatle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
