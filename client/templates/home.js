var headerItems=[{
	first:'yes',
	href:'/fav',
	src:'/images/Favourites.png'
},{
	first:'no',
	href:'#',
	src:'/images/voicechange.png'
},{
	first:'no',
	href:'#',
	src:'/images/history.png'
}];

var footerItems=[{
	first:'yes',
	href:'/',
	src:'/images/BackArrow.png'
},{
	first:'no',
	href:'/',
	src:'/images/HomeIcon.png'
},{
	first:'no',
	href:'#',
	src:'/images/Allapps.png'
}];

Template.home.helpers({
	head:headerItems,
	foot:footerItems
});