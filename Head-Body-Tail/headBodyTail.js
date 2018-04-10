function verifySubstrs(mainStr, head, body, tail) {
return mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail) ? "My head, body, and tail." : "Incomplete.";
}





console.log(verifySubstrs("Onomatopeia", "on", "mato", "ia"));

console.log(verifySubstrs("Centipede", "Cent", "tip", "pede"));