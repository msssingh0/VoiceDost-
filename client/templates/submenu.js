var items=[{
	name:'Coffee',
	href:'/content/food/Coffee',
	src:'/images/coffeetea.png'
},{
	name:'',
	href:'',
	src:''
},{
	name:'',
	href:'',
	src:''
}]

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
	href:'#',
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


Template.submenu.helpers({
	// items:function(){
	// 	return Phrases.find().fetch();
	// }
	items:items,
	head:headerItems,
	foot:footerItems
});