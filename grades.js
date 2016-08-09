var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var aA = 0;
var bB = 0;
var cC = 0;
var dD = 0;
var fF = 0;
var highestGrade = 0;
var lowestGrade =  100;
for (var i = 0; i < scores.length; i++) {
	 if ((50 < scores[i]) && (scores[i] <=60)) {
	 		fF += 1;
	 }
	 if ((61 < scores[i]) && (scores[i] <= 70)) {
	 		dD += 1;
	 }
	  if ((71 < scores[i]) && (scores[i] <= 80)) {
	 		cC += 1;
	 }
	 if ((81 < scores[i]) && (scores[i] <= 90)) {
	 		bB += 1;
	 }
	 if ((91 < scores[i]) && (scores[i] <= 100)) {
	 		aA += 1;
	 }
	if (scores[i] > highestGrade) {
		highestGrade = scores[i];
	}
	if (scores[i] < lowestGrade) {
	lowestGrade = scores[i];
	}
}
console.log("student grade F is",fF);
console.log("student grade D is",dD);
console.log("student grade C is",cC);
console.log("student grade B is",bB);
console.log("student grade A is",aA);

console.log("student with low grade",lowestGrade);
console.log("student with highest grade",highestGrade);