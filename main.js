function  checkkWh() {
    let kWh = document.getElementById("khour").value;
        if (kWh >= 500 && kWh <=1000){
            window.alert ("Heavy electricity users") ;
        }
        else if (kWh >= 301 && kWh <=499){
            window.alert ("Higher electricity usage") ;
        }
        else if (kWh >= 201 && kWh <=300){
            window.alert ("Typical electricity usage") ;
        }
        else if (kWh >= 101 && kWh <=200){
            window.alert ("Normal residential rate") ;
        }
                else if (kWh >= 0 && kWh <=100){
            window.alert ("Discounted electricity rates") ;
        }
        
        else {
            window.alert ("Please input a non-negative number, please try again later") ;
        }
}
