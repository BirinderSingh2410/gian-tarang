export function getKeys<T extends object>(obj: T): (keyof T)[] {
    if(obj)return Object.keys(obj) as (keyof T)[];
    else return []
  }
  