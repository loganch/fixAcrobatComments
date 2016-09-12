//Fix Comments
//2015-2016 - Logan Hampton

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

	    	//Loop through annotations, finding Carets, Text ("Popups"), and Highlights
            //to save their text and re-enter it to fix large sizes
	    	for (var i = 0; i < annots.length; i++) {
	    		if (annots[i].type === "Caret" || annots[i].type === "Text" ||
                    annots[i].type === "Highlight") {
	    			console.println(annots[i].type + " contents are: " + annots[i].contents);
	    			saveText = annots[i].contents;
	    			annots[i].contents = saveText;
	    		}
	    	}
    	}
    	app.alert("Comments Fixed!")
 	});