function canShow(note, filter) {
  return filter
    ? note.audience.includes(filter)
    : true;
}

function containsDuplicates(array) {
  return new Set(array).size !== array.length;
}

function createDoc(refCode, note, filter) {
  return {data: note, ref: refCode, show: canShow(note, filter)};
}

function normaliseAudience(member) {
  let normalised = member.toLowerCase();
  normalised = normalised.replace(/\W+/gu, "-");
  return normalised;
}

export {canShow, containsDuplicates, createDoc, normaliseAudience};
