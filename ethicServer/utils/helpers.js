function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateUserData() {
  return {
    address: `via Indipendenza ${getRandomInt(1, 5)}`,
    phone: `+3093${getRandomInt(100, 999)}${getRandomInt(10, 99)}${getRandomInt(10, 99)})`,
    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
        .toString(36)
        .substring(7)}.svg`,
  };
}

module.exports = {
  generateUserData,
};
