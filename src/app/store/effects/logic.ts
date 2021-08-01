import { GitSearch } from '../../models/git-search';

export const filter = (repositories: GitSearch, filters: Array<string>): GitSearch => {
  if (!filters.length) {
    return repositories;
  }

  let filteredItems = [];

  for (const filter of filters) {
    filteredItems = [
      ...filteredItems,
      ...repositories.items.filter(item => item.language === filter)
    ];
  }

  return { ...repositories,
    items: [...filteredItems]
  };
};
