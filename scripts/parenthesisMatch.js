function parenthesisMatch(s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  for (let i of s.split("")) {
    if (["(", "["].indexOf(i) > -1) {
      stack.push(i);
    } else {
      if (
        (i === "]" && stack[stack.length - 1] === "[") ||
        (i === ")" && stack[stack.length - 1] === "(")
      ) {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
}

console.log("parenthesis check --- ", parenthesisMatch("[[[[[[]]]]]]]"));
console.log("parenthesis check --- ", parenthesisMatch("[[[[[[[]]]]]]]"));
