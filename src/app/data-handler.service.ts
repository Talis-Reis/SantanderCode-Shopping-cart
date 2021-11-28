import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  productsList:any[] = [
    { id: 1, title: 'MONITOR GAMER AOC LEGEND C27G2ZE, 27 POL. 240HZ', path: 'product1', price: 1766.50, qtd: 0 },
    { id: 2, title: 'WATER COOLER DEEPCOOL CASTLE 360EX RGB, DP-GS-H12-CSL360EX', path: 'product2', price: 849.89, qtd: 0 },
    { id: 3, title: 'CADEIRA GAMER FORTREK CRUISER PRETO/AZUL, COM ALMOFADAS', path: 'product3', price: 1079.75, qtd: 0  },
    { id: 4, title: 'HEADSET GAMER RAZER KRAKEN ULTIMATE CHROMA 7.1', path: 'product4', price: 854.69, qtd: 0 },
    { id: 5, title: 'GABINETE GAMER PICHAU ASTRO LATERAL VIDRO PRETO, PG-ATR-BL01', path: 'product5', price: 299.99, qtd: 0 },
    { id: 6, title: 'PICHAU KIT UPGRADE, AMD RYZEN 5 5600G, X570 DDR4', path: 'product6', price: 3156.90, qtd: 0 },
    { id: 7, title: 'MONITOR GAMER MSI OPTIX G271 27" 1MS 144HZ, FREESYNC HDMI/DP', path: 'product7', price: 1876.55, qtd: 0 },
    { id: 8, title: 'PLACA MAE BIOSTAR, DDR4, SOCKET LGA1200, ATX', path: 'product8', price: 537.20, qtd: 0 },
    { id: 9, title: 'PROCESSADOR INTEL CORE I9-12900K, 16-CORE, 3.2GHZ', path: 'product9', price: 5549.30, qtd: 0 },
    { id: 10, title: 'PLACA MAE GIGABYTE B550 AORUS MASTER DDR4 SOCKET', path: 'product10', price: 3289.56, qtd: 0 },
    { id: 11, title: 'HEADSET GAMER JBL QUANTUM 400 PRETO, JBLQUANTUM, DRIVERS 50mm', path: 'product11', price: 399.44, qtd: 0 },
    { id: 12, title: 'SSD ADATA XPG SPECTRIX S40G 256GB M.2 2280 RGB, AS40G-256GT-C', path: 'product12', price: 489.99, qtd: 0 },
    { id: 13, title: 'MOUSE GAMER MULTILASER + MOUSEPAD 295X214X2MM, MO274', path: 'product13', price: 47.99, qtd: 0 },
    { id: 14, title: 'MOUSE GAMER HAVIT RGB 10000DPI, HV-MS878, 128 x 65 x 40.5 mm', path: 'product14', price: 198.85, qtd: 0 },
    { id: 15, title: 'MEMORIA CORSAIR VENGEANCE LPX 16GB (4X4) DDR4 3000MHZ, C16 PRETA', path: 'product15', price: 699.90, qtd: 0 },
    { id: 16, title: 'WATER COOLER MASTER MASTERLIQUID ILLUSION, 240MM', path: 'product16', price: 799.90, qtd: 0 },
    { id: 17, title: 'SSD WD GREEN 240GB M.2 2280 SATA III 6GB/S, WDS240G2G0B', path: 'product17', price: 269.90, qtd: 0 },
    { id: 18, title: 'SSD KINGSTON A400 240GB SATA 3 2.5, SA400S37/240G, 500 MB/s', path: 'product18', price: 215.50, qtd: 0 },
    { id: 19, title: 'GABINETE GAMER AIGO AQUARIUS PRETO LATERAL ACRILICO', path: 'product19', price: 316.30, qtd: 0 },
    { id: 20, title: 'GABINETE GAMER AZZA PYRAMID MINI 806 LATERAL DE VIDRO PRATA', path: 'product20', price: 1365.00, qtd: 0 }
  ];


  constructor() { }
}
