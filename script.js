function calculateAge(){
    let dob=document.getElementById("date").value;
    

    dob.max = new Date().toISOString().split('T')[0];

    let today=new Date();
    let birtdate=new Date(dob);
    let ageInMilliseconds= today-birtdate;
    let ageDate= new Date(ageInMilliseconds);

    let year=ageDate.getFullYear()-1970;
    let months=ageDate.getUTCMonth();
    let days= ageDate.getUTCDate()-1;

    if (months == 0 && days == 0) {
        document.getElementById("result").innerHTML += `<p class="wishing">Happy Birthday!🎂🎈🎈</p>`;
    }
   else{
    document.getElementById("result").innerHTML= "You are "+ year + " years, "+ months +" months, " + days + " days old";
}
}