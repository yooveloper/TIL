
// export default는 {} 괄호 없이 import 가능 하지만
// 그냥 export 는 {} 괄호로 가져와야 함
// * 사용하면 해당 파일에 모든것들 다 가져옴

import add from './10-3-module1.js';
// import { print } from './10-3-module1.js';
import * as m1 from './10-3-module1.js'
console.log(add(1,2));

m1.print();
console.log(m1.number);