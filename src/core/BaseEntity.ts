abstract class BaseEntity {
    id!: number;
    
    toJSON<Type>(value: Type[]) {
        JSON.stringify(value)
    }
}