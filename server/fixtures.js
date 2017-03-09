var items=[{
	name:'Food',
	subname:'Coffee',
	text:'I would like a Latte'},{	name:'Food',	subname:'Coffee',	text:'Just plain black coffee, please'},{
	name:'Food',
	subname:'Coffee',
	text:'I would like a cappuccino'

},
{
	name:'Food',
	subname:'Coffee',
	text:'I would like a mochaccino'

},
{
	name:'Food',
	subname:'Coffee',
	text:'I would like an expresso'

},
{
	name:'Food',
	subname:'Coffee',
	text:'Just plain black coffee with cream and sugar on the side, please'

},
{
	name:'Food',
	subname:'Coffee',
	text:'Some Ice Tea for me please.'

},
{
	name:'Food',
	subname:'Coffee',
	text:'Would you like a cup of coffee'

}];

if(Phrases.find().count()==0)
for(var i=0,len=items.length;i<len;i++){
	Phrases.insert(items[i]);
}