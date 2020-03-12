upto(); 
function upto() {
  var obj = JSON.parse(JSON.stringify(text));
  document.getElementById("uptoLBH").textContent = obj.destinations[1].upto;
  document.getElementById("uptoIRS").textContent = obj.destinations[5].upto;
  document.getElementById("uptoGAH").textContent = obj.destinations[8].upto;
}
