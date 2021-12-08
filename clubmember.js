const club = [
    ['Habib',18,'java','mirpur'],
    ['shamim',30,'python','uttora'],
    ['faruk',40,'php','mirpur'],
    ['shaown',45,'worpress','bonani'],
    ['rofat',50,'java','uttora'],
    ['jakariya',60,'python','mirpur'],
]
for (let i = 0; i < club.length; i++) {
    
    if (club[i][1] >= 18 && club[i][1] <= 40)  {
        club[i].map(data => console.log(data));
        console.log(`Hi Habib,you are youngar man. thank you from our team`);
    }else if (club[i][1] > 40 && club[i][1] <= 80)  {
        club[i].map(data => console.log(data));
        console.log(`Hi shaown,you are old man. thank you from our team`);
    }
    
}