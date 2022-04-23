import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default styled(Paper)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
}));