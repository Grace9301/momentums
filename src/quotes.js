'use strict';

const quotes = [
  {
    quote:
      'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde',
  },
  {
    quote:
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    quote:
      'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    author: 'Martin Luther King',
  },
  {
    quote:
      'If we did all the things we are capable of, we would literally astound ourselves.',
    author: 'Thomas A. Edison',
  },
  {
    quote:
      'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Teresa',
  },
  {
    quote: 'Tomorrow is always fresh, with no mistakes in it.',
    author: 'L.M. Montgomery',
  },
  {
    quote:
      'Progress is impossible without change, and those who cannot change their minds cannot change anything.',
    author: 'George Bernard Shaw',
  },
  {
    quote:
      'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    author: 'Mark Twain',
  },
  {
    quote:
      'Tell me and I forget, teach me and I may remember, involve me and I learn.',
    author: 'Benjamin Franklin',
  },
];

const quote = document.querySelector('.quote span:first-child');
const verse = document.querySelector('.quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
verse.innerText = `< ${todaysQuote.author} >`;
