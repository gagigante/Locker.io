export default class CategorySchema {
    static schema = {
      name: 'Category',
      primaryKey: 'id',
      properties: {
        id: { type: 'string', indexed: true },  
        CategoryName: 'string',
        CategoryColor: 'string',        
      },
    };
  }