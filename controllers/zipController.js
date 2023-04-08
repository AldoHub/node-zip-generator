const AdmZip = require("adm-zip");

const zipController = {
    index: (req, res) => {
        res.send("index");
    },
    downloadZip: (req, res) => {
        const file = new AdmZip();
        /*
        file.addLocalFile("./assets/README.txt");
        file.addLocalFolder("./assets/important");
        */
        
        file.addLocalFolder("./assets");    
        file.writeZip("./temp/myZip.zip", (err) => {
          if(err){
              res.send("there was an error");
          }else{
            res.send("zip was created");
            //download the zip
            //delete the zip here
          }
        });
        
    }

}


module.exports = zipController;