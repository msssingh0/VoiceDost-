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

Template.content.helpers({
	items:function(){
		return Phrases.find().fetch();
	},
	head:headerItems,
	foot:footerItems
});

Template.content.events({
	'click #speak':function(){
		TTS.speak(this.text);
	},
	'click #addnew':function(event){
		event.preventDefault();
		var Text=new Object();
		Text.name=Phrases.findOne().name;
		Text.subname=Phrases.findOne().subname;
		Text.text=$('#inputText').val();
		Phrases.insert(Text);
	},
	'click #star':function(){
		if(Fav.find({text:this.text}).fetch().length=0)
		Fav.insert(this);
	}
});