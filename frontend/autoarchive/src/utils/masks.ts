export const formatCurrency = (value: string): string => {
  if (!value || Number.isNaN(value) ) return "";

  const numericValue = value.replace(/\D/g, '');
  const limitedValue = Math.min(parseInt(numericValue, 10), 99999999).toString();
  const intValue = limitedValue.slice(0, -2) || '0';
  const decimalValue = limitedValue.slice(-2);
  const paddedIntValue = intValue.padStart(1, '0').replace(/^0+/, ''); 
  const formattedValue = `${paddedIntValue},${decimalValue}`;

  
  return formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};