let birth_month = 3;
const current_month = 1;
current_year = 2023;
birth_year = 1990;
age = current_year - birth_year;

for(birth_month = 3; birth_month <= 11; birth_month ++){

if(birth_month <= current_month){
  console.log(`Patients: age ${age}`);


}
else {
    console.log(`Patients: accurate age is ${age}`);
}
}
