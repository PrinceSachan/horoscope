export const getSigns = async() => {
  return await fetch(
    'http://sandipbgt.com/theastrologer/api/sunsigns')
    .then((res) => res.json());
};