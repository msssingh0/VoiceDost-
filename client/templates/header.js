var items=[{
	first:'yes',
	href:'',
	src:''
},{
	first:'no',
},{
	href:'',
	src:''
}];

Template.header.helpers({
	items:items,
	first:function(){
		if(this.first=='yes')
			return true;
		return false;
	}
});

