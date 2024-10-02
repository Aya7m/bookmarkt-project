import connection from "../../../db/connection.js"


// ===============================add new site===============================
export const addNewSite = async (req, res) => {
    const { name, url } = req.body
    const query=`insert into sites (name, url) values ('${name}', '${url}')`
    connection.execute(query, (err, result) => {
        if (err) {
          
            return res.status(400).json({ message: "query error", err })
        }
        if (!result.affectedRows) {
            return res.status(400).json({ message: "site fail to add" })
        }
        return res.status(200).json({ message: "site added successfully" })
    
    })
}

// ===============================get all sites===============================
export const getSites = async (req, res) => {
   
    const query=`select * from sites`
    connection.execute(query, (err, result) => {
        if (err) {
          
            return res.status(400).json({ message: "query error", err })
        }
       
        return res.status(200).json({ message: "all sites", result })
    
    })
}

// ===============================update sites===============================
export const updateSites = async (req, res) => {
   const { name, url,id } = req.body
    const query=`update sites set name='${name}', url='${url}' where id=${id}`
    connection.execute(query, (err, result) => {
        if (err) {
          
            return res.status(400).json({ message: "query error", err })
        }
        if (!result.affectedRows) {
            return res.status(400).json({ message: "site fail to update" })
        }
       
        return res.status(200).json({ message:"site updated successfully" })
    
    })
}

// ========================================delete sites===============================
export const deleteSites = async (req, res) => {
    const { id } = req.body
     const query=`delete from sites where id=${id}`
     connection.execute(query, (err, result) => {
         if (err) {
           
             return res.status(400).json({ message: "query error", err })
         }
         if (!result.affectedRows) {
             return res.status(400).json({ message: "site fail to delete" })
         }
        
         return res.status(200).json({ message:"site deleted successfully" })
     
     })
 }