console.log(true && true && "arroz " && 21);

const usuario = "thiago";
const senha = 123456;

const login = usuario === "thiago" && senha === "123456";

console.log(login);
console.log(!!true);

function falao1() {
  return "Hello world";
}

let vaiExecutar = "arroz";

console.log(vaiExecutar && falao1());
