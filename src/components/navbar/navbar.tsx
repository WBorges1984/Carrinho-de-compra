import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

export default function Navbar() {
const [value, setValue] = React.useState<number>(0);

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
};

return (
<div className='mt-5'>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered>
        <Tab sx={{color: 'white'}} label="Lista de Produtos" />
    </Tabs>
</div>
);
}

