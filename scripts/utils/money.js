export function formatCurrent(priceCents){
      return (Math.round( priceCents)/100).toFixed(2);
}
export default formatCurrent;