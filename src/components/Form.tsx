import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { CreateReservationRest } from '../models/reservationModel';
import { ShiftModel } from '../models/shiftModel';

const currentDate = new Date();
const initReservation: CreateReservationRest = {
	date: currentDate.toISOString(),
	hospitalId: 0,
	patient: 0,
	shiftId: 0,
};

interface Props {
	shifts: ShiftModel[];
}

export const Form = ({ shifts }: Props) => {
	const { idHospital } = useParams<any>();
	const [editedReservation, setEditedReservation] =
		useState<CreateReservationRest>(initReservation);

	const setIdHospital = () => {
		setEditedReservation({
			...editedReservation,
			hospitalId: idHospital,
		});
	};

	const handleChangeShift = (e: any) => {
		setEditedReservation({
			...editedReservation,
			shiftId: e.target.value,
		});
	};

	useEffect(() => {
		const setIdHospital = () => {
			setEditedReservation({
				...editedReservation,
				hospitalId: idHospital,
			});
		};

		setIdHospital();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(editedReservation);

	return (
		<Paper sx={{ padding: '2em' }}>
			<Box
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
			>
				<Typography gutterBottom variant='h5' component='h2'>
					Make an ER reservation
				</Typography>
				<TextField
					id='standard-basic'
					label='Hospital'
					variant='outlined'
					value={idHospital ? idHospital : editedReservation.hospitalId}
					disabled
					onChange={(e) =>
						setEditedReservation({
							...editedReservation,
							hospitalId: Number(e.target.value),
						})
					}
					error
				/>
				<TextField
					type='number'
					InputProps={{
						inputProps: {
							max: 3,
							min: 0,
						},
					}}
					id='standard-basic'
					label='Patient'
					variant='outlined'
					value={editedReservation.patient}
					onChange={(e) => {
						setEditedReservation({
							...editedReservation,
							patient: e.target.value !== '' ? Number(e.target.value) : '',
						});
					}}
				/>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						disablePast
						label='Date'
						inputFormat='MM/dd/yyyy'
						value={editedReservation.date}
						onChange={(date: any) => {
							setEditedReservation({
								...editedReservation,
								date,
							});
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id='demo-simple-select-helper-label'>Shift</InputLabel>
					<Select
						labelId='demo-simple-select-helper-label'
						id='demo-simple-select-helper'
						value={editedReservation.shiftId}
						label='Shift'
						onChange={handleChangeShift}
					>
						<MenuItem value={0}>Select a shift</MenuItem>
						{shifts.map((shift) => (
							<MenuItem key={shift.id} value={shift.id}>
								{shift.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					paddingTop: '1em',
				}}
			>
				<Button variant='contained'>Make the reservaton</Button>
			</div>
		</Paper>
	);
};
