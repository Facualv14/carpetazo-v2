function buscarTweets() {
    const twitterUsername = document.getElementById('twitterUsername').value
    const opcion = document.getElementById('filtros')

    if (twitterUsername.length > 0) {
        if (opcion.value == "machistas") {
            const searchQuery = `https://twitter.com/search?q=from%3A${twitterUsername}%20%28mujer%20OR%20mujeres%20OR%20putas%29`
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "homofob") {
            const searchQuery = `https://twitter.com/search?q=from%3A${twitterUsername}%20%28gay%20OR%20gays%20OR%20putos%20OR%20trolos%29`
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "racistas") {
            const searchQuery = `https://twitter.com/search?q=from%3A${twitterUsername}%20%28negro%20OR%20negros%20OR%20marron%20OR%20marrones%20OR%20nword%29`
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "messi") {
            const searchQuery = `https://twitter.com/search?q=from%3A${twitterUsername}%20messi%20until%3A2021-01-01`
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "electoral") {
            const searchQuery = `https://twitter.com/search?q=from%3A${twitterUsername}%20%28milei%20OR%20massa%20OR%20larreta%20OR%20bullrich%29`
            window.open(searchQuery, '_blank')
        } else if (opcion.value == "seleccione") {
            alert("Seleccioná una opción para el carpetazo")
        }
    } else {
        alert("Poné un usuario")
    }
}


