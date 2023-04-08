/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */

document.title = 'Dynamic Javascript Calculator'

var UI = document.createElement('div');
UI.setAttribute('class', 'black shadowed stuff-box');
UI.setAttribute('id', 'UI')
document.body.appendChild(UI);

var results = document.createElement('div');
results.setAttribute('id', 'results')
document.body.appendChild(results);

var h2 = document.createElement('h2');
h2.textContent = 'JavaScript Calculator';
UI.appendChild(h2);

var p = document.createElement('p');
p.textContent = `Create An Expression:`;
UI.appendChild(p);

var input1 = document.createElement('input');
input1.setAttribute("type", "number");
input1.setAttribute("placeholder", 5);
UI.appendChild(input1);

var operators = ['+', '-', '*', '/', '%', '**'];

var select = document.createElement('select');
UI.appendChild(select);

for (var operator of operators) {
    var option = document.createElement('option');
    option.textContent = `${operator}`;
    option.setAttribute("value", `${operator}`)
    select.append(option);
}

var input2 = document.createElement('input');
input2.setAttribute("type", "number");
input2.setAttribute("placeholder", 26);
UI.appendChild(input2);

var button = document.createElement('button');
button.setAttribute("type", "button");
button.setAttribute("onClick", "compute()");
button.textContent = "Compute";
UI.appendChild(button);

var p = document.createElement('p');
p.textContent = ``;
UI.appendChild(p);

var input = document.createElement('input');
input.setAttribute("type", "color");
input.setAttribute("id", "colorpicker");
input.setAttribute("value", "0000ff");
UI.appendChild(input);

var span = document.createElement('span');
span.textContent = `Color of new result <div>`;
UI.appendChild(span);

var compute = function() {
    if (input1.value && input2.value) {
        var div = document.createElement('div');
        div.setAttribute("onclick", "remove(this)");
        div.setAttribute('class', `white shadowed stuff-box`);
        div.setAttribute('style', `background-color:${input.value};`);
        var target = document.querySelector('#results');
        if (target.firstElementChild){
            target.insertBefore(div, target.firstElementChild);
        } else {
            target.appendChild(div);
        }
        var p = document.createElement('p');
        p.textContent = `${Date() + " " + input1.value + " " + select.value + " " + input2.value} = ${eval(input1.value + select.value + input2.value)}`;
        div.appendChild(p);
    } else {
        var div = document.createElement('div');
        div.setAttribute("onclick", "remove(this)");
        div.setAttribute('class', `red shadowed stuff-box`);
        var target = document.querySelector('#results');
        if (target.firstElementChild){
            target.insertBefore(div, target.firstElementChild);
        } else {
            target.appendChild(div);
        }
        var p = document.createElement('p');
        p.textContent = `${Date()} Error! Missing one or more operands`;
        div.appendChild(p);
    }
}

var remove = function(me) {
    var element = me;
    element.parentNode.removeChild(element);
}