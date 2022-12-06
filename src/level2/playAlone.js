function solution(cards) {
  const taken = [];
  let group = [];
  const allGroups = [];

  for (let i = 0; i < cards.length; i++) {
    let cardNum = cards[i];

    if (taken.includes(cardNum)) {
      continue;
    }

    while (!group.includes(cardNum)) {
      group.push(cardNum);
      taken.push(cardNum);
      cardNum = cards[cardNum - 1];
    }

    allGroups.push(group);
    group = [];
  }

  if (allGroups.length === 1) return 0;

  allGroups.sort((a, b) => b.length - a.length);
  return allGroups[0].length * allGroups[1].length;
}
