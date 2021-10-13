import { logging } from 'near-sdk-as'
import { users, User, notes, Note} from "./models";

// ------------------------- USER smart contract methods ------------------------- //

// Method to register an User
export function registerUser (accountId: string, name: string, phone: string, email: string, password: string): void{
  assert(accountId.length>0,"The account to which the user belongs is required");
  assert(name.length>0 ,"Name is required");
  assert(phone.length>0,"The phone is required");
  assert(email.length>0,"Email is required");
  assert(password.length>0,"Password is required");

  let user = new User(accountId, name, phone, email, password);
  users.push(user);
}

// Method to query all users
export function queryUsers(): Array<User>{
  let result = new Array<User>(users.length);
  for (let i = 0; i < users.length; i++){
    let user = users[i];
    user.password = '';
    result[i] = user;
  }
  return result;
}


// Method to consult all the notes of a user
export function queryUser(userId: string): Array<User>{
  assert(userId.length>0,"The userId ir required");
  let result = new Array<User>();
  for (let i = 0; i < users.length; i++){
    if(users[i].userId == userId){
      result.push(users[i])
    }  
  }
  return result;
}


// ------------------------- NOTES smart contract methods ------------------------- //

// Method to record a note
export function recordNote(description: string, userId: string): void{
  assert(description.length>0,"Description is required");
  assert(userId.length>0,"The UserId is required");
  let note = new Note(notes.length, description, userId);
  notes.push(note);
}

// Method to consult all the notes of a user
export function queryNotesUser (userId: string): Array<Note>{
  assert(userId.length>0,"The userId ir required");
  let result = new Array<Note>();
  for (let i = 0; i < notes.length; i++){
    if(notes[i].userId == userId){
      result.push(notes[i])
    }  
  }
  return result;
}