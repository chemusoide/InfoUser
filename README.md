# `InfoUser`

📄 Description
==================

InfoUser is a smart contract in which you can create a user to which information can be added as notes. The following are the main functionalities of this smart contract:

1. Create a user.
2. Consult a user by his id.
3. Add a note.
4. Consult note.

📦 Instalation
================

To run this project locally, you need to do the following steps:

Step 1: Prerequisites
---- 

1 . Make sure you have installed \ [Node.js]() ≥ 12 (we recommend using \ [nvm]())
2. Make sure you have installed yarn: `npm install -g yarn`
3. Install dependencies: `yarn install`
4. Create a NEAR test account \ [https://wallet.testnet.near.org/]()
5. Install NEAR CLI globally: \ [near-cli]() is a command line interface (CLI) to interact with NEAR blockchain

	yarn install --global near-cli

Step 2: NEAR CLI Configuration
---- 

Configure your near-cli to authorize your newly created trial account:

	near login

Step 3: Create and perform a smart contract development deployment
---- 

Create the InfoUser smart contract code and deploy the local development server: `yarn build` (see`package.json` for a full list of` scripts` you can run with`yarn`). This script returns you an implemented interim smart contract (save it for later use). To deploy the contract generated with `yarn build` in testnet \ [https://wallet.testnet.near.org/](), execute the command` yarn deploy` which will return the id of the deployed contract which we will use to execute each one of the methods contained in the contract.

📑 Exploring InfoUser smart contract methods
==================

The following commands allow you to interact with the smart contract methods using the NEAR CLI (for this, you must have an interim smart contract implemented).

Note: 
---- 
$ CONTRACT is a variable, but it is empty, you have to assign it, the way it assigns it is as follows, in the console, for example:
	export CONTRACT=dev-1633086545368-99916744449028

Command to create user: 
---- 
	near call $CONTRACT registerUser '{ "accountId":"string", "name":"string", "phone":"string", "email":"string", "password":"string"}' --account_id <your test account>

Command to query all users:
---- 
	near view $CONTRACT queryUsers

Command to query one user:
---- 
	near view $CONTRACT queryUser '{"userId":"string"}' 


Command to record a note:
---- 
	near call $CONTRACT recordNote '{"description":"string", "userId":"string"}' --account-id <your test account>

Command to consult all the notes of a user:
---- 
	near view $CONTRACT queryNotesUser '{"userId":"string"}'

🤖 Pruebas
---- 
Use the following command to run the tests:

	yarn test

🖥️ Video
---- 
	https://www.loom.com/share/04379ecd78384ceb8babf59d8b885856


