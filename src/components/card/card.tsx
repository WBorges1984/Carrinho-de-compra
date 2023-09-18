import { Box, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface CardItensProps{
  nome: String,
  preco: String,
  decricao: String,
  urlImage: string
}

export default function CardItens(props:CardItensProps) {
  
  return ( <Box>
    <Card sx={{ maxWidth: 217, maxHeight: 420, marginLeft: 5, marginTop: 3 }}>
      
      <Image  className='p-2 mt-2 content-stretch' src={props.urlImage} alt='apple-watch' width={217} height={138}/>
      {/* <CardMedia
        sx={{ margin: 2, height: 138, width: 111, }}
        image="img/beats-headphones.svg"
        title="apple-watch"
        proo
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.decricao}
        </Typography>
        <Typography variant="h5" fontWeight={900} color="black">
        R$ {props.preco}
        </Typography>
      </CardContent>
    </Card>
      <Paper  sx={{bgcolor:'green',height: 50, width:217, borderRadius: '10px', p: 1, marginLeft: 5, marginTop:1 }}>
        <Button  sx={{color: 'white', textAlign: 'center', fontStyle: 'initial' }} size="medium">Comprar</Button>
      </Paper>
    </Box>
  );
}
