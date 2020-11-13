import { create } from 'dva-core-ts';
import models from '@/models/index';

const app = create();

// 加载 model 对象， model 是 dva 中的一个重要概念，包含了 dva 数据与逻辑的对象
models.forEach(model => {
    app.model(model);
})

app.start();
export default app._store;