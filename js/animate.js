var words=[]

$(function()
{
	var timer = setInterval(function()
	{
		$('#scroll').text(words[Math.floor(Math.random()*words.length)] +".");
    	
	},10000); //10000 ms = 10 s
    
});
