var campoEmail = document.querySelector('#email')
var sugestao = document.querySelector("#sugestao")

var domains = ['gmail.com', 'aol.com', 'outlook.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", "br"];

var superStringDistance = function (string1, string2) {
    // a string distance algorithm of your choosing
}

campoEmail.addEventListener('blur', function () {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function (suggestion) {
            console.log(suggestion.full)
            sugestao.style.display = 'inline-block'
            sugestao.innerText = `Você quis dizer: ${suggestion.full}?`
            sugestao.parentNode.classList.add('contatoCampo--erro')
            campoEmail.classList.add("contatoCampo--validouErro")
            sugestao.setAttribute('tabindex','0')
            sugestao.setAttribute('role', 'alert')
        }
    })
})