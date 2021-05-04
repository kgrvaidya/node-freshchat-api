/*
Node wrapper for Freshchat v2 API

Copyright (C) 2021 K Ramakrishna Vaidya <kgrvaidya@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the MIT License, attached to this software package.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

You should have received a copy of the MIT License along with this
program. If not, see <https://opensource.org/licenses/MIT>.

http://spdx.org/licenses/MIT
*/

'use strict';

class Freshchat {

    constructor(baseURL, AuthToken) {
        this.baseURL = baseURL
        this.AuthToken = AuthToken
    }

    // initial implementation will only have endpoints for Users and Conversation, that too simple message.

    /*Users
    //---------------------------------------------------  
    Example User object 
        {
        "email":"abc@example.com",
        "avatar":{
            "url":"https://web.freshchat.com/img/johndoe.png"
        },
        "phone":"123456789",
        "properties":[
            {
                "name":"orderId",
                "value":"#1242"
            }
        ],
        "first_name":"ABC",
        "last_name":"XYZ"
        } 
    */
   // every call will make a fetch request, returning a promise. the promise may either resolve or reject
    
    createUser(firstName, lastName, email, avatar, phone, properties) {
        return fetch('https://api.freshchat.com/v2/users', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Authentication' : `Bearer ${this.AuthToken}`
            },
            body : {
                    "email": email,
                    "avatar":{ "url":avatar },
                    "phone": phone,
                    "properties": properties,
                    "first_name": firstName,
                    "last_name": lastName
                } 
        })
    }
}

module.exports = Freshchat;
