 function highlightBestWords() {
        var poem = document.getElementById("poem");
        var words = poem.getElementsByClassName("word-animation");
        var delay = 0;

        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.innerText.toLowerCase() === "sullen") {
                word.style.animationDelay = delay + "s";
                delay += 0.2;
                word.classList.add("highlight");
            }
             if (word.innerText.toLowerCase() === "despising,") {
                word.style.animationDelay = delay + "s";
                delay += 0.2;
                word.classList.add("highlight");
            }

            word.style.animationDelay = delay + "s";
            delay += 0.2;
            word.classList.add("animate");
        }
    }

    window.onload = highlightBestWords;