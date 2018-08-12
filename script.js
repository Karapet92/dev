const arr = ['banan','lemon','kiwi'];
console.log(...arr)
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
    
    return `My name is ${name} `
    
}

//const test = (name)=> `My name is ${name} `
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
 /* 
 let b = 5,
	b = 10;
	console.log(b) */
	
	//spread
	let num = [5,4,6,8,9];
	console.log(Math.min(...num))
	
	
	class cartoon{
		
		test(){
			return "Pika-Pika";
		}
		
		constructor (name){
			this.name = name
		}
		
		show(showName){
			return `Show name of ${this.name} is ${showName}`
		}
		
	}
	let obj = new cartoon('pikachu');
	console.log(obj.show('Pokemon'))
	console.log(obj.test())
	