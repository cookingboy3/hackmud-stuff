function(context, args) // r:"",m:""
{
	if (args.m == null && args.r == null){ //this checks for the user not entering any parameters and gives them syntax for the command.
		return{ok:true,msg:"mynameisroot.pm basic syntax \n mynameisroot.pm{r:\"recipient\",m:\"message\"}"}
	}
	else if (args.m == null|| args.r == null){ // this checks if either parameter is missing and complains if so.
		return{ok:false,msg:"Parameter missing."}
	}
	else{ //this sends the chat message provided the above 2 conditions are NOT met
		#s.chats.tell({to:args.r,msg:args.m})
		return{ok:true,msg:"Sent " + #s.soron.color_utils({colorize:args.m, use_color:'F'}) + " to " + #s.soron.color_utils({colorize:args.r, use_color:'L'})}
	}
}
