import { BaseState } from './baseState';
import { HospitalModel } from './hospitalModel';

export interface DetailState extends BaseState {
    data: HospitalModel
}