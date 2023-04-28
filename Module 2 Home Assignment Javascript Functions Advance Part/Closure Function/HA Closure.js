function counter(){
    let count = 1;
    return (`original count: ${count}, new count: ${add(count)}`);

    function add(count){
        count += 1;
        return count;
      
    }
  
}

console.log(counter());
