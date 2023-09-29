function volume_sphere() {
    //Write your code here
	 const radius = parseFloat(document.getElementById("radius").value);
    const volumeInput = document.getElementById("volume");
	if (isNaN(radius) || radius <= 0) {
        return;
    }
	const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
