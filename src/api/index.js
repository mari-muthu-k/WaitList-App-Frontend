import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

async function subscribeReq(data){
    return await axios.post("/subscribe",data);
}

async function getMyStatusReq(email){
    return await axios.post("/mystatus",{
        email : email
    });
}

async function adminLoginReq(email,pass){
    return await axios.post("/admin/login",{
        email : email,
        password : pass
    });
}

async function adminListAllReq(from,to){
    return await axios.post("/admin/listAll",{
        start : from,
        end   : to
    });
}

async function updateUserReq(data){
    return await axios.post("admin/updateUser",data);
}

async function deleteUserReq(id){
    return await axios.delete("/admin/deleteUser",{
        id : id
    });
}

export {
    subscribeReq,
    getMyStatusReq,
    adminLoginReq,
    adminListAllReq,
    updateUserReq,
    deleteUserReq  
};