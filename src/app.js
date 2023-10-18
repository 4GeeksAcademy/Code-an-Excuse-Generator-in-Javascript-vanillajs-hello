/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "My little nephew"
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my shoes"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function excuseGenerator(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  let whoRandom = excuseGenerator(who);
  let actionRandom = excuseGenerator(action);
  let whatRandom = excuseGenerator(what);
  let whenRandom = excuseGenerator(when);

  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[whoRandom]} ${action[actionRandom]} ${what[whatRandom]} ${when[whenRandom]}`;
};
