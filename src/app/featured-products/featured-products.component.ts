import { Component } from '@angular/core';

export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  products: Product[] = [
    {
      name: 'Amor eterno',
      description: 'Clásicas rosas rojas',
      price: '$40.000 COP',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2RfQbG36O5iUQIza4BR8G8bmGcs5BbNaUlJtRoO18QZ3B-APmGZAzvDnaHnkDqgtVNExcQQs0wOkEDh3RdCf7Q6LqVymRWWv66Nb9r_sffcZefhQJWsPor5T3TxBw0WD9_mcIDvOytd3eIcOD8Vnd-zXznTjDAMRV4QnzKo-nB0GNuX_hmNnP6rT5ah1x4xVaAF-6qN8TJ06ymPNZ1zOSSzhN9jyezTzEI0AAwYgsYNq65JpCNClWkq1LixzWRqtN1AaEpPJsqJ8',
      imageAlt: 'arrangement of deep red roses in an elegant vase',
      badge: 'Más vendido'
    },
    {
      name: 'Dulzura de mamá',
      description: 'Flores en tonos pastel',
      price: '$20.000 COP',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADeLim9AoObbA42WYc_J6sYErFB8Q8lLpTrlvhu37f4TbhNVefapVEEHas5qZB3uEcDL7czPS2EsXAxVz1hS94TCfbRAdE8mtvDniHngHCXOje0uNaOkdvZNukWcoFfY7y5CW0CWQmss_x_v1g0wdWFXNOQIq6kPwRdXdaIRgFTHGxLnABDUCenIcXehYmnKOFTwTdEipqdHYAbJR48ELiACrQA80rwAyHQ8SGb4Z7XkAtM57HiDk9qu-pQAUN4RG1nKbJZb3S7Bw',
      imageAlt: 'bouquet of soft pastel flowers including peonies and ranunculus'
    },
    {
      name: 'Luz de mi vida',
      description: 'Girasoles radiantes',
      price: '$12.000 COP',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALU9-wMD0MKjBWnIv47YKQ2cB_kDi4APQzOPDxRonnPT1kbSYOO7R7o2F1iK4fi1thsqvXIEPF3IJiYZka6F2CR0KiCFqWl_pP1L_FU4Gglzpkrkv6ovWGwOc_PQuGEra2NzwO3UOX_TmmEtH7NN2ii_YpxfJGcCGmUqZiTxX3giMMK-tuDh53z02Txtm5K7Awz-kT4BYsp1R08tB_lOnvo5svhmrn2VBFqQfrC-bVGcMUvTMEKGvYNtcIdlQ2dWcGMVcI1eqXOUU',
      imageAlt: 'bright arrangement of sunflowers and solidago'
    }
  ];
}
