const {response} = require('express');
const { getAllClientsService, createClientService, getClientByIdService, updateClientService, deleteClientService } = require('../services/clientServices');

const getAllClients = async (req, res = response, next) => {

    const allClients = await getAllClientsService();

    if(allClients) {
        return res.status(200).json({
            ok: true,
            msg: 'Get all the Clients',
            clients: allClients
        })
    } else {
        return res.status(500).json({
            ok: false,
            msg: 'Sothing error getting all the Clients'
        })
    }
};

const createClient = async (req, res = response, next) => {
    const {body} = req;

    const newClient = await createClientService(body);
    
    if(newClient){
        return res.status(200).json({
            ok: true,
            msg: 'Client created sucsess',
            client: newClient
        });
    } else {
        return res.status(500).json({
            ok: false,
            msg: 'Internal Server Error'
        });
    }
}

const updateClient = async (req, res = response , next) => {
    const { id } = req.params;
    const { body } = req;

    const clientSelected = await getClientByIdService(id);

    if(!clientSelected){
        return res.status(404).json({
            ok: false,
            msg: 'There is no Client with that ID'
        });
    }

    const updatedClient = await updateClientService(body, id);

    if(updatedClient){
        return res.status(200).json({
            ok: true,
            msg: 'Client Updated',
            client: updatedClient
        });
    } else {
        return res.status(500).json({
            ok: true,
            msg: 'Internal Server Error'
        });
    }
}

const deleteClient = async (req, res = response, next) => {
    const { id } = req.params;

    const clientSelected = await getClientByIdService(id);

    if(!clientSelected){
        return res.status(404).json({
            ok: false,
            msg: 'There is no Client with that ID'
        });
    }

    const deletedClient = await deleteClientService(id);

    if(deletedClient){
        return res.status(200).json({
            ok: true,
            msg: 'Client deleted',
            Client: deletedClient
        });
    } else {
        return res.status(500).json({
            ok: true,
            msg: 'Internal Server Error'
        });
    }
}

module.exports = {
    getAllClients,
    createClient,
    updateClient,
    deleteClient
}