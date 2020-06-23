const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet(process.env.ID_ALPHABET, process.env.ID_SIZE);

module.exports = nanoid;
