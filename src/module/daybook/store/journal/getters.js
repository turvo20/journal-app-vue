// export const myActions =  ( state ) =>{
// return state.algo
// }

export const getEntryByTerm =
  (state) =>
  (term ='') => {
    if (term.length === 0) return state.entries;
    return state.entries.filter(item =>
      item.text.toLowerCase().includes(term.toLowerCase())
    );
  };

export const getEntryById = (state) =>(id='')=> {
  const entry = state.entries.find( entry => entry.id === id)
  if(!entry) return
  return {...entry}
};
