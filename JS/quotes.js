const quotes = [
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    translation: "과거에 머물지 말고, 미래를 꿈꾸지 말며, 현재의 순간에 마음을 집중하라.",
    author: "Buddha"
  },
  {
    quote: "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
    translation: "미움은 미움으로 멈추지 않고 오직 사랑으로만 멈춘다. 이것이 영원한 진리다.",
    author: "Buddha"
  },
  {
    quote: "The root of suffering is attachment.",
    translation: "고통의 뿌리는 집착이다.",
    author: "Buddha"
  },
  {
    quote: "Peace comes from within. Do not seek it without.",
    translation: "평화는 내면에서 온다. 밖에서 찾지 말라.",
    author: "Buddha"
  },
  {
    quote: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    translation: "해와 달과 진실은 오래 숨길 수 없다.",
    author: "Buddha"
  },
  {
    quote: "You yourself must strive. The Buddhas only show the way.",
    translation: "스스로 노력해야 한다. 부처는 길을 보여줄 뿐이다.",
    author: "Buddha"
  },
  {
    quote: "Health is the greatest gift, contentment the greatest wealth.",
    translation: "건강은 최고의 선물이고, 만족은 최고의 부다.",
    author: "Buddha"
  },
  {
    quote: "What you think, you become.",
    translation: "당신이 생각하는 것이 곧 당신이 된다.",
    author: "Buddha"
  },
  {
    quote: "Better than a thousand hollow words is one word that brings peace.",
    translation: "천 마디 공허한 말보다 평화를 주는 한 마디가 낫다.",
    author: "Buddha"
  },
  {
    quote: "No one saves us but ourselves.",
    translation: "우리를 구하는 이는 오직 우리 자신뿐이다.",
    author: "Buddha"
  },
  {
    quote: "To understand everything is to forgive everything.",
    translation: "모든 것을 이해하면 모든 것을 용서하게 된다.",
    author: "Buddha"
  },
  {
    quote: "The mind is everything. What you think you become.",
    translation: "마음이 모든 것이다. 생각하는 대로 된다.",
    author: "Buddha"
  },
  {
    quote: "Thousands of candles can be lit from a single candle.",
    translation: "하나의 촛불로 수천 개의 촛불을 밝힐 수 있다.",
    author: "Buddha"
  },
  {
    quote: "If you light a lamp for someone else, it will also brighten your path.",
    translation: "누군가를 위해 등불을 밝히면 당신의 길도 밝아진다.",
    author: "Buddha"
  },
  {
    quote: "There is no path to happiness: happiness is the path.",
    translation: "행복으로 가는 길은 없다. 행복이 곧 길이다.",
    author: "Buddha"
  },
  {
    quote: "Pain is certain, suffering is optional.",
    translation: "고통은 피할 수 없지만, 괴로움은 선택이다.",
    author: "Buddha"
  },
  {
    quote: "Whatever has the nature of arising has the nature of ceasing.",
    translation: "일어나는 것은 반드시 사라진다.",
    author: "Buddha"
  },
  {
    quote: "Silence the angry man with love.",
    translation: "분노한 이를 사랑으로 잠재워라.",
    author: "Buddha"
  },
  {
    quote: "As you walk and eat and travel, be where you are.",
    translation: "걷고 먹고 여행할 때 그 자리에 온전히 있어라.",
    author: "Buddha"
  },
  {
    quote: "A disciplined mind brings happiness.",
    translation: "절제된 마음은 행복을 가져온다.",
    author: "Buddha"
  },
  {
    quote: "Set your heart on doing good.",
    translation: "선을 행하는 데 마음을 두어라.",
    author: "Buddha"
  },
  {
    quote: "Just as a candle cannot burn without fire, men cannot live without a spiritual life.",
    translation: "촛불이 불 없이 탈 수 없듯, 인간은 영적 삶 없이 살 수 없다.",
    author: "Buddha"
  },
  {
    quote: "Work out your own salvation with diligence.",
    translation: "부지런히 스스로를 구하라.",
    author: "Buddha"
  },
  {
    quote: "Nothing can harm you as much as your own thoughts.",
    translation: "당신을 가장 해치는 것은 당신 자신의 생각이다.",
    author: "Buddha"
  },
  {
    quote: "Let go of the past.",
    translation: "과거를 놓아라.",
    author: "Buddha"
  },
  {
    quote: "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
    translation: "삶의 목적은 자신의 목적을 찾고 온 마음을 다하는 것이다.",
    author: "Buddha"
  },
  {
    quote: "When you realize how perfect everything is, you will tilt your head back and laugh at the sky.",
    translation: "모든 것이 완전함을 깨달으면 하늘을 보며 웃게 된다.",
    author: "Buddha"
  },
  {
    quote: "Attachment leads to suffering.",
    translation: "집착은 괴로움을 낳는다.",
    author: "Buddha"
  },
  {
    quote: "Radiate boundless love towards the entire world.",
    translation: "온 세상에 한없는 사랑을 퍼뜨려라.",
    author: "Buddha"
  },
  {
    quote: "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go.",
    translation: "결국 중요한 것은 얼마나 사랑했는지, 얼마나 온화하게 살았는지, 얼마나 아름답게 놓아주었는지이다.",
    author: "Buddha"
  }
];


const quote = document.querySelector("#quote .quote");
const translation = document.querySelector("#quote .translation");
const author = document.querySelector("#quote .author");


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
translation.innerText = todayQuote.translation;
author.innerText = todayQuote.author;