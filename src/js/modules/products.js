import { products } from '../utils/products-utils';
import shareIcon from '../../assets/icons/share-icon.svg';
/* eslint-disable indent */
const productsGrid = document.querySelector('[data-grid]');

const productsRender = products.forEach((product) => {
  const template = document.createElement('template');
  template.innerHTML = `
   <div class="grid-item">
     <img src="${product.image}" alt="${product.name}" />
     <div class="grid-item_info">
       <h3>${product.name}</h3>
       <p>${product.type}</p>
       <div class="price">
         <span class="new-price">Rp ${product.price.newPrice}</span>
           ${
             product.price.oldPrice
               ? `<span class="old-price">Rp ${product.price.oldPrice}</span>`
               : ''
           }
           </div>
       ${product.sale ? `<div class='circle sale'>${product.sale}</div>` : ''}
       ${product.isNew ? '<div class="circle new">New</div>' : ''}
       </div>
       <div class='controls'>
         <button class='button-cart'>Add to cart</button>
         <div>
           <button class='ghost-button'>
             <img src='${shareIcon}'/>
             Share
           </button>
           <button class='ghost-button'>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M11.9996 21.0541C-8 10 5.99999 -2 11.9996 5.58806C18 -2 32 10 11.9996 21.0541Z" stroke="white" stroke-width="1.8"/>
           </svg>

             Like
           </button>
         </div>
       </div>
   </div>`;

  productsGrid.append(template.content);
});
export { productsGrid, productsRender };
