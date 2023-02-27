// barrel file for exporting models
const {User} = requires("./User");
const {Thought} = requires("./Thought");
const {Reaction} = requires("./Reaction");

module.exports = { User, Thought, Reaction };