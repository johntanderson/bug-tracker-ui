import { styled } from '@mui/material/styles';
import {Card} from "@mui/material";

export default styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    backgroundColor: '#fff',
    // display: 'flex',
    // flexDirection: 'column',
    // position: 'relative',
}));