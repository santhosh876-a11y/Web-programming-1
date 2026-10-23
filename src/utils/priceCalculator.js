// Price calculation and Indian Rupee (₹) formatting utilities

/**
 * Format number into Indian currency format (e.g., ₹1,25,000)
 * @param {number} amount
 * @returns {string}
 */
export const formatINR = (amount) => {
  if (isNaN(amount) || amount === null || amount === undefined) return '₹0';
  const validAmount = Math.max(0, Math.round(amount));
  return '₹' + validAmount.toLocaleString('en-IN');
};

/**
 * Calculate totals from selected components
 * @param {Object} selectedComponents - Map of category id to component object
 * @param {boolean} includeGst - Whether GST (18%) is calculated on top or included
 * @param {number} gstRate - GST percentage rate (default 18%)
 */
export const calculateTotals = (selectedComponents = {}, includeGst = false, gstRate = 18) => {
  const componentsList = Object.values(selectedComponents).filter(Boolean);
  
  const subtotal = componentsList.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    return acc + Math.max(0, price);
  }, 0);

  const gstAmount = includeGst ? Math.round((subtotal * gstRate) / 100) : 0;
  const grandTotal = subtotal + gstAmount;
  const count = componentsList.length;

  return {
    subtotal,
    gstRate,
    gstAmount,
    grandTotal,
    count
  };
};
