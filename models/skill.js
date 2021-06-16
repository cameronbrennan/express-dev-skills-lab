const skills = [
  { id: 01, skill: "Karate", known: true },
  { id: 02, skill: "Plays Guitar", known: true },
  { id: 03, skill: "Rocket-Car Soccer", known: true },
  { id: 04, skill: "Space Flight", known: false },
  { id: 05, skill: "Speaks French", known: true }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill){
  skill.id = Date.now() % 1000000;
  skill.known = true; // <- set to True on PURPOSE! What's the point of adding a skill you don't have! :p
  skills.push(skill);
}

function deleteOne(id){
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
