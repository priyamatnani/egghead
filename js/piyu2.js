myApp.service('commonService',function(){


    var Employees = {};
    Employees.cast = [
        {
            name: "Priya Matnani",
            cardno: 59640,
            email : "priya.matnani@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        },
        {
            name: "Akhilesh",
            cardno: 59641,
            email : "akhilesh.madbo\i@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        },
        {
            name: "Debojeet",
            cardno: 59642,
            email : "priya.matnani@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        },
        {
            name: "loki",
            cardno: 59643,
            email : "priya.matnani@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        },
        {
            name: "Sachin",
            cardno: 59644,
            email : "priya.matnani@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        },
        {
            name: "Swapnil",
            cardno: 59645,
            email : "priya.matnani@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        },
        {
            name: "Sameer",
            cardno: 59646,
            email : "priya.matnani@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        },
        {
            name: "loki",
            cardno: 5964,
            email : "priya.matnani@searce.com",
            contact : 9552627850,
            post : "Software Engg Trainee"

        }

    ];

    this.getData = function(){

        return Employees;
    };

    this.getUserData = function(i){
        return Employees.cast[i];
    }

    this.getUserDataViaC = function(cNumber){
        for (var i = 0 ; i < Employees.cast.length ; i++) {
            if (Employees.cast[i].cardno === cNumber)
                return Employees.cast[i];
        }

    }

    this.add = function(name,cardno,email,contact,post){
        //Employees.cast.length +=1

        var flag = false;
        for( var i = 0 ; i < Employees.cast.length ; i++ ){
            if ( cardno == Employees.cast[i].cardno ) {
                flag = true;
                Employees.cast[i] = {
                    name: name,
                    cardno: cardno,
                    email : email,
                    contact : contact,
                    post : post
                };
            }
        }

        if(!flag)
            Employees.cast.push({
                name: name,
                cardno: cardno,
                email : email,
                contact : contact,
                post : post

            });

    };


    this.delete1 = function(cardno){
//        console.log("cardno service " + cardno);

//        console.log(Employees.cast[3].cardno)
        for(var i = 0 ; i < Employees.cast.length ; i++){
//            console.log(Employees.cast[i].cardno);
            if (Employees.cast[i].cardno==cardno){
                Employees.cast.splice(i,1);
                break;
            }


        }
    }



})