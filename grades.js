
document.title = 'Grades'


function grades(scores) {

 //*   The maximum score
    var max = scores[0];
    for (var s of scores) {
        if (s > max) {
        max = s;
        }
    }

    var decile = max / 10;
    var letterGrades = {A: [], B: [], C: [], D: [], F: []};

    for (var student in scores) {
        if (scores[student] >= max - decile) {
            letterGrades.A.push(["Student #" + student, scores[student]]);
        } else if (scores[student] >= max - (2 * decile)){
            letterGrades.B.push(["Student #" + student, scores[student]]);
        } else if (scores[student] >= max - (3 * decile)){
            letterGrades.C.push(["Student #" + student, scores[student]]);
        } else if (scores[student] >= max - (4 * decile)){
            letterGrades.D.push(["Student #" + student, scores[student]]);
        } else {
            letterGrades.F.push(["Student #" + student, scores[student]]);
        }
    }



/*  Write a function name 'grades' takes a list of scores and then assigns letter grades such that:
 *
 *  Report the following information:
 *   Number of submissions made

 *   Number of scores that fall into each letter grade
 *   Each student's letter grad and score where students are identified by the
 *   order of their submission (student #0, student #1, etc.)
 */
 var white = document.createElement('div');
 white.setAttribute('class', 'white shadowed stuff-box');
 document.body.appendChild(white);

 var p = document.createElement('p');
 p.textContent = `There were ${scores.length} submissions made.`;
 white.appendChild(p);

 var colors = {A: 'blue', B: 'green', C: 'yellow', D: 'red', F: 'black'};

 for (var grade of Object.keys(letterGrades)) {
    var n = letterGrades[grade].length;

    var div = document.createElement('div');
    div.setAttribute('class', `${colors[grade]} shadowed stuff-box`);
    document.body.appendChild(div);

    var p = document.createElement('p');
    p.textContent = `${n} student${n == 1 ? '' : 's'} got a grade of ${grade}`;
    div.appendChild(p);

    var ul = document.createElement('ul');
    div.appendChild(ul);

    for (var student of letterGrades[grade]) {
        var li = document.createElement('li');
        li.textContent = `   ${student[0]} got ${student[1]} points`;
        ul.appendChild(li);
    }
 }

}

const scores = [75, 74, 80, 75, 47, 37, 73, 34, 70, 60, 53, 77, 72, 67];

grades(scores);

/* Hints:
 * To loop over an array by index, use 'for (var i in array)'
 * To loop over an array by value, use 'for (var v of array)'
 * The length of an array is given by its '.length' property as in Java
 * Append items to an array with the '.push()' method
 * For our purposes, objects are constructed identically to Python dictionaries:
 *  var obj = {one: 1, two: 'dos', three: []};
 * The "keys" of an object can be retrieved through the 'Object.keys()' function
 */