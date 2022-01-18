export interface CreateReservationRest {
	date: string
	hospitalId: number
	patient: number | ""
	shiftId: number
}
