export function generateResultText(calculeResult) {
  let resultText = "";

  if (calculeResult === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (calculeResult !== "no-calc") {
    resultText = "Result: " + calculeResult;
  }
  return resultText;
}

export function outputResult(resultText) {
  const output = document.getElementById("result");
  output.textContent = resultText;
}
