import CardItens from '@/components/card/card';
import Navbar from '@/components/navbar/navbar';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (<>
      <h1 className={`
      align-text-top text-center
      mt-4 font-bold text-2xl`}>
        Listagem dos Produtos
    </h1>
    <Navbar />
    <Box sx={{display: 'flex', flexWrap: 'wrap', textAlign: 'center', justifyContent: 'center'}}>
      <CardItens
        nome={'Aplles'}
        decricao={'Redesigned from scratch and completely revised.'}
        preco={'499'}
        urlImage='/img/jlab-audio-wireless.svg'/>
      <CardItens
        nome={'Aplles'}
        decricao={'Redesigned from scratch and completely revised.'}
        preco={'1500'}
        urlImage='/img/macbook-pro.png'/>

    </Box>
    </>
)
}
