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

Template.fav.helpers({
	items:function(){
		return Fav.find().fetch();
	},
	head:headerItems,
	foot:footerItems
});

Template.fav.events({
	'click #speak':function(){
		TTS.speak(this.text);
	},
	'click #star':function(){
		Fav.remove({text:this.text});
	}
});