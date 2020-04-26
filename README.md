# vscode-e2e-cypress-boilerplate

Boilerplate to do e2e testing of vscode extension using Cypress and code-server

## Details

Vs code provides a way to test extension by running another vscode instance locally. While it is a great way of writing unit tests I did not find a proper way of doing E2E scenarios. 

I have been also researching Cypress so I decided to combine both! 

The way the e2e setup works is the following:
1. extension is packaged into vsix (vscode package extension)
2. vscode server running on chrome is started (using code-server)
3. Cypress connects to that vscode server and runs the test cases on it. 
4. After the tests are finished, the server is shutdown. 

## Requirements

Docker and docker-compose are required to run code-server.