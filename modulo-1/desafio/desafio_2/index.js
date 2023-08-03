let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A


/*
const VarA_ = varA
varA = varB
varB = varC
varC = VarA_*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA,varB,varC);