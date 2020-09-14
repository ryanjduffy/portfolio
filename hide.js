(function () {
	const moveThreshold = 25;
	function move (node, x, y) {
		const rect = node.getBoundingClientRect();
		const dx = x > rect.left && x < rect.right ? 0 : Math.max(rect.left - x, x - rect.right);
		const dy = y > rect.top && y < rect.bottom ? 0 : Math.max(rect.top - y, y - rect.bottom);

		const d = Math.sqrt(dx*dx + dy*dy);
		const ratio = Math.max(moveThreshold * 3, Math.min(moveThreshold * 10, d)) / (moveThreshold * 10);

		node.style.opacity = ratio;
	}

	document.addEventListener('DOMContentLoaded', function () {
		const nodes = Array.from(document.querySelectorAll('[data-hide]'));

		document.addEventListener('mousemove', (ev) => {
			nodes.forEach(n => move(n, ev.clientX, ev.clientY));
		});
	});
})();