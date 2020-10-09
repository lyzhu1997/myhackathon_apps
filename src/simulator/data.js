export default class simulator{
    data ={
        fakeData : [
            {
                name:"VINCENT",
                IC:"123456-12-1244",
                familyName: "LOW",
                dateOfBirth: "2000/01/01",
                placeOfBirth: "Kedah",
                parentName: "NOPAPA",
                parentIC:"123456-12-1234",
                citizenship:"Malaysian",
                deathRegistry:false,
                telNo: "012-12345678"                
            },
            {
                name:"subjectBBB",
                IC:"123456-12-1234",
                familyName: "BBB",
                dateOfBirth: "2000/01/01",
                placeOfBirth: "Perak",
                parentName: "YESMAMA",
                parentIC:"123456-12-1234",
                citizenship:"Malaysian",
                deathRegistry:false,
                telNo: "012-12345678"                 
            },
        ]
    }

    checkData(IC){
        let check = false;
        let data = null;
        this.data.fakeData.map((dat)=>{
            if(dat.IC===IC){
                check = true;
                data = dat;
            }
        })
        return{
            check:check,
            data:data
        }
    }
}