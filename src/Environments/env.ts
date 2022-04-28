import { DevEnvironment } from "./dev.env";
import { ProdEnvironment } from "./prod.env";

export interface Environment{
    db_url : string
}

export function env(): Environment{
    if('production'){
        return ProdEnvironment
    }else{
        return DevEnvironment
    }
}