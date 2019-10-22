request 模块，只负责和服务器交流。

request 本身应当是可解耦合的。可解耦合也意味着方便 mock 测试。

每个 request 单元都有两个结构体，recvData、reqData

其中 recvData 与服务端 view 的 RespData 数据的结构咬合

其中 reqData 与服务端 view 的 RecvData 数据的结构咬合

因此也可以用 codegen 由后端直接生成这部分的代码。