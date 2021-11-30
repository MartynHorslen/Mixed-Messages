const messages = {
    /* 3 message parts: verbs, nouns and adjectives. */
    _verbs: ["jumped", "cried", "giggled"],
    _nouns: ["person", "dog", "cat"],
    _adjectives: ["fast", "loudly", "slowly"],
    /* Set up functionality to add words to the pool for generating messages just in case I want to develop this later. */
    set verbs(verb) {
        // check that input is of correct type
        if (typeof verb === "string"){
            this._verbs.push(verb);
        }
    },
    set nouns(noun) {
        // check that input is of correct type
        if (typeof noun === "string"){
            this._nouns.push(noun);
        }
    },
    set adjectives(adjective) {
        // check that input is of correct type
        if (typeof adjective === "string"){
            this._adjectives.push(adjective);
        }
    },
    /* Generate message method */
    generate() {
        // Generate 3 random numbers; one for each type of word in message.
        const randVerb = this._verbs[Math.floor(Math.random() * this._verbs.length)];
        const randAdj = this._adjectives[Math.floor(Math.random() * this._adjectives.length)];
        const randNoun = this._nouns[Math.floor(Math.random() * this._nouns.length)];
        // Log a string containing the 3 words.
        console.log(`The ${randNoun} ${randVerb} ${randAdj} all day long.`);
    },
}

// Add words to their respective arrays
messages.adjectives = "swiftly";

// Generate message.
messages.generate();

/* 
Maybe in the future I could add a html page to display the message when the page loads using document.getElement(s)ByTagName/ID/ClassName. 
Maybe I could also use form input to add words to the arrays.
*/
