document.getElementById('calculateElectricButton').addEventListener('click', function() { var charge = parseFloat(document.getElementById('charge').value); var velocity = parseFloat(document.getElementById('velocity').value); var magneticField = parseFloat(document.getElementById('magneticField').value); var angle = parseFloat(document.getElementById('angle').value);

var force = charge * velocity * magneticField * Math.sin(angle * Math.PI / 180);

document.getElementById('resultado2').innerHTML = 'A força magnética é de ' + force.toFixed(2) + ' Newtons.'; });