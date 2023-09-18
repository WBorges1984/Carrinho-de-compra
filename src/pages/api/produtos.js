// pages/api/produtos.js

const produtos = [
    {
      imagem: 'apple-watch',
      nome: 'Apple Watch Series 4',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 399,
      urlImage: '../../assets/img/apple-watch.svg',
    },
    {
      imagem: 'jbl-speaker',
      nome: 'Apple Watch Series 4',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 199,
      urlImage: '../../assets/img/jbl-speaker.svg',
    },
    {
      imagem: 'iphone-x',
      nome: 'Apple iPhone X 128GB',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 899,
      urlImage: '../../assets/img/iphone-x.svg',
    },
    {
      imagem: 'beats-headphones',
      nome: 'Beats Headphones',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 459,
      urlImage: '../../assets/img/beats-headphones.svg',
    },
    {
      imagem: 'macbook-pro',
      nome: 'Apple Macbook Pro',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 2499,
      urlImage: '../../assets/img/macbook-pro.svg',
    },
    {
      imagem: 'ipad-pro',
      nome: 'Apple iPad Pro 64GB',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 899,
      urlImage: '../../assets/img/ipad-pro.svg',
    },
    {
      imagem: 'homepod',
      nome: 'Apple Homepod',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 399,
      urlImage: '../../assets/img/homepod.svg',
    },
    {
      imagem: 'jlab-audio-wireless',
      nome: 'JBuds Air Wireless',
      descricao: 'Redesigned from scratch and completely revised.',
      preco: 249,
      urlImage: '../../assets/img/jlab-audio-wireless.svg',
    },
  ];
  
  export default (req, res) => {
    res.status(200).json(produtos);
  };
  