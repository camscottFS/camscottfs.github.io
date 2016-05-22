$('.photoshop.circle').circleProgress({
    value: 0.6,
    fill: { color: '#0681c4' , gradientAngle: Math.PI / 4 },
	emptyFill: '#fff',
}).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').html(parseInt(60 * progress));
});

$('.illustrator.circle').circleProgress({
    value: 0.4,
    fill: { color: '#0681c4' , gradientAngle: Math.PI / 4 },
	emptyFill: '#fff',
}).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').html(parseInt(40 * progress));
});

$('.html.circle').circleProgress({
    value: 0.9,
    fill: { color: '#0681c4' , gradientAngle: Math.PI / 4 },
	emptyFill: '#fff',
}).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').html(parseInt(90 * progress));
});

$('.css.circle').circleProgress({
    value: 0.8,
    fill: { color: '#0681c4' , gradientAngle: Math.PI / 4 },
	emptyFill: '#fff',
}).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').html(parseInt(80 * progress));
});

$('.js.circle').circleProgress({
    value: 0.5,
    fill: { color: '#0681c4' , gradientAngle: Math.PI / 4 },
	emptyFill: '#fff',
}).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').html(parseInt(50 * progress));
});