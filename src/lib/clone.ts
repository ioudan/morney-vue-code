// 传入一个X类型，就返回一个X类型;<X>声明这个X类型
function clone<X>(data: X): X {
  return JSON.parse(JSON.stringify(data));
}

export default clone;
