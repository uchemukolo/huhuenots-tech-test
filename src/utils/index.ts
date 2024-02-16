export const extractStringsFromFilter = (filter: any[]) => {
    const stringSet = new Set<string>();
    filter.forEach(option => {
      if (typeof option === 'string') {
        stringSet.add(option);
      } else if (option.options) {
        option.options.forEach(subOption => {
          if (subOption.value) {
            stringSet.add(subOption.value);
          }
        });
      }
    });
    return stringSet;
  };