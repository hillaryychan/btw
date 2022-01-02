import firebase from "firebase/app";

export type FirebaseConfig = {
  apiKey: string;
  appId: string;
  authDomain: string;
  messagingSenderId: string;
  projectId: string;
  storageBucket: string;
};

export type ErrorMessages = string[];

export type AudienceList = string[];

export type Note =
  | {
      title: string;
      description: string;
      audience: AudienceList;
    }
  | firebase.firestore.DocumentData;

export type NoteDocument = {
  ref: string;
  data: Note;
  show: boolean;
};

export type NoteFormData = Note & { audienceInput: string };
