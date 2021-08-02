import { GitSearch } from '../../models/git-search';

export const filter = (repositories: GitSearch, filters): GitSearch => {
  if (!repositories.items.length) {
    return repositories;
  }

  let filteredItems = [];
  let isChanged: boolean = false;

  for (const filter of filters) {
    if (!filter.isChecked) {
      continue;
    }

    isChanged = true;

    filteredItems = [
      ...filteredItems,
      ...repositories.items.filter(item => item.language === filter.name)
    ];
  }

  if (!isChanged) {
    return repositories;
  }

  return { ...repositories,
    items: [...filteredItems]
  };
};
