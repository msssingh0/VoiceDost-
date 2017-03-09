Router.route('/',{name:'home'});
Router.route('/content/:_id',function(){
	this.render('submenu',{
		data:function(){
			//console.log(Phrases.find({name:this.params._id}).fetch());
			return Phrases.find({name:this.params._id}).fetch();
		}
	});
});
Router.route('/content/:_id/:_id2',function(){
	this.render('content',{
		data:function(){
			//console.log(Phrases.find({name:this.params._id}).fetch());
			return Phrases.find({subname:this.params._id2}).fetch();
		}
	});
});
Router.route('/fav',{name:'fav'});