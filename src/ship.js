function Ship(length){

  return {
    length: length,
    no_of_hits : 0,
    sunk: function(){ 
      return this.no_of_hits >= this.length 
    },
    hit: function(){ 
      this.no_of_hits++ 
    },
  }
}

export default Ship;
