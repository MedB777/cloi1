// Helper Function
getOffer = num => Math.floor(Math.random() * num)

// OneSignal
window.OneSignal = window.OneSignal || []
OneSignal.push(function () {
	OneSignal.init({
		appId: 'b315dc1a-d66e-4966-99dc-597d128bcae7'
	})
})

// Los Pollos Smartlink

// CPA Offers
var cpaOffersList = [
	{
		title: 'Test Offer 1',
		desc: 'Win an iPhone right here you dumbass! 1',
		src: 'images/img.png',
		url: '#1'
	},
	{
		title: 'Test Offer 2',
		desc: 'Win an iPhone right here you dumbass! 2',
		src: 'images/img.png',
		url: '#2'
	},
	{
		title: 'Test Offer 3',
		desc: 'Win an iPhone right here you dumbass! 3',
		src: 'images/img.png',
		url: '#3'
	},
	{
		title: 'Test Offer 4',
		desc: 'Win an iPhone right here you dumbass! 4',
		src: 'images/img.png',
		url: '#4'
	}
]

var cpaOffer = cpaOffersList[getOffer(4)]
console.log(cpaOffer)
$(document).ready(function () {
	$('#title').text(cpaOffer.title)
	$('#desc').text(cpaOffer.desc)
	$('.url').attr('href', cpaOffer.url)
	$('#img').attr('src', cpaOffer.src)
	$('#img').attr('alt', cpaOffer.title)
})
