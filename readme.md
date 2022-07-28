
## CODE CHALLENGE --- TU GERENTE

This project called  hotelFlix is the backend challenge for the company TuGerente - Bolivia

### ========= API v1  ========
:::... Author: J. Manuel Muñoz Gutierrez ...:::

The backend stack for this project is:
-  Main Language: Javascript
-  Frameworks/ Libraries: Node(ver. 16.15.1) with ExpressJS(ver. 4.18.1)
-  Package Manager: npm (ver. 8.11.0)
-  ODM: Moongose (ver.1.0.0)
-  Non Relational Data Base Engine: MongoDB

To run this project follow the next steps:

1. Download or clone the repository into a folder in your local machine.

2. Verify the node and the npm version in a bash window:

    ### `node --version`
    ### `npm --version`

3. execute the following command:

    ### `npm install`

4. Create your instance in Mondodb ATLAS 

5. Rename the .sample.env to .env

6. Copy the connection String of mongo ATLAS to the .env key DB_CNN

7. Config your environment. 

    There are two files in the project to create and to configurate: 
        a. The main config:
            - Create the file ".env" in the root directory as .sample.env. and put the information of the port you want to use for your service for example PORT=4000

8. Runs the app in the development mode.<br />

    ### `npm run dev`

9. Open a browser and navigate the princial URL with the port you configurated for instance: [http://localhost:4000](http://localhost:4000)


Routes examplestest on POSTMAN:

CLIENTS:
1. Example GET => List of all clients: [http://localhost:4000/api/v1/clients/]
2. Example POST => Creates a client with the data passed to the body: [http://localhost:4000/api/v1/clients/]
        {
            "email": "manuelinux@gmail.com" ,
            "name": "Jose",
            "lastname": "Munoz",
            "nit": 2342344,
            "razon": "munoz",
            "phone": 68580680
        }
3. Example PUT => Updates the client with id `62e1fd6240d80c2e8276d73c` and with the data passed in the body: [http://localhost:4000/api/v1/clients/62e1fd6240d80c2e8276d73c]
        {
            "email": "diego.sejasl@gmail.com" ,
            "name": "Diego",
            "lastname": "Sejas",
            "nit": 2342344,
            "razon": "sejas",
            "phone": 68580681 
        }
4. Example DELETE => Delete the client with the id `62e1fdf7d2b6412cb43368a4`: [http://localhost:4000/api/v1/clients/62e1fdf7d2b6412cb43368a4]

RESERVATIONS:
1. Example GET => List of all reservations wuth their respectitive clients: [http://localhost:4000/api/v1/reservations/]
2. Example POST => Add a reservation passed in the body: [http://localhost:4000/api/v1/reservations/]
        The date is in jason format in the body like a number and the service will change it tu save before saving to the DB.
        {
            "code": "A200",
            "room": "Habitacion de una cama",
            "start": 10000000,
            "end": 1000000000,
            "state": "CREADO",
            "client": "62e2065fb3b84a47286f1462"
        }
3. Example PUT => Updates the reservation with id `62e200cdb08f52b2e2371099` and with the data passed in the body: [http://localhost:4000/api/v1/reservations/62e200cdb08f52b2e2371099]
        {
            "code": "A100",
            "room": "Habitacion Doble cama",
            "start": 1,
            "end": 100000000,
            "state": "PENDIENTE",
            "client": "62e1fd6240d80c2e8276d73c"
        }

    !!! YOU CAN UPDATE THE RESERVATION WITH THE CORREC STATES> PENDIENTE, PAGADO, ELIMINADO el front se encargaria de tener esos 3 valores y mandarlos al back

4. Example DELETE => Delete the reservation with the id `62e200cdb08f52b2e2371099`: [http://localhost:4000/api/v1/reservations/62e200cdb08f52b2e2371099]


<span style="background:#FFFF00; color:#000000">The next step is the documentation .YAML of the API with Swagger Editor using the OpenAPI specification v3.0.1</span>
