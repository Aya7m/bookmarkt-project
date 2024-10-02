
import myslq from "mysql2";
const connection = myslq.createConnection("mysql://u4rsstefivbmsrwz:3hvH1rCO9VxHD9M9XrXQ@bbdmhoaxahkbhyyobrzn-mysql.services.clever-cloud.com:3306/bbdmhoaxahkbhyyobrzn")
connection.connect((err) => {
    if (err) {
        console.log("error in database connection.",err);    
    } else {
        console.log('Connection established successfully');
    }
})


export default connection
