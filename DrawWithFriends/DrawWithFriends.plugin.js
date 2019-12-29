//META { "name": "DrawWithFriends", "website": "https://inve1951.github.io/BetterDiscordStuff/" } *//

var DrawWithFriends = (function () {
    var CharacterCounter, TextArea, cancel, install, css, React, getOwnerInstance;
    var isCustomUploadPopupOpen = 0;
    var url = "https://aikufurr.com/draw/"

    function getRandomCode() {
        var letters = '0123456789ABCDEFGHIKGLMNOPQRSTUVWXYZ';
        var code = '';
        for (var i = 0; i < 6; i++) {
            code += letters[Math.floor(Math.random() * letters.length)];
        }
        return code;
    }
    class DrawWithFriends {
        getName() { return "Draw With Friends"; }

        getDescription() { return "Draw anything anywhere with your friends."; }

        getAuthor() { return "Aikufurr"; };

        getVersion() { return "0.0.1"; }

        load() {
            return window.SuperSecretSquareStuff != null ? window.SuperSecretSquareStuff : window.SuperSecretSquareStuff = new Promise(function (c, r) {
                return require("request").get("https://raw.githubusercontent.com/Inve1951/BetterDiscordStuff/master/plugins/0circle.plugin.js", function (err, res, body) {
                    if (err || 200 !== (res != null ? res.statusCode : void 0)) {
                        return r(err != null ? err : res);
                    }
                    Object.defineProperties(window.SuperSecretSquareStuff, {
                        libLoaded: {
                            value: c
                        },
                        code: {
                            value: body
                        }
                    });
                    return (0, eval)(body);
                });
            });
        }

        async start() {
            ({ getOwnerInstance, React } = await SuperSecretSquareStuff);
            this.main();
        }

        onSwitch() {
            this.main();
        }

        main() {
            let code = getRandomCode();
            
            try {
                let regex = /(DrawWithFriends:([0-9]||[A-Z])......)/g;
                let len = document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl').length;
                for (let i = 0; i < len; i++) {
                    if (regex.test(document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl')[i].innerHTML)) {
                        let codeFound = document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl')[i].innerHTML.match(regex).toString().substr(16);
                        document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl')[i].innerHTML = `<a tabindex="0" title="${url + codeFound}" class="anchor-3Z-8Bb da-anchor anchorUnderlineOnHover-2ESHQB da-anchorUnderlineOnHover" href="${url + codeFound}" rel="noreferrer noopener" target="_blank" role="button">${url + codeFound}</a><iframe class="DrawWithFriends" width="100%" height="550px" src="${url + codeFound}"></iframe>`
                    }
                };
            } catch (e) {
                console.log(e)
            }

            const button = document.createElement('div');
            button.class = "buttonWrapper-1ZmCpA da-buttonWrapper button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow"
            button.addEventListener('click', _ => {
                let current = "";
                let cId = ZLibrary.DiscordModules.SelectedChannelStore.getChannelId();
                if (!cId) return;
                let message = url + code + "\n[[DrawWithFriends:" + code + "]]";

                ZLibrary.DiscordModules.MessageActions.sendMessage(cId, { content: message }).then(_ => {
                    try {
                        let regex = /(DrawWithFriends:([0-9]||[A-Z])......)/g;
                        let len = document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl').length;
                        for (let i = 0; i < len; i++) {
                            if (regex.test(document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl')[i].innerHTML)) {
                                let codeFound = document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl')[i].innerHTML.match(regex).toString().substr(16);
                                document.getElementsByClassName('markupRtl-3M0hmN da-markupRtl')[i].innerHTML = `<a tabindex="0" title="${url + codeFound}" class="anchor-3Z-8Bb da-anchor anchorUnderlineOnHover-2ESHQB da-anchorUnderlineOnHover" href="${url + codeFound}" rel="noreferrer noopener" target="_blank" role="button">${url + codeFound}</a><iframe class="DrawWithFriends" width="100%" height="550px" src="${url + codeFound}"></iframe>`
                            }
                        };
                    } catch (e) {
                        console.log(e)
                    }
                });
            });
            button.innerHTML = `
            <div class="contents-18-Yxp da-contents button-3AYNKb da-button button-318s1X da-button"><svg xmlns="http://www.w3.org/2000/svg" height="30" version="1.1" viewBox="-23 0 512 512.00072" width="30">
            <g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
            		c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
            		C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                    L27.473,390.597L0.3,512.69z"/></g></svg></div>`;
            document.getElementsByClassName('buttonWrapper-1ZmCpA da-buttonWrapper button-38aScr da-button lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN da-grow')[0].before(button)
        }
    }

    return DrawWithFriends;
})();
