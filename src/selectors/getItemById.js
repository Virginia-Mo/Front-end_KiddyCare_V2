/* eslint-disable radix */
// eslint-disable-next-line import/prefer-default-export
export function findItem(products, searchedSlug) {
    const product = products.find((testedproduct) => {
      return testedproduct.id === parseInt(searchedSlug);
    });
    return product;
  }