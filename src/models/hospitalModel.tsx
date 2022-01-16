import { ShiftModel } from './shiftModel';

export interface HospitalModel {
    address: string
    description: string
    id: number
    image: string
    name:string
    shift: ShiftModel[]
}