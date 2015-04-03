//Fix Comments
//2015 - Logan Hampton

app.addToolButton({
	cName: "Fix Comments",
	cExec: "fixComments()",
	cTooltext: "GIM Fix Comments",
	cEnable: true,
	cLabel: "GIM Fix Comments"
});


var fixComments = app.trustedFunction(
    function() {


    	var annots, saveText;
    	//Get annotations
    	//console.show();
    	for (var pg = 0; pg < this.numPages; pg++) {
	    	annots = this.getAnnots({
	    		nPage: pg
	    	});
	    	
	    	if (annots === null) {
	    		continue;
	    	}

	    	//Loop through annotations, find Carets and re enter the text for them
	    	//to fix formatting problems
	    	for (var i = 0; i < annots.length; i++) {
	    		if (annots[i].type === "Caret") {
	    			console.println("Caret contents are: " + annots[i].contents);
	    			saveText = annots[i].contents;
	    			annots[i].contents = saveText;
	    		}
	    	}
    	}
    	app.alert("Comments Fixed!")
 	});