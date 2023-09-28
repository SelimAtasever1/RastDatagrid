# RastDatagrid Web App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

RastDatagrid is a responsive datagrid application that enables users to list records and also provides functionality to add new ones.

This application utilizes datatables plugin and Taiga UI library to deliver an optimal user experience.

## Datatables Integration

for bootstrap 5: 
npm install datatables.net-bs5 --save 

update your angular.json "styles" with
   "node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css"

Install jQuery and DataTables via npm:
npm install jquery datatables.net --save

update your angular.json "styles" with
   "node_modules/datatables.net-dt/css/jquery.dataTables.css",
   
update your angular.json "scrşots" with
   "node_modules/jquery/dist/jquery.min.js",
   "node_modules/datatables.net/js/jquery.dataTables.js",

For further information visit: datatables.net


## TAIGA UI Integration

To integrate Taiga UI into your project, use the following command:

ng add taiga-ui

## FontAwesome Integration

npm install font-awesome --save
