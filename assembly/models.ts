import { PersistentVector } from "near-sdk-as";

// Exporting the User class
@nearBindgen
export class User {
    userId: string;
    name: string;
    phone: string;
    email: string;
    password: string;
    
    constructor(accountId: string, name: string, phone: string, email: string, password: string){
        this.userId = accountId;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }   
}

// Exporting the Note class
@nearBindgen
export class Note {
    noteId: u64;
    note: string;
    userId: string;

    constructor(noteId: u64, note: string, userId: string){
        this.noteId = noteId;
        this.note = note;
        this.userId = userId;
    }   
}

 export const users = new PersistentVector<User>("u");
 export const notes = new PersistentVector<Note>("n"); 