function normaliseAudience(member) {
  let normalised = member.trim();
  normalised = normalised.toLowerCase();
  normalised = normalised.replace(/\W+/gu, "-");
  return normalised;
}

export {normaliseAudience};
