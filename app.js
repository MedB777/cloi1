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
		url: 'https://datefirstfinder1.com/?u=fy1nn7x&o=mbepd9x&t=cloi1'
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
