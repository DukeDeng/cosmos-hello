import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/hello/hello/genesis";
import { Params } from "./types/hello/hello/params";
import { MsgUpdateParams } from "./types/hello/hello/tx";
import { QuerySayHelloRequest } from "./types/hello/hello/query";
import { MsgUpdateParamsResponse } from "./types/hello/hello/tx";
import { QueryParamsRequest } from "./types/hello/hello/query";
import { QueryParamsResponse } from "./types/hello/hello/query";
import { QuerySayHelloResponse } from "./types/hello/hello/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/hello.hello.GenesisState", GenesisState],
    ["/hello.hello.Params", Params],
    ["/hello.hello.MsgUpdateParams", MsgUpdateParams],
    ["/hello.hello.QuerySayHelloRequest", QuerySayHelloRequest],
    ["/hello.hello.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/hello.hello.QueryParamsRequest", QueryParamsRequest],
    ["/hello.hello.QueryParamsResponse", QueryParamsResponse],
    ["/hello.hello.QuerySayHelloResponse", QuerySayHelloResponse],
    
];

export { msgTypes }