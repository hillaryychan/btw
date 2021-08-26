function containsDuplicates(array) {
  return new Set(array).size !== array.length;
}

function normaliseAudience(member) {
  let normalised = member.toLowerCase();
  normalised = normalised.replace(/\W+/gu, "-");
  return normalised;
}

export {containsDuplicates, normaliseAudience};
