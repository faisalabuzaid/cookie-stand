'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

const seatle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  totalPerhour: [],
  dailyTotal: 0,
  calcTotalCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
      this.dailyTotal += totalCookiePerHour;
      this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)      
    }
  },
  render: function () {
    this.calcTotalCookies();
    const container = document.getElementById('seatle');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent  = this.totalPerhour[i];
    } 
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${this.dailyTotal}`;

  }
}

const tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookie: 1.2,
  numofCustomers: 0,
  totalPerhour: [],
  dailyTotal: 0,
  calcTotalCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
      this.dailyTotal += totalCookiePerHour;
      this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)      
    }
  },
  render: function () {
    this.calcTotalCookies();
    const container = document.getElementById('tokyo');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    let sum=0;
    for (let i = 0; i < hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent  = this.totalPerhour[i];
    } 
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${this.dailyTotal}`;

  }
}

const dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  numofCustomers: 0,
  totalPerhour: [],
  dailyTotal: 0,
  calcTotalCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
      this.dailyTotal += totalCookiePerHour;
      this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)
    }
  },
  render: function () {
    this.calcTotalCookies();
    const container = document.getElementById('dubai');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    
    for (let i = 0; i < hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent  = this.totalPerhour[i];
    } 
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${this.dailyTotal}`;

  }
}

const paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookie: 2.3,
  numofCustomers: 0,
  totalPerhour: [],
  dailyTotal: 0,
  calcTotalCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
      this.dailyTotal += totalCookiePerHour;
      this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)
    }
  },
  render: function () {
    this.calcTotalCookies();
    const container = document.getElementById('paris');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    
    for (let i = 0; i < hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent  = this.totalPerhour[i];
    } 
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${this.dailyTotal}`;

  }
}

const lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookie: 4.6,
  numofCustomers: 0,
  totalPerhour: [],
  dailyTotal: 0,
  calcTotalCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let totalCookiePerHour = Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie);
      this.dailyTotal += totalCookiePerHour;
      this.totalPerhour.push(`${hours[i]} : ${totalCookiePerHour} cookies`)
    }
  },
  render: function () {
    this.calcTotalCookies();
    const container = document.getElementById('lima');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    
    for (let i = 0; i < hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent  = this.totalPerhour[i];
    } 
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total: ${this.dailyTotal}`;

  }
}


seatle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
