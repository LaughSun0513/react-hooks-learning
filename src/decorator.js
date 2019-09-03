function log(target, name, descriptor){
  descriptor.enumerable = false;
  return descriptor
}
class Parent {
  @log
  add(){
    console.log('1111')
  }
}

@play
class Son extends Parent {
    age(){
      console.log('18')
    }
}
function play(target){
    target.prototype.havePlay = true
    return target
}
let son1 = new Son();
console.log(son1.havePlay)

export default son1;

