import { n, obj, nullable } from './data.js'


export function change_n() {
    n = 20
}

export function change_ojb_ref() {
    obj = {}
}

export function change_obj_property() {
    obj.age = 1000
}

export function change_nullable() {
    nullable = 1
}

