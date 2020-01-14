const sectionScan = document.getElementById('sectionScan');

const buttonScan = document.createElement('button');

buttonScan.addEventListener('click', () => {
    console.log('Test');
    alert('Test');
});

sectionScan.appendChild(buttonScan);

