const Client = require('../models/Client');

const getAllClientsService = async () => {
    try {
        const clientsDB = await Client.find({});
        
        return clientsDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const getClientByIdService = async (id) => {
    try {
        const clientDB = await Client.findById( id );

        return clientDB;

    } catch (error) {
        console.log(error);
        return null;
    } 
}

const createClientService = async (data) => {
    const newClient = new Client(data);
    try {
        const newClientDB = await newClient.save();
        
        return newClientDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const updateClientService = async (data, id) => {

    const updatedClient = {
        ...data
    };

    try {
        const updatedClientDB = await Client.findByIdAndUpdate( id, updatedClient, { new: true } );

        return updatedClientDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteClientService = async (id) => {
    try {
        const deletedClientDB = await Client.findByIdAndDelete( id );

        return deletedClientDB;

    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    getAllClientsService,
    getClientByIdService,
    createClientService,
    updateClientService,
    deleteClientService
}