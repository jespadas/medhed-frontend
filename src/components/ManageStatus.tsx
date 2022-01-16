import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { AlertMessage } from '../components/AlertMessage';

interface Props {
	status: 'loading' | 'error' | 'success';
	children: ReactElement;
}

export const ManageStatus = ({ status, children }: Props) => {
	if (status === 'loading') {
		return <LoadingSpinner />;
	}

	if (status === 'error') {
		return <AlertMessage />;
	}

	if (status === 'success') {
		return <Box>{children}</Box>;
	}

    return null;
};
