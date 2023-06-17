// Generates a random gamer tag
function generateGamerTag() {
  const adjectives = ["Swift", "Fierce", "Savage", "Shadow", "Blaze", "Mystic", "Rapid", "Steel", "Thunder", "Viper",
  "Ravage",
  "Blaze",
  "Shadow",
  "Fury",
  "Savage",
  "Legend",
  "Raptor",
  "Nyx",
  "Rogue",
  "Phantom",
  "Venom",
  "Nova",
  "Titan",
  "Ninja" ];
  const nouns = ["Strike", "Dragon", "Sniper", "Ninja", "Viper", "Raptor", "Phantom", "Reaper", "Titan", "Xero",
  "Bolt",
  "Raven",
  "Jinx",
  "Abyss",
  "Zephyr",
  "Grim",
  "Havoc",
  "Stryker",
  "Cipher",
  "Reaper",
  "Rapid",
  "Apex",
  "Enigma",
  "Zenith"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return randomAdjective + randomNoun;
}

// Generates a random password
function generatePassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const length = 10;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Generates a random pet name
function generatePetName() {
  const prefixes = ["Fluffy", "Cuddly", "Whiskers", "Paws", "Snuggles", "Biscuit", "Noodle", "Fuzzy", "Sunny", "Max",
  "Bella",
  "Charlie",
  "Lucy",
  "Luna",
  "Cooper",
  "Daisy",
  "Bailey",
  "Sadie",
  "Rocky",
  "Molly",
  "Buddy",
  "Lola",
  "Jack",
  "Zoe"];
  const suffixes = ["Paws", "Whiskers", "Tail", "Snout", "Mittens", "Nose", "Feet", "Ears", "Wag", "Oliver",
  "Sophie",
  "Milo",
  "Roxy",
  "Leo",
  "Coco",
  "Tucker",
  "Ruby",
  "Oscar",
  "Chloe",
  "Teddy",
  "Penny",
  "Winston",
  "Rosie",
  "Sam",
  "Lily"];

  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return randomPrefix + randomSuffix;
}

module.exports = {
  generateGamerTag,
  generatePassword,
  generatePetName
};
