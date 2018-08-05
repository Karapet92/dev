const arr = ['banan','lemon','kiwi'];
arr.forEach(function(value,key){
    
    //console.log(`I love num. ${key} ${value}`)
    
    
})

for(keu of arr.keys()){
    //console.log(keu)
}
/*
var newMap = new Map(arr);
console.log(newMap)*/

let a = 5;
if(true){
    
    
    let b=4;
   // console.log(a,b)
} 

//console.log(a,b)

const test = (name)=>{
    
    return `My name is ${name}`
    
}
//console.log(test('Karo'))

const countries = [
    {
        'title':'Arm',
        'num':true
    },
    {
        
        'title':'China',
        'num':true
    
    },
    {
        
        'title':'Russia',
        'num':false
    }
    
]
 const l = countries.filter((a)=> a.num ===true)
 
 console.log(l);