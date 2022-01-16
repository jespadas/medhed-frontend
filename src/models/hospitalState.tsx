import { BaseState } from './baseState';
import { HospitalModel } from './hospitalModel';

export interface HospitalState extends BaseState {
    data: HospitalModel[]
}