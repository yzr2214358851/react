import Mock from 'mockjs'
const arr = [];
for(let i= 1;i<=60;i++){
  arr.push({
    title:Mock.Random.ctitle(5),
    id:Mock.Random.id(),
    price:Mock.mock({
      "number|1-100":100
    }).number,
    imgs:Mock.Random.image('200x200',Mock.Random.color())
  })
}
Mock.mock('/list',()=>{
  return arr
})