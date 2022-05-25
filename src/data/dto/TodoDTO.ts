import { v4 as uuidv4 } from 'uuid';

import formatISO from 'date-fns/formatISO';

export class TodoDTO {
  public id: string = uuidv4();

  public name: string;

  public description: string;
}

export class TodoRegister extends TodoDTO {
  constructor() {
    super();
  }
  public createdDate: string = formatISO(new Date());

  public lastUpdatedDate: string = formatISO(new Date());
}
