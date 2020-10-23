# DelilahResto API Rest
API Rest built with Node.js, Express.js, MongoDB and Mongoose. This is built in order to make a CRUD of users, products and users' orders.

# Instructions:

1.  Clone the repo and run the command "npm install" so you can install all the dependecies and devDependencies.

<!-- 2.  Download MongoDB Compass in this link https://www.mongodb.com/try/download/compass and connect with the database using this URL: mongodb+srv://acamica:acamica@node-api-rest.fdfqz.mongodb.net/delilahresto?retryWrites=true&w=majority -->

2. You are going to see 7 collections: neighborhoods, orders, payment, products, roles, status and users. Each collection is formed with these documents:


## Neighborhoods

{
    "_id": "5f6472c69d2a3248bc6d677b",
    "name": "Patricios"
},
{
    "_id": "5f6472cf9d2a3248bc6d677c",
    "name": "Yofre Norte"
}


## Orders

[
  {
    "idUser": [
      "5f649fad29b6f2455c6be944"
    ],
    "idProduct": [
      "5f6465f755235a47c8a34581"
    ],
    "status": [
      "5f653dbdabab7eea2941bdc2"
    ],
    "_id": "5f8e53632dd1cf3b2455e68e",
    "createdAt": "2020-10-20T03:02:59.826Z",
    "updatedAt": "2020-10-20T03:05:15.692Z"
  }
]


## Payment

{
    "_id": {
        "$oid": "5f653e60abab7eea2941bdc6"
    },
    "type": "efectivo"
},
{
    "_id": {
        "$oid": "5f653e6eabab7eea2941bdc7"
    },
    "type": "débito"
},
{
    "_id": {
        "$oid": "5f653e8aabab7eea2941bdc8"
    },
    "type": "crédito"
}


## Products

{
    "_id": "5f6465f755235a47c8a34581",
    "description": "ravioles",
    "unitPrice": 180,
    "imgURL": "https://www.hazteveg.com/img/recipes/full/201305/R16-77309.jpg",
    "createdAt": "2020-09-18T07:47:03.643Z",
    "updatedAt": "2020-09-18T08:04:59.579Z"
},
{
    "_id": "5f6468c3975a8a00e0a861ba",
    "description": "lasagna",
    "unitPrice": 200,
    "imgURL": "https://www.knorr.com/content/dam/unilever/global/recipe_image/176/17603/176031-default.png/_jcr_content/renditions/cq5dam.web.800.600.png",
    "createdAt": "2020-09-18T07:58:59.059Z",
    "updatedAt": "2020-09-18T07:58:59.059Z"
},
{
    "_id": "5f6492db265900474c0e536c",
    "description": "hamburguesa",
    "unitPrice": 300,
    "imgURL": "https://okdiario.com/img/2019/05/27/dia-mundial-de-la-hamburguesa-655x368.jpg",
    "createdAt": "2020-09-18T10:58:35.638Z",
    "updatedAt": "2020-09-18T10:58:35.638Z"
}


## Roles

{
    "_id": {
        "$oid": "5f64813d4129944018dc8370"
    },
    "name": "user"
},
{
    "_id": {
        "$oid": "5f64813d4129944018dc8371"
    },
    "name": "admin"
}


## Status

{
    "_id": "5f653d7fabab7eea2941bdc1",
    "name": "nuevo"
},
{
    "_id": "5f653dbdabab7eea2941bdc2",
    "name": "confirmado"
},
{
    "_id": "5f653ddcabab7eea2941bdc3",
    "name": "preparando"
},
{
    "_id": "5f653de8abab7eea2941bdc4",
    "name": "enviando"
},
{
    "_id": "5f653df5abab7eea2941bdc5",
    "name": "entregado"
}


## Users
**(you can use them to test the API). The first one is admin role and, the second one, is user role.

{	
	“_id”: 5f649fad29b6f2455c6be944,
	"fullname": "Agustina Martinez",
	"username": "amartinez",
	"email": "agustina@gmail.com",
	"password": "12345",
	"neighborhood": "5f6472c69d2a3248bc6d677b",
	"role": ["admin"]
}
{
	"_id": "5f64aad54cf04945b4a0ad1f",
	"fullname": "Emilia Ocampo",
	"username": "eocampo",
	"email": "emilia@gmail.com",
	"password": "12345",
	"neighborhood": "5f6472cf9d2a3248bc6d677c",
	"role": ["user"]
}


# Routes

### http://localhost:3000/auth

POST / *admin or user*

### http://localhost:3000/users

GET / *admin only*
GET /:id *admin only*
PUT /:id *admin only*
DELETE /:id *admin only*

### http://localhost:3000/products

GET / *admin & user*
GET /:id *admin & user*
POST / *admin only*
PUT /:id *admin only*
DELETE /:id *admin only*

### http://localhost:3000/orders

GET / *admin only*
GET /:id *admin only*
POST / *admin & user*
PUT /:id *admin only*
DELETE /:id *admin only*

### http://localhost:3000/status

GET / *admin only*

### http://localhost:3000/neighborhoods

GET / *admin & user*
GET /:id *admin only*
POST / *admin only*
PUT /:id *admin only*
DELETE /:id *admin only*


# Users and roles

## Sign up (add user)

It must be made with the same format of the current users (without "_id"). If you don't specify the role, "user" is by default.

{	
	"fullname": "name lastname",
	"username": "my_username",
	"email": "my_email@example.com",
	"password": "my_password",
	"neighborhood": "choose_a_neighborhood_id",
	"role": ["admin"] or ["admin"]
}

## Sign in (with the current users)

{
	"username": "amartinez",
	"email": "agustina@gmail.com",
	"password": "12345"
}

or

{
	"username": "eocampo",
	"email": "emilia@gmail.com",
	"password": "12345"
}

#### If all username, email and password are right, you will receive the token as response. You must copy it and use it for each request in Header like this:

access-token: my_token

#### If the username is wrong, you will receive this response:

{
  "message": "Username not found."
}

#### If the email is wrong, you will receive this response:

{
  "message": "Email not found."
}

#### If the password is wrong, you will receive this response:

{
  "token": null,
  "message": "Invalid password."
}


## Create a product

If you want to create an product, it must be in this format:

{
    "description": "product_name",
    "unitPrice": product_price,
    "imgURL": "image_url"
}

#### If you try to add a new product without specifying a token, you will receive this response:

{
  "message": "No token provided."
}


## Edit a product

If you want to edit a product, you can write just the filter you want to update. For example:

{
    "unitPrice": new_product_price
}

#### If you want to edit a product without specify any token, you will receive this response:

{
  "message": "Unauthorized."
}


## Delete a product

If you want to delete a product, you can write just the filter you want to update. For example:

{
    "description": "product_name",
    "unitPrice": product_price,
    "imgURL": "image_url"
}

#### If you want to delete a product without specify any token, you will receive this response:

{
  "message": "Unauthorized."
}

#### If you want to delete a product specifying admin token, you will receive this response:

{
  "message": "The product was deleted successfully."
}


## Create an order

If you want to create an order, it must be in this format:

{
	"idUser": "id_del_usuario",
	"idProduct": "id_del_producto",
	"status": "id_del_status"
}


## Edit an order

If you want to edit a order, you can write just the filter you want to update. For example:

{
	"status": "new_status"
}

#### If you want to edit a order without specify any token, you will receive this response:

{
  "message": "Unauthorized."
}

#### If you want to do any Admin operation with "user" role, you will receive this response:

{
  "message": "User must be admin."
}
