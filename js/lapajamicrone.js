(function ($) {
    $(function () {
        var playerId = "player";
        var mainPlayer;
        var loadMp3 = function (player, mp3) {
            player.source(mp3);
            player.play();
        };
        var showPlayer = function (player) {
            player.style.display = "block";
            player.style.width = "100%";
            player.style.height = "50px";
        };
        var playBtns = document.getElementsByClassName("play-btn");

        function addPlayerElement(parentElement) {
            var playerDiv = document.createElement("div");
            playerDiv.id = playerId;
            parentElement.appendChild(playerDiv);
        }

        function removePlayerElement() {
            var playerDiv = document.getElementById(playerId);
            if ("undefined" !== typeof (mainPlayer)) mainPlayer.unload();
            if (playerDiv) {
                var siblings = playerDiv.parentNode.childNodes;
                for (var i = 0; i < siblings.length; i++) {
                    siblings[i].style.display = "block";
                }
                playerDiv.parentNode.removeChild(playerDiv);
            }
        }

        var playBtnClick = function () {
            removePlayerElement();
            addPlayerElement(this.parentNode);
            var mp3Dir = "mp3/";
            var playerElement = document.getElementById(playerId);
            showPlayer(playerElement);
            mainPlayer = new Microne(playerElement)
            loadMp3(mainPlayer, mp3Dir + this.getAttribute("data-mp3"));
            this.style.display = "none";
        };

        for (var i = 0; i < playBtns.length; i++) {
            playBtns[i].addEventListener('click', playBtnClick, false);
        }
    });
})(window.jQuery);