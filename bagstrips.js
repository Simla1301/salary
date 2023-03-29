const backpack = {
        name : "everyday backpack",
        volume: 30,
        color: "grey",
        pocketnum : 15,
        straplength :{
            left: 26,
            right: 26,
        },
        bagopen: false,
        openclose: function(lidstatus) {
            this.bagopen = lidstatus;
            updatebackpack("lid status changed");
        },
        newstraplenghth: function(lengthleft,lengthright) {
            this.straplength.left = lengthleft;
            this.straplength.right = lengthright;
            updatebackpack("strap length updated");
            if(lengthleft>lengthright){
                console.log("length of the left strip is longer than the right");
            }
            else if(lengthright>lengthleft){
                console.log("length of the right strip is longer than the left");
            }
            else {
                console.log("length of the straps are the same");
            }
            
        },
} 
backpack.straplength=[30,30]
console.log( backpack);