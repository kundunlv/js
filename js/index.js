var cezarBtn = document.getElementById('cezar-btn');

//Objects
var cezarCipher = {

    ruAlphabet: 'абвгдеёжзиклмнопрстуфхцчшщъыьэюя',
    enAlphabet: 'abcdefghijklmnopqrstuvwxyz',
    symbols: '!#$%^&*()_+=-;:"\'/? ',

    get shift() {
        if (document.getElementById('cezar-crypt').checked) {
            return +document.getElementById('cezar-shift').value
        } else {
            return 0 - document.getElementById('cezar-shift').value
        }

    },

    get text() {
        return document.getElementById('cezar-text').value
    },

    get encrypt() {
        var result = "";
        var chr = "";
        for (var i = 0; i < this.text.length; i++) {
            if (this.ruAlphabet.indexOf(this.text[i]) >= 0) {
                chr = this.ruAlphabet.indexOf(this.text[i]) + this.shift;
                if (chr >= this.ruAlphabet.length) {
                    chr = chr - this.ruAlphabet.length
                };
                result += this.ruAlphabet[chr];
            } else if (this.enAlphabet.indexOf(this.text[i]) >= 0) {
                chr = this.enAlphabet.indexOf(this.text[i]) + this.shift;
                if (chr >= this.enAlphabet.length) {
                    chr = chr - this.enAlphabet.length
                };
                result += this.enAlphabet[chr];
            } else if (this.symbols.indexOf(this.text[i])) {
                result += this.text[i]
            }
        };
        return result;
    }

};

// Events
cezarBtn.addEventListener('click', function() {
    document.getElementById('cezar-result').innerText = cezarCipher.encrypt
});