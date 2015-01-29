// Sample js file

x = 10; //this is a variable
userName = "Lexi"; //this is a string

teams = new Array();

teams =["Panthers", "Seahawks", "Colts"];

wins =[8, 12, 11];
losses =[4, 1, 2];

console.log(teams);
console.log("wins:" + wins);
console.log("losses:" + losses);

console.log(teams.length);

document.write("The " + teams[0] + " had " + wins[0] + " wins.<br>");
document.write("There are " + teams.length + " teams in the league.<br><br>");


for (var i=0; i<teams.length; i++){
  // console.log(teams[i]);
  // document.write("The " + teams[i] + " had " + wins[i] + " wins.<br>");

  if (wins[i] >= 10) {
    console.log(teams[i] + " are a good team.");
  }
  else {
    console.log(teams[i] + " are not great.");
  }

}
