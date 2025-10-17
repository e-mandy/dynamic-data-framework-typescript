class DataManager<Type extends {id: number}>{
    dataCenter: Type[] = [];

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
        return this.dataCenter.filter(item => item.id != id)
    }

    filterBy(attribute: string, data: string){
        //
    }
}