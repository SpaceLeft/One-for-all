const Command = require("../../structures/Command"),
    Constants = require("../../utility/Constants");

module.exports = class extends Command {
    constructor(...args) {
        super(
            {
                aliases: ["eightball", "8"],
                userPermissionLevel: Constants.PermissionsLevels.SERVER_MEMBER,
                guildOnly: false
            },
            ...args
        );
    }

    async execute(message, args) {
        if (!args[0] || !message.content.endsWith("?")) {
            return message.error("fun/8ball:ERR_QUESTION");
        }

        const answerNO = parseInt(Math.floor(Math.random() * 10), 10);
        const answer = message.translate(`fun/8ball:RESPONSE_${answerNO + 1}`);

        message.channel.send(`${message.author.username}, ${answer}`);
    }
};
