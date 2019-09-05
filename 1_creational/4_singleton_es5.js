(function(global){
  function Singleton (text){
    var instance = this;  
    var instancePrototype = Singleton.prototype;
  
    this.data = text || 'Singleton';
  
    instance.getData = function(){
      return this.data;
    }
  
    Singleton = function(){
      return instance;
    }
    
    Singleton.prototype = instancePrototype;
    Singleton.constructor = Singleton;
    instance.constructor = Singleton;
  
    return instance;
  }
  
  const first = new Singleton('first')
  Singleton.prototype.newProp = true;
  console.log(first.getData())
  
  const second = new Singleton('second')
  console.log(second.getData())
  console.log(second.newProp);
}(this))
