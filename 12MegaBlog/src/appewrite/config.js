import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket; //storage
    // account tb ban na chahiye jb constructor call ho therefore use constructor
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,   // dataBaseID
                conf.appwriteCollectionId, // collectionId 
                slug,                      // document id can be anything else use id.unique()
                {                          // last object for extra info or extra attributes
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatePost(slug, {title,  content, featuredImage, status}){ // slug as 1st parameter bcs i want id to update a post isliye use direact hi object me na get krke alg se hi get ya uska reference diya
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,   // database id 
                conf.appwriteCollectionId, // collection id
                slug,       //doc id
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,   // database id 
                conf.appwriteCollectionId, // collection id
                slug       //doc id
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false;
        }
    }
    
    // when want to get one post 

    async getpost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,   // database id 
                conf.appwriteCollectionId, // collection id
                slug 
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false;
        }
    }

    // when wanted  specific posts then use queries

    async getposts(queries= [Query.equal("status","active")]) { //indexes lgane pdenge for queries jo humne collection ke andr bnai thi  &&&  and can pass queries in the list that is ki hum multiple queries likh skte he list ke andr
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,   // database id 
                conf.appwriteCollectionId,
                queries                    // queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false;
        }
    }
    
    // file upload service  --- storage service

    async uploadFile(file){  //do not give the name of file only but have to give files bolb if.e, actual file
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false;
        }
    }

    // file delete 

    async deleteFile(fileId){ 
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false;
        }
    }

    // file preview
    // do not need to use async as its response is very fast , and doesnt return any promise but directly give url of the resource
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            
        )
    }
}

const service = new Service()
export default service;
