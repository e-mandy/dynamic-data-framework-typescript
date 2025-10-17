import type { User } from "../models/User";

class DataManager<Type extends {id: number}>{
    private dataCenter: Type[] = [];

    add(item: Type): Type[]{
        this.dataCenter = [...this.dataCenter, item]

        return this.dataCenter;
    }

    getById(id: number): Type | undefined{
        return this.dataCenter.find(item => item.id == id)
    }

    update(id: number, data: Partial<Type>){
        const targetdata: Type | undefined = this.dataCenter.find(item => item.id == id);

        if(targetdata !== undefined){
            return Object.assign(targetdata, data);
        }

        return targetdata;

    }

    remove(id: number): Type[] | undefined{
        return this.dataCenter.filter(item => item.id != id);
    }

    filterBy<T, K extends keyof T>(dataTable: T[], key: K, value: T[K]): T[]{
        return dataTable.filter(item => item[key] == value)
    }

    merge<F, K>(obj1: F, obj2: K): F & K{
        const newObj = {...obj1, ...obj2};

        return newObj;
    }
}