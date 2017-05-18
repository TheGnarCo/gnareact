import entityGetter from 'react-entity-getter';

const pathToEntities = (entityName) => {
  return `entities.${entityName}.data`;
};

export default entityGetter(pathToEntities);
