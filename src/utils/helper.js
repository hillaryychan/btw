function containsDuplicates(array) {
  return new Set(array).size !== array.length;
}

function createDoc(refCode, note) {
  return {data: note, ref: refCode};
}

function normaliseAudience(member) {
  let normalised = member.toLowerCase();
  normalised = normalised.replace(/\W+/gu, "-");
  return normalised;
}

export {containsDuplicates, createDoc, normaliseAudience};
