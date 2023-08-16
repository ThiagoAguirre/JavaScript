function f1() {
  setTimeout(function () {
    console.log("f1");
  }, 1000);
}
function f2() {
  setTimeout(function () {
    console.log("f1");
  }, 1000);
}
function f3() {
  setTimeout(function () {
    console.log("f1");
  }, 1000);
}

f1();
f2();
f3();
console.log("Hello World!!!");
