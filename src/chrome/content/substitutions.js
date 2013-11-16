(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
    	v = v.replace(/\bthe witnesses\b/g, "these dudes I know");
        v = v.replace(/\bThe Witnesses\b/g, "These dudes I know");
    	v = v.replace(/\bthe Witnesses\b/g, "these dudes I know");
        v = v.replace(/\bThe witnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitnesses\b/g, "these dudes I know");
        v = v.replace(/\bWitnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitness\b/g, "this dude I know");
        v = v.replace(/\bWitness\b/g, "This dude I know");
        v = v.replace(/\ballegedly\b/g, "kinda probably");
        v = v.replace(/\bAllegedly\b/g, "Kinda probably");
        v = v.replace(/\bnew study\b/g, "Tumblr post");
        v = v.replace(/\bNew study\b/g, "Tumblr post");
        v = v.replace(/\bnew studies\b/g, "Tumblr posts");
        v = v.replace(/\bNew studies\b/g, "Tumblr posts");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\bspace\b/g, "spaaace");
        v = v.replace(/\bSpace\b/g, "Spaaace");
        v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
        v = v.replace(/\bgoogle glass\b/g, "virtual boy");
        v = v.replace(/\bgoogle Glass\b/g, "virtual boy");
        v = v.replace(/\bGoogle glass\b/g, "Virtual Boy");
        v = v.replace(/\bsmartphones\b/g, "pokédexes");
        v = v.replace(/\bSmartphones\b/g, "Pokédexes");
        v = v.replace(/\bsmartphone\b/g, "pokédex");
        v = v.replace(/\bSmartphone\b/g, "Pokédex");
        v = v.replace(/\belectric\b/g, "atomic");
        v = v.replace(/\bElectric\b/g, "Atomic");
        v = v.replace(/\bsenators\b/g, "elf-lords");
        v = v.replace(/\bSenators\b/g, "Elf-lords");
        v = v.replace(/\bsenator\b/g, "elf-lord");
        v = v.replace(/\bSenator\b/g, "Elf-lord");
        v = v.replace(/\bcars\b/g, "cats");
        v = v.replace(/\bCars\b/g, "Cats");
        v = v.replace(/\bcar\b/g, "cat");
        v = v.replace(/\bCar\b/g, "Cat");
        v = v.replace(/\belections\b/g, "eating contests");
        v = v.replace(/\bElections\b/g, "Eating Contests");
        v = v.replace(/\belection\b/g, "eating contest");
        v = v.replace(/\bElection\b/g, "Eating Contest");
        v = v.replace(/\bcongressional leaders\b/g, "river spirits");
        v = v.replace(/\bCongressional leaders\b/g, "River spirits");
        v = v.replace(/\bcongressional Leaders\b/g, "river spirits");
        v = v.replace(/\bCongressional Leaders\b/g, "River Spirits");
        v = v.replace(/\bcongressional leader\b/g, "river spirit");
        v = v.replace(/\bCongressional leader\b/g, "River spirit");
        v = v.replace(/\bcongressional Leader\b/g, "river spirit");
        v = v.replace(/\bCongressional Leader\b/g, "River Spirit");
        v = v.replace(/\bHomeland security\b/g, "Homestar runner");
        v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
        v = v.replace(/\bhomeland security\b/g, "homestar runner");
        v = v.replace(/\bhomeland Security\b/g, "homestar Runner");
        v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
    
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
