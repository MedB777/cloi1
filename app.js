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
var offersList = [
	{
		vertical: 'Dating',
		url: 'https://datefirstfinder.com/?u=fy1nn7x&o=mbepd9x&t=cloi1'
	},
	{
		vertical: 'Crypto',
		url: 'https://profitisthere1.life/?u=fy1nn7x&o=mbmpd9x&t=cloi1'
	},

	{
		vertical: 'Male Enhancement',
		url: 'https://truemaleenchance1.life/?u=fy1nn7x&o=mbhpd9x&t=cloi1'
	},
	{
		vertical: 'Mainstream',
		url: 'https://your-best-prize-boxes.life/?u=fy1nn7x&o=mbkpd9x&t=cloi1'
	},
	{
		vertical: 'Adult Games',
		url: 'https://the-adult-lovers1.com/?u=fy1nn7x&o=mbtpd9t&t=cloi1'
	},
	{
		vertical: 'Gambling',
		url: 'https://prizesforyouhere.life/?u=fy1nn7x&o=mbdpd91&t=cloi1'
	},
	{
		vertical: 'Gay Dating',
		url: 'https://newhotmen.com/?u=fy1nn7x&o=mbrpd91&t=cloi1'
	},
	{
		vertical: 'Casual Dating',
		url: 'https://new-dates.com/?u=fy1nn7x&o=mbbpd91&t=cloi1'
	},
	{
		vertical: 'Cams',
		url: 'https://bestyourcams.com/?u=fy1nn7x&o=mbppd91&t=cloi1'
	}
]

var thisOffer = offersList[getOffer(9)].url
var popunder = {
	expire: 12,
	url: thisOffer
}

// CPA Offers
var cpaOffersList = [
	{
		title: 'Test Offer 1 - lorekfdjh fhjdkfksdj nfdf',
		desc:
			'Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 1',
		src: 'images/cta.jpg',
		url: '#1',
		cta: 'Click Here 1'
	},
	{
		title: 'Test Offer 2 - lorekfdjh fhjdkfksdj nfdf',
		desc:
			'Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 2',
		src: 'images/cta.jpg',
		url: '#2',
		cta: 'Click Here 2'
	},
	{
		title: 'Test Offer 3 - lorekfdjh fhjdkfksdj nfdf',
		desc:
			'Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 3',
		src: 'images/cta.jpg',
		url: '#3',
		cta: 'Click Here 3'
	},
	{
		title: 'Test Offer 4 - lorekfdjh fhjdkfksdj nfdf',
		desc:
			'Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 4',
		src: 'images/cta.jpg',
		url: '#4',
		cta: 'Click Here 4'
	},
	{
		title: 'Test Offer 5 - lorekfdjh fhjdkfksdj nfdf',
		desc:
			'Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 1 - Win an iPhone right here you dumbass! 5',
		src: 'images/cta.jpg',
		url: '#5',
		cta: 'Click Here 5'
	}
]

var cpaOffer = cpaOffersList[getOffer(5)]
$(document).ready(function () {
	$('#title').text(cpaOffer.title)
	$('#desc').text(cpaOffer.desc)
	$('.url').attr('href', cpaOffer.url)
	$('#cta').text(cpaOffer.cta)
	$('#cta').attr('href', cpaOffer.url)
	$('#img').attr('src', cpaOffer.src)
	$('#img').attr('alt', cpaOffer.title)
})

var CBOffers = [
	{
		id: 'biorhythm',
		url: 'https://69c1ekg4dw8xfxf2tbx16gvhf1.hop.clickbank.net/',
		url2: 'https://hop.clickbank.net/?affiliate=mb9510&vendor=biorhythm',
		name: 'S T O P - Forget All About Manifestation And Numerology...',
		affpage: 'https://thebiorhythm.com/jv',
		payout: 39,
		title: 'Powerful App Predicts the Future. Works For Everyone',
		desc:
			'Little Known Discoveries and Secrets that Will Give You Insights into What is Heading Your Way in 2021 ...'
	},
	{
		id: 'hissecret',
		url: 'https://a789afp69v9uan4axgu1dfon8s.hop.clickbank.net/',
		name:
			'His Secret Obsession - Incredible Conversions For Female Cold Traffic',
		affpage: 'https://HisSecretObsession.com/aff',
		payout: 51,
		title: 'Become His Secret Obsession!',
		desc:
			'How to Make ANY Man Obssessed with YOU - Proven Strategies and Secrets to Make Him Think Only About YOU. Reserve Your Sport Today!'
	},
	{
		id: 'resurge',
		url: 'https://890cbeg-c08v9k7eqexoo99l7w.hop.clickbank.net/',
		url2: 'https://hop.clickbank.net/?affiliate=mb9510&vendor=resurge&lid=3',
		name: 'Resurge - The Godzilla Of Offers',
		affpage: 'https://resurge.com/affiliates',
		payout: 119,
		title: 'Unbelievable New Secrets Revealed That Will Make You a New Person',
		desc:
			'You Will Not Believe What This New Discoveries Show - This is Life Changing...'
	},
	{
		id: 'fbtonic',
		url: 'https://f4522gn6ip3o8t03pm3hx9bp5t.hop.clickbank.net/',
		name: 'Okinawa Flat Belly Tonic',
		affpage: 'http://flatbellytonic.com/affiliates/',
		payout: 126,
		title: 'Drinking This Before Breakfast Burns 1lb a Day?',
		desc:
			'Discover the “Done for You” Japanese Tonic to Melt 3 Pounds Every 3.5 Days'
	},
	{
		id: 'tedsplans',
		url: 'https://7f371lhzbwbm8magj65dpyug79.hop.clickbank.net/',
		name:
			'Tedswoodworking - Highest Converting Woodworking Site On The Internet!',
		affpage: 'http://tedswoodworking.com/aff',
		payout: 62,
		title: 'The Largest Collection of Wood Plans!',
		desc: 'Watch This Video Till The End To Get Full Access!'
	}
]
