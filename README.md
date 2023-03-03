# SultanApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run 'npm run build' to build the project. The build artifacts will be stored in the `dist/` directory.

## Steps to Deploy on AWS EC2

1. Build the Angular Project(Use 'npm run build') and push the changes to Github.
2. Connect to the AWS EC2 instance.
3. Once connected to the terminal, go to the directory '/var/www/html/sultanapp-angular'
4. Pull the changes from Github in that directory(sudo git pull origin master).
5. Restart the server using command - sudo services nginx restart
6. Check status of server using command - sudo services nginx status
7. Changes will be reflected on domain - http://lite.sultanapp.id/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
