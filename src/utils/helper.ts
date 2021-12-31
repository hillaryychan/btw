import {AudienceList, Note, NoteDocument} from "src/types";

export function canShow(note: Note, filter: string) {
  return filter ? note.audience.includes(filter) : true;
}

export function containsDuplicates(array: AudienceList) {
  return new Set(array).size !== array.length;
}

export function createDoc(
  refCode: string,
  note: Note,
  filter: string
): NoteDocument {
  return {data: note, ref: refCode, show: canShow(note, filter)};
}

export function normaliseAudience(member: string) {
  let normalised = member.toLowerCase();
  normalised = normalised.replace(/\W+/gu, "-");
  return normalised;
}
