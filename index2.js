const names = ['nabil','ali','ahmed']

function fun(arr,cb){
    arr.forEach(element => {
        cb(element);
        
        
    });
    console.log('load');

}


fun(names,(name)=>{
    console.log(name);

})
