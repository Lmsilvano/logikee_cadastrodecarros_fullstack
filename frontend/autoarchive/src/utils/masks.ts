export const formatCurrency = (value: string): string => {

  return value
  .replace(/\D/g, '')
  .replace(/^0+/, '')
  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};