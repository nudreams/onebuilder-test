const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const lineWidth = document.getElementById('lineWidth');
const sizeDisplay = document.getElementById('sizeDisplay');
const clearBtn = document.getElementById('clearBtn');
const eraserBtn = document.getElementById('eraserBtn');
const paintBtn = document.getElementById('paintBtn');
const saveBtn = document.getElementById('saveBtn');

// 캔버스 크기 설정
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let painting = false;
let isEraser = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = lineWidth.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isEraser ? '#ffffff' : colorPicker.value;

    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// 이벤트 리스너
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

// 터치 지원 (모바일)
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startPosition(e.touches[0]);
}, { passive: false });
canvas.addEventListener('touchend', finishedPosition);
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    draw(e.touches[0]);
}, { passive: false });

// 툴 제어
lineWidth.addEventListener('input', () => {
    sizeDisplay.textContent = `${lineWidth.value}px`;
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

eraserBtn.addEventListener('click', () => {
    isEraser = true;
    eraserBtn.classList.add('active');
    paintBtn.classList.remove('active');
});

paintBtn.addEventListener('click', () => {
    isEraser = false;
    paintBtn.classList.add('active');
    eraserBtn.classList.remove('active');
});

saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = canvas.toDataURL();
    link.click();
});
